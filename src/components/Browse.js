import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import useGetTopratedMovies from "../hooks/useGetTopratedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopratedMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) : (<> <MainContainer /> <SecondaryContainer /> </>)
    }
      {/* Planning of BrowsePage
     MainContainer
      - VideoBackground
      - videoTitle
    SecondaryContainer
      -MovieList*n
      -cards*n


     */}
    </div>
  );
};

export default Browse;
