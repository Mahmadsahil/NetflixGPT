import React from 'react'
import { NetflixLogo } from '../Utils/Constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Error = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-black '>
            <LazyLoadImage className="h-14 md:h-20 z-30" effect='blur' loading='lazy' src={NetflixLogo} alt="logo" />
            <div className='h-6 w-6 md:h-12 md:w-12 border-t-2 rounded-full border-red-600 animate-spin'></div>
        </div>
    )
}

export default Error 