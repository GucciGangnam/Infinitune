// Imports 

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Component s
import { App } from './App'
import { ErrorPage } from "./ErrorPage"

export const Router = () => { 
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            errorElement: <ErrorPage/>
        }
    ]);
    return <RouterProvider router={router}/>
}