const { MongoClient, ServerApiVersion } = require('mongodb');

// Imports schema &  resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const { default: mongoose, connect } = require('mongoose');

// Connect to DB
mongoose
  .connect('mongodb+srv://ngocnb:1234@demo.rzc94.mongodb.net/?retryWrites=true&w=majority&appName=Demo')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log(error.message);
  });

// load DB methods
const mongoDataMethods = require('./data/db');

// start server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const startServer = async () => {
  const app = express();
  const port = 4000;
  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ mongoDataMethods }) });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
};
startServer();
