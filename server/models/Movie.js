const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  directorId: {
    type: String,
  },
  chanel: {
    type: String,
  },
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
