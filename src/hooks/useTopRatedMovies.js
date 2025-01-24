import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // Get now playing movies from the API and dispatch them to Redux store.
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addTopRatedMovies(movies.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
