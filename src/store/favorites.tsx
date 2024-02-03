import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { IMDBMovie } from "../model/movie";

interface FavoritesState {
    value: Array<IMDBMovie>
}

const initialState: FavoritesState = {
    value: []
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.value.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter(movie => movie.imdbID !== action.payload)
        },
        editFavorite: (state, action) => {
            state.value = state.value.map(movie => {
                if (movie.imdbID === action.payload.imdbID) {
                    return {
                        ...movie,
                        Title: action.payload.Title,
                        Year: action.payload.Year,
                        Actors: action.payload.Actors,
                    }
                }
                return movie
            })
        }
    },
})

export const { addFavorite, removeFavorite, editFavorite } = favoritesSlice.actions

export const selectFavorites = () => (state: RootState) => state.favorites.value;
export const selectMovie = (id: string) => (state: RootState) => state.favorites.value.find(movie => movie.imdbID === id);
export const isFavorite = (id: string) => (state: RootState) => state.favorites.value.filter(movie => movie.imdbID === id).length === 1;

export default favoritesSlice.reducer;
