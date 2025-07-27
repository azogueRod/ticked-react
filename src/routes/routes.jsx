import Home from "../views/Home";
import Details from "../views/Details";
import Error404 from "../views/Error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profiles from "../views/Profile/Profiles";
import MyInfo from "../views/Profile/components/MyInfo";
import LikeEventes from "../views/Profile/components/LikeEventes";

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
                element: <MyInfo/>
            },
            {
                path: 'liked-events',
                Component: LikeEventes
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
