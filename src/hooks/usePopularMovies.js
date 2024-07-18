import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../Utils/moviesSlice";
import { Zoom, toast } from "react-toastify";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        try {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
        
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

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;