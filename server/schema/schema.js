const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    movies: [Movie]
    movie(id: String!): Movie
    directors: [Director]
    director(name: String): Director
    chanel: [Chanel]
  }

  type Mutation {
    createMovie(name: String!, genre: String!, rate: Int, directorId: String, chanel: String!): Movie
    createDirector(name: String!, age: Int): Director
  }

  type Movie {
    id: ID
    name: String
    genre: String
    rate: Float!
    chanel: Chanel
    directorId: String!
    director: Director
  }

  type Director {
    id: ID!
    name: String
    age: Int
    movies: [Movie]
  }

  type Chanel {
    id: ID
    name: String
    movies: [Movie]
  }
`;

module.exports = typeDefs;
