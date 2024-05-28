import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "896cbd9aff738d235d4631e016cb0edc";

const movieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=896cbd9aff738d235d4631e016cb0edc";

// https://api.themoviedb.org/3/trending/all/day?api_key=896cbd9aff738d235d4631e016cb0edc

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieGenreId = (id) =>
  axios.get(movieByGenreBaseUrl + "&with_genres" + id);

export default {
  getTrendingVideos,
  getMovieGenreId,
};
