/* start up our node server - app entry point */

/* import all our environment variables */
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//  Use express middleware to handle cookies (JWT)
server.express.use(cookieParser());

// xpand jwt toke, so we can parse the user ID
server.express.use((req, res, next) => {
  // destructure token from cookies
  const { token } = req.cookies;
  if (token) {
    // destructure userId
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // append userId to {req}
    req.userId = userId;
  }
  next();
});
// Use express middleware to populate current user
server.express.use(async (req, res, next) => {
  // if user aint logged in
  if (!req.userId) return next();

  const user = await db.query.user(
    { where: { id: req.userId } },
    "{id, permissions, name, email}",
  );
  req.user = user;
  next();
});
//
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  serverStartupDetails => {
    console.log(`Server is now running on port
      http:/localhost:${serverStartupDetails.port}`);
  },
);
