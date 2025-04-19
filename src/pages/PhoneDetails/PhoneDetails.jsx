import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../../Ui/Button/Button';
import { FaShoppingCart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { setLocalPhones } from '../../utility/favorite';
import { CardContext } from '../../Provider/Context';
import { getCard, setLocalCard } from '../../utility/card';


const PhoneDetails = () => {
    const {setCard} = useContext(CardContext);

    const data = useLoaderData();
    const {id} = useParams();
    const phone = data.find(p => p.id === parseInt(id));
    const {image,name} = phone;

    const handleFavorite = (phone) => {
        setLocalPhones(phone);
    }
    const handleCard = (phone) => {
        setLocalCard(phone)
        setCard(getCard())
    } 
   
    
    return (
        <div>
         <div className='w-1/2 mx-auto mt-8'>
         <img src={image} alt="Phone image"  className='w-full rounded-md'/>
         </div>

         <div className='mt-12 text-3xl flex justify-between'>
            <h1>{name}</h1>

            <div className='flex space-x-2'>
                <Button onClick={()=>handleCard(phone)} label={<FaShoppingCart />}>
                <FaShoppingCart />
                </Button>
                <Button onClick={() => handleFavorite(phone)} label={ <FaBookmark />}>
               
                </Button>
            </div>
         </div>
            
        </div>
    );
};

export default PhoneDetails;