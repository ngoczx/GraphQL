import { gql } from '@apollo/client';

export const getMovies = gql`
  query moviesQuery {
    movies {
      name
      id
    }
  }
`;

export const getMovieDetail = gql`
  query MovieDetailQuery($id: ID!) {
    movie(id: $name) {
      id
      name
      genre
      director {
        name
        age
      }
      chanel
    }
  }
`;

export const getDirectors = gql`
  query directorsQuery {
    directors {
      name
      age
    }
  }
`;
