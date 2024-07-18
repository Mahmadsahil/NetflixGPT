
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { Zoom, toast } from "react-toastify";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            dispatch(addTrailerVideo(trailer))

        } catch (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 2999,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
}

export default useMovieTrailer; 