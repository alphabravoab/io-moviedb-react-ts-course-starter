import React, { FunctionComponent } from 'react';
import { useQuery, useQueryClient } from "react-query";
import { httpGet } from "../util/httpClient";
import MovieCard from "../components/MovieCard";
import { selectSearch } from "../store/search";
import { useAppSelector } from '../util/reduxHooks';
import NoticeBlock from "../components/NoticeBlock";
import {IMDBMovie} from "../model/movie";
import Spinner from "../components/Spinner";

const Home: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const search = useAppSelector(selectSearch());
  const getFromCache = (key: string) => {
    return queryClient.getQueryData([key]);
  };

  const { data, isLoading } = useQuery({
    queryKey: [`search-${search}`],
    queryFn: async () => {
      const cache = getFromCache(`search-${search}`);
      if (cache) return cache;

      const data = await httpGet(`s=${search}`);

      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />
  }
  if (data.Response === "False" && data.Error !== "Incorrect IMDb ID.") {
    return <NoticeBlock>{data.Error}</NoticeBlock>
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {data && data.Response === "True"  &&
          data.Search.map((movie: IMDBMovie) => <MovieCard movie={movie} key={movie.imdbID} />)
      }
    </ul>
  );
};

export default Home;
