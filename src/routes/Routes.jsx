import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import HomeLayout from '../layouts/HomeLayout';
import LatestNews from '../components/LatestNews';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';





    const router = createBrowserRouter([
        {
            path: "/",
          element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path:"",
                    element: <Home></Home>
                },
                {
                    path:"/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                },
             
            ]

        },
        {
            path:"/auth",
            element: <LatestNews></LatestNews>
        },
        {
            path:"/news",
            element: <h2>News Layout</h2>
        },
        {
            path:"/*",
            element: <h2>Error404</h2>
        }
    ]);

    export default router;


