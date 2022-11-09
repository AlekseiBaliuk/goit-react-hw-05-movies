import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchMovieByName } from 'services/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = search => {
    setSearchParams({ query: search });
    setError(null);
  };

  useEffect(() => {
    if (query === null) return;
    async function getMovieById() {
      try {
        const movieData = await fetchMovieByName(query);
        if (movieData.length === 0) {
          console.log(`${query} not found`);
        } else {
          navigate(`/movies/?query=${query}`);
        }
        setMovies(movieData.results);
      } catch (error) {
        setError(error);
      }
    }
    getMovieById();
  }, [navigate, query]);

  // const handleFormSubmit = async name => {
  //   // if (query === '') return;

  //   try {
  //     const movieData = await fetchMovieByName(name);
  //     if (movieData.length === 0) {
  //       console.log(`${name} not found`);
  //       return;
  //     }
  //     if (movieData.length !== 0) {
  //       navigate(`/movies/?query=${name}`);
  //     }
  //     setMovies(movieData.results);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
      {error && <p>Try again</p>}
      <SearchBar onSubmit={handleFormSubmit} />

      {movies && <MoviesList movies={movies} />}

      <Outlet />
    </main>
  );
};
export default Movies;
