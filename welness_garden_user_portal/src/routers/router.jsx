import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/main";
import { Package } from "../pages/package";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element: <Package />,
            },
        ]
    }
])