export const TrendingMoviesList = ({ trendingMovies }) => {
  return (
    <div>
      {trendingMovies.map(({ id, original_title, original_name }) => (
        <li key={id}>
          <p>{original_title || original_name}</p>
        </li>
      ))}
    </div>
  );
};
