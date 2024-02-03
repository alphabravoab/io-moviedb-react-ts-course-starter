import React, { FunctionComponent } from 'react';
import { useAppSelector } from "../util/reduxHooks";
import { selectFavorites } from "../store/favorites";
import MovieCard from "../components/MovieCard";

const Favorites: FunctionComponent = () => {
  const fav = useAppSelector(selectFavorites());
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {fav.map(movie => <MovieCard movie={movie} key={movie.imdbID} />)}
    </ul>
  );
};

export default Favorites;
