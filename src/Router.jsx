// Imports 

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Component s
import { App } from './App'
import { ErrorPage } from "./ErrorPage"
import { PageBrowse } from "./PageBrowse";

export const Router = () => { 
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/browse",
            element: <PageBrowse/>,
            errorElement: <ErrorPage/>
        }
        // {
        //     path: "/producs",
        //     element: <Product/>,
        //     errorElement: <ErrorPage/>
        // },
        // {
        //     path: "/cart",
        //     element: <PageCart/>,
        //     errorElement: <ErrorPage/>
        // }
    ]);
    return <RouterProvider router={router}/>
}