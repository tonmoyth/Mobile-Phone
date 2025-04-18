import React from 'react';
import Hero from '../Hero/Hero';
import Phones from '../Phones/Phones';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    
    return (
        <div>
            <Hero></Hero>
            <Phones data={data}></Phones>
        </div>
    );
};

export default Home;