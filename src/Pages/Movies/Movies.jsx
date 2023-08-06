import axios from 'axios';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(`query`) ?? ``;
  // console.log(searchParams)

  const onSearch = async () => {
    const api_key = `a90ebb64c23761c126aa80b4b044784d`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
    try {
      const responce = await axios.get(url);
      if (!responce.ok) {
        console.log(`Request was not ok`);
      }
      // console.log(responce);
      setMovies(responce.data.results);
    } catch (error) {
      console.log(`Error fetching`);
    }
  };

  const updateQueryString = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={updateQueryString}
        placeholder="Search for a movie"
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
