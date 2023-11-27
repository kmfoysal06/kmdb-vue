import axios from "axios";
const setRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getMovies(generId,page) {
    return setRequest.get("/discover/movie?api_key=6aee8af66cf310d1c78d8cf04df0cf54&page=" + page+ "&with_genres=" + generId + "&per_page=10");
    console.log(process)
  } ,
    getMovie(id) {
    return setRequest.get(`movie/${id}?api_key=6aee8af66cf310d1c78d8cf04df0cf54`);
  }
  // getEvent(id) {
  //   return setRequest.get("/events/" + id);
  // },
};
