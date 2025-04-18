import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import AddCard from '../pages/AddCard/AddCard';
import AddFavorite from '../pages/AddFavorite/AddFavorite';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
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
            }
        ]
    }
])

export default router;