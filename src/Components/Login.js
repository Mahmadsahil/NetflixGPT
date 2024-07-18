import { useRef, useState } from "react";
import Header from "./Header";
import { FormValidation } from "../Utils/FormValidation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BackgroundImage, UserLogo } from "../Utils/Constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Login = () => {

    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState(null);
    const [toggleSignIn, setToggleSignIn] = useState(true);
    const UserName = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = () => {


        const message = FormValidation(email.current.value, password.current.value);
        setErrorMsg(message);
        if (message) return;

        if (!toggleSignIn) {

            // Sign Up Logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, UserName.current.value, UserLogo)
                .then((userCredential) => {
                    // Signed up
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    console.log(uid, email, displayName, photoURL);
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, UserLogo: UserLogo }));
                }).catch((error) => {
                    setErrorMsg(error.message)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode, "-", errorMessage)
                });



        } else {

            // Sign In Logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(addUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        UserLogo: UserLogo
                    }));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode, "-", errorMessage)
                });
        }
    }

    const handleToggleSignIn = () => {
        setErrorMsg("");
        setToggleSignIn(!toggleSignIn);

    }

    return (
        <>
            <Header />
            <div className="w-screen absolute">
                <LazyLoadImage className="h-screen w-screen object-cover" effect="blur" loading="lazy" src={BackgroundImage} alt="background"/>
            </div>

            <div data-testid="LoginTestid" className="w-full h-screen flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className="w-10/12 md:w-3/12 my-32 bg-black absolute md:p-10 p-5 flex flex-col bg-opacity-70 rounded-md">

                    <p className="text-xl md:text-2xl text-white my-2">{!toggleSignIn ? "Sign Up" : "Sign In"}</p>
                    {!toggleSignIn ? <input ref={UserName} className="bg-gray-700 text-white bg-opacity-80 my-4 p-2 w-full outline-none" type="text" placeholder="Enter Full Name"></input> : ""}

                    <input ref={email} className="bg-gray-700 bg-opacity-80 text-white text-sm md:text-md my-4 p-2 w-full outline-none" type="text" placeholder="Enter Email"></input>

                    <input ref={password} className="bg-gray-700 bg-opacity-80 text-white text-sm md:text-md my-4 p-2 w-full outline-none" type="password" placeholder="Password"></input>

                    <p className="text-sm text-red-600 font-bold">{errorMsg}</p>

                    <button className="my-4 p-2 bg-red-600 text-white rounded-md w-full text-sm md:text-base" onClick={handleSubmit}>{!toggleSignIn ? "Sign Up" : "Sign in"}</button>

                    <p className="text-white text-xs md:text-sm cursor-pointer" onClick={handleToggleSignIn}>  {toggleSignIn ? "New to Netflix? Sign Up Now" : "Already Registered? Sign in"}</p>
                </form>
            </div> 
        </>
    )
}

export default Login;