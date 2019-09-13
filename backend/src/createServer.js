/*  Our server implementation */

// import GraphQLServer
const { GraphQLServer } = require("graphql-yoga");

// import resolvers
const Mutation = require("./resolvers/Mutation.js");
const Query = require("./resolvers/Query.js");

// import db
const db = require("./db");

/* Create GraphQL Yoga Server */

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  });
}
module.exports = createServer;
