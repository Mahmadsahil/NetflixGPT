import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_CDN_URL } from "../Utils/Constants";
import 'react-lazy-load-image-component/src/effects/blur.css';

const MovieCard = ({ poster_path, onClick }) => {
    return (
        <div className="w-20 md:w-36 cursor-pointer" onClick={onClick}>
            <LazyLoadImage  alt="Movies poster" effect="blur" loading="lazy" src={IMG_CDN_URL + poster_path} />
        </div>
    );
};

export default MovieCard;
