/* Mutations Resolver - update data */

/* imports */

const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const bcrypt = require("bcryptjs");

const { transport, emailContent } = require("../mail");
const { hasPermission } = require("../utils");

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // check if admin user is logged in
    if (!ctx.request.userId) {
      throw new Error("Please login to add a product");
    }
    // create iitem
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // we link products to the admin user that created them
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info,
    );
    return item;
  },
  // update item method
  updateItem(parent, args, ctx, info) {
    // make copy of all arguments
    const updates = { ...args };
    // delete the current ID from db
    delete updates.id;
    // process our update function
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info,
    );
  },
  /* Delete Item method */
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. get a particular item
    const item = await ctx.db.query.item({ where }, `{ id title user {id}}`);
    // 2. Check if user owns that product, or has the permissions to delete it
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      [" ADMIN_SUPER", "ADMIN_DELETE"].includes(permission),
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have Admin permissions to do that!");
    }
    // 3. Delete retrieved item
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  /* Signup User method */
  async signUpUser(parent, args, ctx, info) {
    // transform email to lowercase to prevent issues on signin
    args.email = args.email.toLowerCase();
    // hash user password .. using a SALT value of 10
    const password = await bcrypt.hash(args.password, 10);
    // run method to create user password in db
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] },
        },
      },
      info,
    );
    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie .. change to an hr in production
    });
    // Return user to browser page
    return user;
  },
  async signInUser(parent, { email, password }, ctx, info) {
    // check if there is a user
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No user found for this email: ${email}`);
    }
    // transform hash password and check if it matches user
    const matchesPassword = await bcrypt.compare(password, user.password);
    if (!matchesPassword) {
      throw new Error("You provided an invalid password");
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie .. change to an hr in production
    });
    //return user to browser page
    return user;
  },
  // updat user method
  updateUser(parent, args, ctx, info) {
    // make copy of all arguments
    const updates = { ...args };
    delete updates.id;
    // update user
    return ctx.db.mutation.updateUser(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info,
    );
  },
  // signout method
  signOutUser(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye!" };
  },
  async requestToken(parent, args, ctx, info) {
    // check if user exists
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No user found for this email: ${args.email}`);
    }
    // set reset token and expiry for an hour

    /* randomBytesPromisifyFunc ~ promisify(randomBytes)  */
    const randomBytesPromisifyFunc = promisify(randomBytes);
    const resetToken = (await randomBytesPromisifyFunc(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // token expires in 1 hr
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    // email user reset token
    const mailRes = await transport.sendMail({
      from: "pat.nzediegwu@gmail.com",
      to: user.email,
      subject: "Your Password Reset Link",
      html: emailContent(`Here is your password reset link:
      \n\n
      <a href="${
        process.env.FRONTEND_URL
      }/change-password?resetToken=${resetToken}">Click Here to Reset Password</a>`),
    });
    return { message: "Thank you" };
  },
  async resetUserPassword(parent, args, ctx, info) {
    //  check if password matches that in db
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords don't match existing user!");
    }
    // check if resetToken exists
    // check if resetToken has expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });
    if (!user) {
      throw new Error("This token is either invalid or expired!");
    }
    // hash new password
    const password = await bcrypt.hash(args.password, 10);
    // save new password and clear old resetToken.. create new resetUser
    const resetUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    // generate jwt token
    const token = jwt.sign({ userId: resetUser.id }, process.env.APP_SECRET);
    // set cookie on jwt
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // a year cookie.. change to an hr in production
    });
    // return user to browser
    return resetUser;
  },
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check if user is logged in
    if (!ctx.request.userId) {
      throw new Error("You would have to login to update permissions");
    }
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info,
    );
    // does user have admin permissions
    hasPermission(currentUser, ["ADMIN_SUPER", "PERMISSION_UPDATE"]);
    // update changed permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions,
          },
        },
        where: {
          id: args.userId,
        },
      },
      info,
    );
  },
  /* Add to Cart method */
  async addToCart(parent, args, ctx, info) {
    // check if user is signed in
    const userId = ctx.request.userId;
    if (!userId) {
      throw new Error("Please Sign In");
    }
    // Check the users current cart
    // existingCartItem = item added to cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });
    // is item already in cart, if not increase by 1
    if (existingCartItem) {
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        },
        info,
      );
    }
    // if no item in cart, create it
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId },
          },
          item: {
            connect: { id: args.id },
          },
        },
      },
      info,
    );
  },
  /* remove item from Cart method */
  async removeFromCart(parent, args, ctx, info) {
    // find the item to be removed
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{ id user {id}}`,
    );
    // make sure the user added that item/ they ownn it
    if (!cartItem) throw new Error("No Item Found");
    // not necessary
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error("You are not logged in");
    }
    // delete item from the cart
    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id },
      },
      info,
    );
  },
};

module.exports = Mutations;
