import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrendingMovies } from 'services/fetchApi';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      };
      getTrendingMovies();
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <main>
      <h2>Trending movies</h2>
      <ul>
        {trendingMovies.map(({ id, original_title, original_name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{original_title || original_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
