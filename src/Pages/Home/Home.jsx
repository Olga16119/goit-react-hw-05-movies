import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  const fetchTrendingMovies = async () => {
    const api_key = `a90ebb64c23761c126aa80b4b044784d`;
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;

    try {
      const { data } = await axios.get(url);

      // console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(`Error fetching movies`);
    }
  };
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
