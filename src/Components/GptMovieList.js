import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MoviesListShimmer from '../Shimmer/MoviesListShimmer'

const GptMovieList = () => {
    const { gptMoviesNames, gptMoviesList } = useSelector(state => state.gpt)
    
    return (
        <div className=' text-xl text-white z-30'>
            {gptMoviesNames && gptMoviesNames.map((movie, idx) =>
                gptMoviesList == null ? <MoviesListShimmer /> : <MoviesList key={movie} title={movie} movies={gptMoviesList[idx]} />
            )}
        </div>
    )
}

export default GptMovieList