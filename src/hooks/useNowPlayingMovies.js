import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { Zoom, toast } from "react-toastify";

const useNowPlayingMovies = () => {

    useEffect(() => {
        getNowPlayingMovie();
    }, []);

    const dispatch = useDispatch();
    const getNowPlayingMovie = async () => {
        try {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
        
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
    };

}

export default useNowPlayingMovies;