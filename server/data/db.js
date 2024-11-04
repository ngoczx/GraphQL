const Director = require('../models/Director');
const Movie = require('../models/Movie');

const mongoDataMethods = {
  getAllMovies: async (condition = null) => {
    return condition === null ? await Movie.find() : await Movie.find(condition);
  },
  getAllDirectors: async () => {
    return await Director.find();
  },
  getMovie: async (args) => {
    return await Movie.findById(args);
  },
  getDirector: async (name) => {
    return await Director.findOne({ name: name });
  },
  getMovieDirector: async (args) => {
    return await Director.findById(args);
  },
  createMovie: async (args) => {
    const newMovie = new Movie(args);
    return newMovie.save();
  },
  createDirector: async (args) => {
    const newDirector = new Director(args);
    return newDirector.save();
  },
};

module.exports = mongoDataMethods;
