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
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])