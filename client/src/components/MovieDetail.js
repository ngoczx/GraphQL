import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client';
import { getMovieDetail } from '../graphql-client/queries';

const MovieDetail = ({ movieId }) => {
  const { loading, error, data } = useQuery(getMovieDetail, {
    variables: { id: movieId },
    skip: movieId === null,
  });
  if (loading) return <p>Dang tai phim...</p>;
  if (error) {
    console.log(error.message);
    return <p>Khong the tai phim...</p>;
  }
  return (
    <Card bg='info' text='white' className='shadow'>
      <Card.Body>
        {data === undefined ? (
          <Card.Text>Hay chon phim...</Card.Text>
        ) : (
          <Fragment>
            <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle>Thể loại: {data.genre}</Card.Subtitle>
            <p>Đạo diễn: {data.director.name}</p>
            <p>Tuổi: {data.director.age}</p>
            <p>Chanel: {data.chanel}</p>
          </Fragment>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieDetail;
