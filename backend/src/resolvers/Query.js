/* Query Resolver - get/fetch data */
const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  currentUser(parent, args, ctx, info) {
    // check if there is a user
    if (!ctx.request.userId) {
      return null;
    }
    // gets user
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },
  async users(parent, args, ctx, info) {
    // is user logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }
    // check if user has right permissions
    hasPermission(ctx.request.user, ["ADMIN_SUPER", "PERMISSION_UPDATE"]);
    //if they do .. query all users
    return ctx.db.query.users({}, info);
  },
};

module.exports = Query;
