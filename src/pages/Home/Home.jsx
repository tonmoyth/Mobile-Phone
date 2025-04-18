import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Phones from '../Phones/Phones';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [phones,setPhones] = useState(data);

    const formHandle = (e,text) => {
        e.preventDefault()
        if(text === ''){
            setPhones(data);
            return
        }
        const searchPhone = data.filter(phone => 
        phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) || phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    ) 
    setPhones(searchPhone);
        
        
    }
    
    return (
        <div>
            <Hero formHandle={formHandle}></Hero>
            <Phones data={phones}></Phones>
        </div>
    );
};

export default Home;