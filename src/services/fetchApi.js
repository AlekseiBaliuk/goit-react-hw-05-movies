import axios from 'axios';

const APY_KEY = '0214e4f6556edfc65f2eadfc23b43510';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
  };

  const response = await axios.get('/trending/all/day', { params });
  const data = response.data;

  return data;
}

export async function fetchMovieById(movieId) {
  const params = {
    api_key: APY_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}`, { params });
  const data = response.data;

  return data;
}
