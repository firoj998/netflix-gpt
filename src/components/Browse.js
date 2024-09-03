import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import useGetTopratedMovies from "../hooks/useGetTopratedMovies";

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopratedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
