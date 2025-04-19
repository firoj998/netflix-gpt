import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetTopratedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  // Fetch data from TMDB api and updates store
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
   !topRatedMovies && getTopratedMovies();
  }, []);
};

export default useGetTopratedMovies;
