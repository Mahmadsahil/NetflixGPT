import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MovieSearch from "./MovieSearch";
import Error from './Error'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/detail",
            element: <MovieDetail />,
        },
        {
            path: "/search",
            element: <MovieSearch />,
        },
        {
            path: "/error",
            element: <Error />,
        }
    ]);

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body;