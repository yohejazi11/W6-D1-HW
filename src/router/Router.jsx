import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Coral from "../component/Coral";
import Dessert from "../component/Dessert";
import Mountains from "../component/Mountains";
import Oasis from "../component/Oasis";
import Sea from "../component/Sea";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/coral",
        element: <Coral></Coral>,
    },
    {
        path: "/dessert",
        element: <Dessert></Dessert>,
    },
    {
        path: "/mountains",
        element: <Mountains></Mountains>,
    },
    {
        path: "/oasis",
        element: <Oasis></Oasis>,
    },
    {
        path: "/sea",
        element: <Sea></Sea>,
    },
]);
function Router() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router
