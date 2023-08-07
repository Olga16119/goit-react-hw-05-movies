import axios from 'axios';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? `/`);
  console.log(movieId);
  useEffect(() => {
    const fetchMovieDetails = async()  => {
      const api_key = `a90ebb64c23761c126aa80b4b044784d`;
      const url = `https://api.themoviedb.org/3/movie/${movieId}&api_key=${api_key}`;
      try {
        const responce = await axios.get(url);
        // console.log(responce);

        setMovie(responce.data);
      } catch (error) {
        console.log(`Error fetching movie details`);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>{movie.title}</h2>{' '}
      <img src={movie.poster_path} alt={movie.title}></img>
      <Link to={backLinkLocation.current}>Go Back</Link>
      <p>User score: {Math.round((movie.vote_average / 10) * 100)}%</p>
      <p>Overview {movie.overview}</p>
      <p>Genres {movie.genres.map(genre => genre.name).join(`,`)}</p>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkLocation }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkLocation }}>
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
