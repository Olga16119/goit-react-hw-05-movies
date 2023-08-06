import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      const api_key = `a90ebb64c23761c126aa80b4b044784d`;
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`;
      try {
        const responce = await axios.get(url);
        // console.log(responce);
        setCast(responce.cast);
      } catch (error) {
        console.log(`Error fetching actors' informations`);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
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
