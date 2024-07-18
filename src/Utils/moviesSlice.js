import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        movieDetail: "",
        SearchedMovie: "",
        MovieSearchText: "",
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addMovieDetail: (state, action) => {
            state.movieDetail = action.payload;
        },
        removeMovieDetail: (state, action) => {
            state.movieDetail = "";
        },
        addSearchedMovie: (state, action) => {
            state.SearchedMovie = action.payload;
        },
        addMovieSearchText: (state, action) => {
            state.MovieSearchText = action.payload;
        }

    },
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addMovieDetail, removeMovieDetail,addSearchedMovie,addMovieSearchText } = moviesSlice.actions;

export default moviesSlice.reducer;