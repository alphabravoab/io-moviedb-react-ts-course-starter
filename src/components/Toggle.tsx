import React, { FunctionComponent } from 'react';
import { clsx } from "clsx";
import { IMDBMovie } from "../model/movie";
import { useAppDispatch, useAppSelector } from "../util/reduxHooks";
import { addFavorite, isFavorite, removeFavorite } from '../store/favorites';

type RenderProps = {
    data: IMDBMovie
}
const Toggle: FunctionComponent<RenderProps> = ({ data }) => {
    const favorite = useAppSelector(isFavorite(data.imdbID));
    const dispatch = useAppDispatch();

    const onClick = () => {
        if (!favorite) {
           dispatch(addFavorite(data))
        } else {
            console.log("testing fav remove")
            dispatch(removeFavorite(data.imdbID))
        }
    }

    return (
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className={clsx(
        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
               { "bg-green-600": favorite, "bg-gray-200": !favorite }
            )}
            role="switch"
            aria-checked="false"
            onClick={onClick}
          >
            <span
              aria-hidden="true"
              className={clsx(
                "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                { 'translate-x-5' : favorite,  'translate-x-0': !favorite}
              )}
            ></span>
          </button>
          <b>Favorite: </b>
        </div>
    );
};

export default Toggle;
