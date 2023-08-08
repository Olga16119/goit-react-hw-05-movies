import axios from 'axios';
const api_key = `a90ebb64c23761c126aa80b4b044784d`;
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${api_key}`
    );
    return data;
  } catch (error) {
    console.log(`Error fetching movies`, error);
  }
};

export const onSearchByQuery = async query => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${api_key}&query=${query}`
    );
    if (!data.ok) {
      console.log(`Request was not ok`);
    }
    return data;
  } catch (error) {
    console.log(`Error fetching`, error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${api_key}`
    );
    return data;
  } catch (error) {
    console.log(`Error fetching movie details`, error);
  }
};

export const fetchCast = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${api_key}`
    );
    return data;
  } catch (error) {
    console.log(`Error fetching actors' informations`, error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${api_key}`
    );
    return data;
  } catch (error) {
    console.log(`Error fetching reviews information`, error);
  }
};
