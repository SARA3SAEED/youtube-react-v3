import React from 'react';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Details from '../pages/Details';
import Signup from '../pages/Signup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";




export default function Router() {
    const router = createBrowserRouter([
        { path: "/signup", element: <Signup /> },
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/details/:id", element: <Details /> },
        { path: "/favorite", element: <Favorite /> },

    ]);
    return ( <RouterProvider router={router}/> )
}