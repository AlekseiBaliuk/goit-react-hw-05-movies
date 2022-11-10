import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Container, Button } from './SearchBar.styled';
// import { toast, ToastContainer } from 'react-toastify';

export const SearchBar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const inputHandler = e => {
    setMovieName(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName === '') {
      // toast.info('Please enter something');
      alert('Please enter something');
      // console.log('enter something');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input value={movieName} onChange={inputHandler} />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
