import BestSelling from "../pages/BestSelling/BestSelling";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/allroduct/:subcategory',
                element: <BestSelling />,
                loader: ({ params }) => fetch(`http://localhost:5000/allproduct/${params.subcategory}`)
            }
        ]
    }
])