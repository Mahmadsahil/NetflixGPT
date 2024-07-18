import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../Utils/Constants'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MovieDetail = () => {

    const movieDetail = useSelector(state => state.movies.movieDetail);
    const { original_title, overview, poster_path, title, } = movieDetail;

    console.log(movieDetail)

    return (
        <div className=''>
            <div className="w-full h-[100vh] absolute">
                <LazyLoadImage className="w-screen h-[100vh] object-cover bg-purple-500" effect='blur' loading='lazy' src={IMG_CDN_URL + poster_path} alt="background"/>
            </div>
            <div className='w-full h-screen flex justify-center items-center '>
                <div className='w-11/12 md:w-7/12 text-white rounded-2xl m-4 absolute p-4 md:py-8 flex flex-col md:flex-row justify-center gap-4 md:gap-8 z-30 bg-slate-800 bg-opacity-70'>

                    <div className=' flex justify-center items-center'>
                        <LazyLoadImage className='rounded-xl h-48 md:h-80 md:my-0' effect='blur' loading='lazy' alt='Movie' src={IMG_CDN_URL + poster_path} />
                    </div>

                    <div className='w-full md:w-3/6 flex flex-col gap-2 md:gap-4'>
                        <p className='text-xl md:text-3xl text-yellow-500'>{original_title}</p>
                        <p className='text-sm md:text-base'>{overview}</p>
                        <p className='text-xs md:text-sm'>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;