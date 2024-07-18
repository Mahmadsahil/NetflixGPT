import { createSlice } from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch: false,
        gptMoviesNames: null,
        gptMoviesList: null,
    }, 
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        getGptMovies: (state, action) => {
            const { SearchedMovies, SearchedMovieList } = action.payload;
            state.gptMoviesNames = SearchedMovies;
            state.gptMoviesList = SearchedMovieList;
        },
        removeGptMovies: (state, action) => {
            state.gptMoviesNames = null;
            state.gptMoviesList = null;
        },

    },
});

export const { toggleGptSearch, getGptMovies,removeGptMovies } = gptSlice.actions;
export default gptSlice.reducer;