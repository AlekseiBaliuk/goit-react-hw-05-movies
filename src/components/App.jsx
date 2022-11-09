import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Reviews from 'components/Reviews/Reviews';
import Cast from 'components/Cast/Cast';
import SharedLayout from './SharedLayout/SharedLayout';

const createAsyncComponent = path => lazy(() => import(path));
// const Home = createAsyncComponent('../pages/Home');
// const Movies = createAsyncComponent('../pages/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails');
// const Cast = createAsyncComponent('./Cast');
// const Reviews = createAsyncComponent('./Reviews');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
