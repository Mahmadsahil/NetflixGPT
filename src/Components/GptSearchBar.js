import { API_OPTIONS, Gemini_API_Key } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import languages from "../Utils/languages";
import { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getGptMovies } from "../Utils/gptSlice";

const GptSearchBar = () => {

    const gptLanguageInSearch = useSelector(store => store.AllLanguage.gptAddedLanguage);
    const [SearchedMovies, SetSearchedMovie] = useState()
    const [SearchedMovieList, SetSearchedMovieList] = useState()
    const InputSearchValue = useRef();
    const dispatch = useDispatch()


    const handleSearchClick = async () => {

        const genAI = new GoogleGenerativeAI(Gemini_API_Key);

        const getSuggestedMovies = async () => {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = "Act as movie recomendation system and suggest some movies for the query" + InputSearchValue.current.value + ". only give me names of 5 movies comma seperated like the example result give ahead. Example Result: Pathan,Sultan,Bajarangi Bhaijaan,Jawan,Hum aapke hain kon"

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const Movies = text.split(",");
            SetSearchedMovie(Movies);
        }
        getSuggestedMovies();

        const data = SearchedMovies.map(movie => getSearchMovie(movie));
        const movieResult = await Promise.all(data);
        SetSearchedMovieList(movieResult);
    }

    const getSearchMovie = async (movie) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);

            // Check if the response is successful
            if (!data.ok) {
                throw new Error('Failed to fetch movie data');
            }

            const json = await data.json();
            return json.results;

        } catch (error) {
            console.error('Error fetching movie data:', error.message);
            // You can handle the error here, e.g., show an error message to the user
            return []; // Return an empty array or any default value
        }
    }


    dispatch(getGptMovies({ SearchedMovies, SearchedMovieList}));

    return (
        <>

            <div className="w-full flex justify-center items-center mt-[30%] md:mt-[8%] ">

                <form className="w-full flex justify-center items-center" onSubmit={(e) => e.preventDefault()}>

                    <input ref={InputSearchValue} className="py-2 px-3 w-[70%] md:w-[40%] outline-none rounded-md" type="text"
                        placeholder={languages[gptLanguageInSearch].getSearchPlaceholder}></input>

                    <button className="py-2 px-4 bg-red-600 mx-4 rounded-md text-white" onClick={() => handleSearchClick()}>
                        {languages[gptLanguageInSearch].search}</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar;