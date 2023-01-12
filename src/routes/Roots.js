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
            }
        ]
    }
])