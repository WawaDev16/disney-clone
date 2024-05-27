import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "896cbd9aff738d235d4631e016cb0edc";

// https://api.themoviedb.org/3/trending/all/day?api_key=896cbd9aff738d235d4631e016cb0edc

const getTrendingVideos = axios.get(
  this.movieBaseUrl + "/trending/all/day?api_key" + api_key
);
