import { useState } from 'react';
import { Input, Container, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const inputHandler = e => {
    setMovieName(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName === '') {
      console.log('enter something');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   if (movieName === '') {
  //     console.log('enter something');
  //     return;
  //   }

  //   onSubmit(movieName);
  //   setMovieName('');
  // };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input value={movieName} onChange={inputHandler} />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};
