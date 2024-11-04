const { Query } = require('mongoose');
const { directors, movies, chanel } = require('../data/data');
const Movie = require('../models/Movie');

const resolvers = {
  // Query
  Query: {
    directors: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllDirectors();
    },
    director: async (parent, { name }, { mongoDataMethods }) => {
      return await mongoDataMethods.getDirector(name);
    },
    movies: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllMovies();
    },
    movie: async (parent, { id }, { mongoDataMethods }) => {
      return await mongoDataMethods.getMovie(id);
    },
  },

  Movie: {
    director: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getMovieDirector(parent.directorId);
    },
  },

  Director: {
    movies: async ({ id }, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllMovies({ directorId: id });
    },
  },

  // Mutation
  Mutation: {
    createMovie: async (parent, args, { mongoDataMethods }) => {
      await mongoDataMethods.createMovie(args);
    },
    createDirector: async (parent, args, { mongoDataMethods }) => {
      await mongoDataMethods.createDirector(args);
    },
  },
};

module.exports = resolvers;
