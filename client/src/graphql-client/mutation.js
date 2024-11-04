import { gql } from '@apollo/client';

export const addMovie = gql`
  mutation addMovieMutation($name: String, $genre: String, $directorId: ID!) {
    createMovie(name: $name, genre: $genre, directorId: $authorId) {
      id
      name
    }
  }
`;

export const addDirector = gql`
  mutation addDircetorMutation($name: String, $age: Int) {
    createDirector(name: $name, age: $age) {
      id
      name
    }
  }
`;
