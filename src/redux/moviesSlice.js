import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice ({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        movieTrailer: null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer : (state, action) => {
            state.movieTrailer = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        },
    }
})

export const {
        addNowPlayingMovies,
        addMovieTrailer,
        addUpcomingMovies,
        addTopRatedMovies,
        addPopularMovies
    } = moviesSlice.actions;

export default moviesSlice.reducer;

