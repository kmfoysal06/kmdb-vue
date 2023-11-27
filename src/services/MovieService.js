import axios from "axios";
const setRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const api_key = process.env.VUE_APP_SECRET_API_KEY
export default {
  getMovies(generId,page) {
    return setRequest.get("/discover/movie?api_key="+ api_key +"&page=" + page+ "&with_genres=" + generId + "&per_page=10");
    console.log(process)
  } ,
    getMovie(id) {
    return setRequest.get(`movie/${id}?api_key=${api_key}`);
  }
  // getEvent(id) {
  //   return setRequest.get("/events/" + id);
  // },
};
