import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import favoritesReducer from "./favorites";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        favorites: favoritesReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
