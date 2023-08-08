import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servises/api';

import { useState, useEffect } from 'react';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviewsById = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {
        console.log(`Error fetching reviews information`, error);
      }
    };
    fetchReviewsById();
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
