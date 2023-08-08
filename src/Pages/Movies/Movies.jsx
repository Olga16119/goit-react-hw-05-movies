import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { onSearchByQuery } from 'servises/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(`query`) ?? ``;

  useEffect(() => {
    const onSearch = async () => {
      try {
        const data = await onSearchByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(`Error fetching`, error);
      }
    };
    onSearch();
  }, [query]);
  const updateQueryString = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={updateQueryString}
        placeholder="Search for a movie"
      />
      <button className={css.buttonSearch} type="button">
        Search
      </button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.linkMovie}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
