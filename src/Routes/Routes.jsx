import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import AddCard from '../pages/AddCard/AddCard';
import AddFavorite from '../pages/AddFavorite/AddFavorite';
import Error from '../pages/Error/Error';
import PhoneDetails from '../pages/PhoneDetails/PhoneDetails';

const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                hydrateFallbackElement: <h1>Loading..</h1>,
                loader: () => fetch('phones.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/addCard',
                Component: AddCard
            },
            {
                path: '/addFavorite',
                Component: AddFavorite
            },
            {
                path: '/phoneDetails/:id',
                loader: () => fetch('phones.json'),
                Component:PhoneDetails
            }
        ]
    }
])

export default router;