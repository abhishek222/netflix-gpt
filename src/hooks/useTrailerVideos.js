import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideos = ({ movieId }) => {
  const dispatch = useDispatch();

  const getMovieVideos = async (movieId) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/939243/videos?language=en-US",
      API_OPTIONS
    );
    const videos = await response?.json();
    const filteredData = videos?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      filteredData?.length > 0 ? filteredData[0] : videos?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useTrailerVideos;
