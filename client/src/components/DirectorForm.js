import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useQuery, useMutation } from '@apollo/client';
import { getDirectors } from '../graphql-client/queries';
import { addDirector } from '../graphql-client/mutation';

const DirectorForm = () => {
  const [newDirector, setNewDirector] = useState({
    name: '',
    age: '',
  });
  const { dname, age } = newDirector;

  const onInputChange = (event) => {
    setNewDirector({
      ...newDirector,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = function (event) {
    event.preventDefault();

    addDirectorMutation({
      variables: { dname, age },
      refetchQueries: [{ query: getDirectors }],
    });
    setNewDirector({ dname: '', age: '' });
  };

  const [addDirectorMutation, DirectorMutation] = useMutation(addDirector);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='mb-3'>
        <Form.Control type='text' placeholder='Hay nhap ten dao dien' name='dname' onChange={onInputChange} value={dname} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type='number' placeholder='Hay nhap tuoi cua dao dien' name='age' onChange={onInputChange} value={age} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control className='invisible' />
      </Form.Group>
      <Button className='float-right text-white' type='submit' variant='info'>
        Them dao dien
      </Button>
    </Form>
  );
};

export default DirectorForm;
