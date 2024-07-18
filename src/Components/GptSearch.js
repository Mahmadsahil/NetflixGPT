import { BackgroundImage } from "../Utils/Constants";
import GptMovieList from "./GptMovieList";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full fixed -z-10 ">
                <img className="h-screen md:w-full object-cover" src={BackgroundImage} alt="background"></img>
            </div>
            <div className="w-full ">
                <GptSearchBar />
                <GptMovieList />
            </div>
        </div>
    )
}

export default GptSearch;