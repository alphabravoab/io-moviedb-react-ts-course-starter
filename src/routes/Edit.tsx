import { FunctionComponent } from 'react';
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../util/reduxHooks";
import { editFavorite, selectMovie } from "../store/favorites";
import { IMDBMovie } from "../model/movie";

type MovieForm = {
  Title: string;
  Year: string;
  Actors: string;
}

const Edit: FunctionComponent = () => {
  const { moviesId } = useParams();
  const dispatch = useAppDispatch();
  const { Poster, Title, Year, Actors } =  useAppSelector(selectMovie(moviesId as string)) as IMDBMovie;
  const {
    register,
    handleSubmit,
  } = useForm<MovieForm>()
  const onSubmit: SubmitHandler<MovieForm> = (data) => dispatch(editFavorite({...data, imdbID: moviesId}));

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                  className="w-full h-full object-center object-cover sm:rounded-lg"
                  src={Poster}
                  alt={Title}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    {...register("Title")}
                    defaultValue={Title}
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    {...register("Year")}
                    defaultValue={Year}
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    {...register("Actors")}
                    defaultValue={Actors}
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
