import Home from "../views/Home";
import Details from "../views/Details";
import Error404 from "../views/Error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profiles from "../views/Profiles";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        ErrorBoundary: Error404
    },
    {
        path: '/details/:eventId',
        Component: Details
    },
    {
        path: '/profile',
        Component: Profiles,
        children: [
            {
                path: 'my-info',
                element: <div>My info</div>
            },
            {
                path: 'liked-events',
                element: <div>Liked events</div>
            }
        ]
    }
])


const MyRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MyRoutes
