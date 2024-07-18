// import MoviesList from "./MoviesList";
// import { useSelector } from "react-redux"
import MoviesListShimmer from "../Shimmer/MoviesListShimmer";
import { NowPlayingMovies } from "../RandomVideos/NowPlayingMovies";
import { PopularMovies } from "../RandomVideos/PopularMovies";
import { UpComingMovies } from "../RandomVideos/UpComingMovies";
import { TopRatedMovies } from "../RandomVideos/TopRatedMovies";
import { Suspense, lazy } from "react";
const MoviesList = lazy(() => import('./MoviesList'))

const SecondaryContainer = () => {

    return (
        <div className="w-screen bg-black text-white md:py-2 relative z-30 -mt-10 md:mt-0">

            <Suspense fallback={<MoviesListShimmer />}>
                <MoviesList title={"Now Playing"} movies={NowPlayingMovies} />
            </Suspense>

            <Suspense fallback={<MoviesListShimmer />}>
                <MoviesList title={"Popular"} movies={PopularMovies} />

            </Suspense>

            <Suspense fallback={<MoviesListShimmer />}>
                <MoviesList title={"Top Rated"} movies={TopRatedMovies} />
            </Suspense>

            <Suspense fallback={<MoviesListShimmer />}>
                <MoviesList title={"Upcoming"} movies={UpComingMovies} />
            </Suspense>

        </div >
    );
}
export default SecondaryContainer;