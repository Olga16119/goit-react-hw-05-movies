import { useParams } from 'react-router-dom';

const { default: axios } = require('axios');
const { useState, useEffect } = require('react');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      const api_key = `a90ebb64c23761c126aa80b4b044784d`;
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews&api_key=${api_key}`;
      try {
        const responce = await axios.get(url);
        setReviews(responce.results);
      } catch (error) {
        console.log(`Error fetching reviews' information`);
      }
    };
    fetchReviews();
  }, [movieId]);
  if (reviews.length === 0) {
    return <div>No reviews available for this movie.</div>;
  }
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
