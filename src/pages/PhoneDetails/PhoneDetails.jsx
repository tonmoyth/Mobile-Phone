import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const phone = data.find(p => p.id === parseInt(id));
    
    const {image} = phone;
   
    return (
        <div>
         <img src={image} alt="Phone image"  className='w-full'/>
            
        </div>
    );
};

export default PhoneDetails;