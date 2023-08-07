import axios from 'axios';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? `/`);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const api_key = `a90ebb64c23761c126aa80b4b044784d`;
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`;
      try {
        const responce = await axios.get(url);

        setMovie(responce.data);
      } catch (error) {
        console.log(`Error fetching movie details`, error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div className={css.details}>
      {' '}
      <Link to={backLinkLocation.current} className={css.backLink}>
        Go Back
      </Link>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        width="250"
      ></img>
      <p className={css.description}>
        {' '}
        User score: {Math.round((movie.vote_average / 10) * 100)}%
      </p>
      <p className={css.description}> Overview: {movie.overview}</p>
      <p className={css.description}>
        {' '}
        Genres: {movie.genres.map(genre => genre.name).join(`, `)}
      </p>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link
              to="cast"
              className={css.informLink}
              state={{ from: backLinkLocation }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              className={css.informLink}
              state={{ from: backLinkLocation }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
