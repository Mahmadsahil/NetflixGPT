
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
    useMovieTrailer(movieId || 1022789);

    return (
        <div className="flex justify-center h-full w-full overflow-x-hidden" >
            <iframe className="h-full w-full aspect-auto md:aspect-video object-cover bg-gradient-to-t from-black" src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe >
        </div>

    )
}

export default VideoBackground;