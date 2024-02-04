import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        showSearch: null,
    },
    reducers: {
        showSearchedMovies : (state, action) =>{
            state.showSearch = action.payload;
        }
    }
})

export const { showSearchedMovies } = searchSlice.actions;

export default  searchSlice.reducer;