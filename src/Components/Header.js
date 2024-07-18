import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { NetflixLogo } from "../Utils/Constants";
import { toggleGptSearch } from "../Utils/gptSlice";
import { ConfigLang } from "../Utils/Constants";
import { addLanguage } from "../Utils/languageSlice";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
    }, [dispatch, navigate]);


    const handleGptSearchClick = () => {
        dispatch(toggleGptSearch());
    }

    const gptSearchResult = useSelector(store => store.gpt.showGptSearch);

    const handleLangaugeChange = (e) => {
        dispatch(addLanguage(e.target.value))
    }

    return (
            <div data-testid='testingHeader' className="h-16 w-screen fixed flex flex-col md:flex-row justify-between items-center p-1 bg-gradient-to-b from-black z-50">

                <div>
                    <LazyLoadImage className="mx-4 h-14 md:h-16" effect='blur' loading='lazy' src={NetflixLogo} alt="logo" />
                </div>

                <div className='flex gap-3 mr-2'>
                    {user && <div className="p-4 flex justify-between items-center gap-2 md:gap-4">
                        <select className="p-2 md:py-2 md:px-4 text-xs md:text-sm rounded-md" onChange={handleLangaugeChange}>
                            {ConfigLang.map(lang => <option key={lang.name} value={lang.identifier}>{lang.name}</option>)}

                        </select>

        
                        <button className="p-2 md:py-2 md:px-4  bg-purple-800 text-white text-xs md:text-sm cursor-pointer rounded-lg"
                            onClick={handleGptSearchClick}>{gptSearchResult ? "Home Page" : "GPT Search"}</button>

                        <button onClick={handleSignOut} className="p-2 md:py-2 md:px-4  bg-red-600 text-white text-xs md:text-sm cursor-pointer rounded-lg">Sign out</button>

                    </div>}
                </div>
            </div>

    )
}

export default Header;