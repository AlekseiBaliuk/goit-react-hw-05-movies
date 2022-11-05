import { object } from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  //   const movie = fetchMovieById(movieId);

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        setError(error);
        // console.log(error);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  const poster = poster_path => {
    if (poster_path === null) {
      return 'https://via.placeholder.com/300sx450.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <main>
      {movie ? (
        <div>
          <div>
            <img
              src={`${poster(movie.poster_path)}`}
              alt={`${movie.title || movie.original_title || movie.name}`}
            />
          </div>
          <div>
            <div>
              <h2>{`${movie.title || movie.original_title || movie.name}`}</h2>
              <ul>
                <li>
                  <p>Vote / Votes</p>
                  <p>
                    <span>{`${movie.vote_average.toFixed(1)}`}</span>
                    <span> / </span>
                    <span>{`${movie.vote_count}`}</span>
                  </p>
                </li>
                <li>
                  <p>Popularity</p>
                  <p>{`${movie.popularity.toFixed(1)}`}</p>
                </li>
                <li>
                  <p>Original title</p>
                  <p>{`${
                    movie.title || movie.original_title || movie.name
                  }`}</p>
                </li>
                <li>
                  <p>{`${movie.genres.map(({ name }) => name).join(', ')}`}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Wops, try again</p>
      )}
    </main>
  );
};

{
  /* <div>
          <img src={poster(movie.poster_path)} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{parseInt(movie.release_date)}</p>
        </div> */
}
