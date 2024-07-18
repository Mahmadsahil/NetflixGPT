import { lazy, Suspense } from 'react'
import { useDispatch } from "react-redux";
import { addMovieDetail, removeMovieDetail } from "../Utils/moviesSlice";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import VideoShimmer from "../Shimmer/VideoShimmer";
const MovieCard = lazy(() => import('./MovieCard'))

const MoviesList = ({ title, movies }) => {
    const dispatch = useDispatch();
    const SliderRef = useRef(null)
    console.log("title, movies",title, movies)

    const handleClickOnMovie = (movieDet) => {
        dispatch(removeMovieDetail())
        dispatch(addMovieDetail(movieDet));
    };

    const slideLeft = () => {
        if (SliderRef.current) {
            SliderRef.current.scrollLeft -= 500;
        }
    }
    const slideRight = () => {
        if (SliderRef.current) {
            SliderRef.current.scrollLeft += 500;
        }
    }

    return (
        <>
            <div className="mx-12 my-8 ">
                <h1 className="text-xl md:text-3xl py-2">{title}</h1>
                <div className="flex flex-col ">

                    <div className="flex justify-between my-1">
                        <button className="m-2 p-1 md:p-2 text-xl bg-gray-500 bg-opacity-60 hover:bg-gray-600 rounded-full" onClick={slideLeft}><IoMdArrowDropleft />
                        </button>
                        <button className="m-2 p-1 md:p-2 text-xl bg-gray-500 bg-opacity-60 hover:bg-gray-600 rounded-full" onClick={slideRight}><IoMdArrowDropright /></button>
                    </div>

                    <div ref={SliderRef} className=" flex gap-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth ">
                        {movies &&
                            movies.map((movie, idx) => (
                                < Suspense fallback={< VideoShimmer />}>
                                    <Link to={"/detail"}> <MovieCard key={movie?.id} poster_path={movie?.poster_path} onClick={() => handleClickOnMovie(movie)} /></Link>
                                </Suspense>

                            ))}

                    </div>
                </div>
            </div >
            <div>
            </div>
        </>
    );
};

export default MoviesList;
