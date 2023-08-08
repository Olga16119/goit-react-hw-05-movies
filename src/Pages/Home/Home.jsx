import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { fetchTrending } from 'servises/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  const fetchTrendingMovies = async () => {
    try {
      const data = await fetchTrending();

      setMovies(data.results);
    } catch (error) {
      console.log(`Error fetching movies`, error);
    }
  };
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={css.linkHome}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
