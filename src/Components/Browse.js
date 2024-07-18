import { Suspense, lazy } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import MainPageLoader from "../Shimmer/MainPageLoader";
import { useSelector } from "react-redux";
import MoviesListShimmer from "../Shimmer/MoviesListShimmer";
import HeaderShimmer from "../Shimmer/HeaderShimmer";
const SecondaryContainer = lazy(() => import("./SecondaryContainer"))
const MainContainer = lazy(() => import('./MainContainer'))
const Header = lazy(() => import('./Header'))

const Browse = () => {
    const gptSearchResult = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return (
        <div className="w-screen">
            <Suspense fallback={<HeaderShimmer />}>
                <Header />
            </Suspense>


            {gptSearchResult ? (<GptSearch />) : (<>
                <Suspense fallback={<MainPageLoader />}>
                    <MainContainer />
                </Suspense>
                <Suspense fallback={<MoviesListShimmer />}>
                    <SecondaryContainer />
                </Suspense>
            </>)}

        </div>
    )
}

export default Browse;