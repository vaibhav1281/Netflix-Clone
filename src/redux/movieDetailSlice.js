import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
    name: "movieDetails",
    initialState:{
        movieDetail: [],
    },
    reducers: {
        setMovieDetail:(state, action) =>{
            state.movieDetail =  action.payload;
        }
    }
})

export const{setMovieDetail} = movieDetailSlice.actions;

export default movieDetailSlice.reducer;