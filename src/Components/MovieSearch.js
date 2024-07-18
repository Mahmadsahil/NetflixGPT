import React, { useRef } from 'react'
import { API_OPTIONS, BackgroundImage } from '../Utils/Constants';
import MovieCard from './MovieCard';
import { ref } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetail, addMovieSearchText, addSearchedMovie } from '../Utils/moviesSlice';
import { Link } from 'react-router-dom';
import Header from './Header';
import VideoShimmer from '../Shimmer/VideoShimmer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const MovieSearch = () => {
    const dispatch = useDispatch();
    const movieName = useRef(ref);
    dispatch(addMovieSearchText(movieName.current.value));

    const searchingMovieName = useSelector(state => state.movies.MovieSearchText)

    const getSearchMovie = async (searchingMovieTitle) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query= ${searchingMovieTitle}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const jsonData = await data.json();
        console.log(jsonData)
        dispatch(addSearchedMovie(jsonData.results));
    }

    const handleSearch = () => {
        getSearchMovie(searchingMovieName);
    }

    const SearchedMovie = useSelector(state => state.movies.SearchedMovie)


    const handleClickOnMovie = (movieDet) => {
        dispatch(addMovieDetail(movieDet));
    };

    return (
        <>
            <Header />
            <div>

                <div className="w-full fixed">
                    <LazyLoadImage className="md:w-full md:h-[100vh] object-cover" effect='blur' loading='lazy' src={BackgroundImage} alt="background" />
                </div>

                <div className='w-full h-[100vh] flex flex-col items-center absolute bg-slate-900 bg-opacity-40'>

                    <div className='w-full text-center mt-16'>
                        <input ref={movieName} className='text-sm  py-1 px-2 md:py-2 md:px-4 w-[40%] outline-none mx-2 rounded-lg' type='text' placeholder='Search Movies' />
                        <button className='py-1 px-2 md:py-2 md:px-4  text-sm  bg-red-700 rounded-lg text-white' onClick={handleSearch}>Search</button>
                    </div>

                    <div className='flex flex-wrap justify-center gap-4 my-8 p-4'>
                        {SearchedMovie && SearchedMovie.map(movie => movie ?
                            <Link to={"/detail"}><MovieCard key={movie.id} poster_path={movie?.poster_path} onClick={() => handleClickOnMovie(movie)} /></Link>
                            : <VideoShimmer />)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieSearch;