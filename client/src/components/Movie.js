import { React, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieDetail from './MovieDetail';

import { useQuery } from '@apollo/client';
import { getMovies } from '../graphql-client/queries';

const MovieList = () => {
  const [movieSelected, setMovieSelected] = useState(null);

  const { loading, error, data } = useQuery(getMovies);

  if (loading) return <p>Dang tai phim...</p>;
  if (error) return <p>Khong the lay duoc du lieu phim...</p>;

  return (
    <Row>
      <Col xs={8}>
        {data.movies.map((movie) => (
          <Card border='info' className='text-center shadow mb-3 col' key={movie.id} onClick={() => setMovieSelected(movie.name)}>
            <Card.Body>{movie.name}</Card.Body>
          </Card>
        ))}
      </Col>
      <Col>
        <MovieDetail movieId={movieSelected}></MovieDetail>
      </Col>
    </Row>
  );
};

export default MovieList;
