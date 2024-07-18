// import VideoBackground from "./VideoBackground";
// import VideoTitle from "./VideoTitle";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux"
import MainPageLoader from "../Shimmer/MainPageLoader";
import { NowPlayingMovies } from "../RandomVideos/NowPlayingMovies";
const VideoBackground = lazy(() => import('./VideoBackground'))
const VideoTitle = lazy(() => import('./VideoTitle'))


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const { original_title, overview, id } = movies === null ? NowPlayingMovies[Math.floor(Math.random() * 19)] : movies[0];
    return (
        <div className="relative h-[55vh] w-full md:h-[40%]">
            <Suspense fallback={<MainPageLoader />}>
                <VideoTitle title={original_title} description={overview} />
                <VideoBackground movieId={id} />
            </Suspense>
        </div>
    );
};

export default MainContainer;
