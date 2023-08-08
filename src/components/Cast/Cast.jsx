import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { fetchCast } from 'servises/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCastById = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(`Error fetching actors' informations`, error);
      }
    };
    fetchCastById();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className={css.cast}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg`
              }
              alt={actor.name}
              width="200"
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
