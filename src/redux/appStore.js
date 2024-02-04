import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'
import configReducer from './configSlice'
import searchReducer from './searchSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
        search: searchReducer,
    }
})

export default appStore;