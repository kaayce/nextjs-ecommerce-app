/* Our Connection into our prisma db (MySQL) */

// prisma binding that lets us perform mutations etc directly with our db
const { Prisma } = require("prisma-binding");

// db
const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
