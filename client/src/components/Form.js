import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { useQuery, useMutation } from '@apollo/client';
import { getMovies, getDirectors } from '../graphql-client/queries';
import { addMovie } from '../graphql-client/mutation';
import DirectorForm from './DirectorForm';

const FormComponent = () => {
  const { loading, data } = useQuery(getDirectors);

  const [newMovie, setNewMovie] = useState({
    name: '',
    genre: '',
    directorId: '',
  });

  const { name, genre, directorId } = newMovie;

  const onInputChange = (event) => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = function (event) {
    event.preventDefault();
    addMovieMutation({
      variables: { name, genre, directorId },
      refetchQueries: [{ query: getMovies }],
    });
    setNewMovie({ name: '', genre: '', directorId: '' });
  };

  const [addMovieMutation, movieMutation] = useMutation(addMovie);

  return (
    <Row className='mb-5'>
      <Col>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control type='text' placeholder='Hay nhap ten phim' name='name' onChange={onInputChange} value={name} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control type='text' placeholder='Hay nhap the loai cua phim' name='genre' onChange={onInputChange} value={genre} />
          </Form.Group>
          <Form.Group className='mb-3'>
            {loading ? (
              <p>Dang tai dao dien...</p>
            ) : (
              <Form.Control as='select' name='directorId' onChange={onInputChange} value={directorId}>
                <option value='' disabled>
                  Hay chon dao dien
                </option>
                {data.directors.map((temp) => (
                  <option key={temp.name} value={temp.id}>
                    {temp.name}
                  </option>
                ))}
              </Form.Control>
            )}
          </Form.Group>
          <Button className='float-right text-white' type='submit' variant='info'>
            Them phim
          </Button>
        </Form>
      </Col>
      <Col>
        <DirectorForm></DirectorForm>
      </Col>
    </Row>
  );
};

export default FormComponent;
