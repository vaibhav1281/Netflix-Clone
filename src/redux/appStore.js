import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'
import configReducer from './configSlice'
import searchReducer from './searchSlice'
import movieDetailsReducer from "./movieDetailSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
        search: searchReducer,
        details: movieDetailsReducer 
    }
})

export default appStore;