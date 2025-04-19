import React, { useEffect, useState } from 'react';
import { getPhones, removeFavorite } from '../../utility/favorite';
import PhoneCard from '../Phones/PhoneCard';
import Emty from '../Emty/Emty';

const AddFavorite = () => {
    const [showAll,setShowAll] = useState([]);

    useEffect(()=>{
        const savePhones = getPhones();
        setShowAll(savePhones);
    },[])
    
    const removeHandle = (id) => {
        removeFavorite(id);
        setShowAll(getPhones())
       
    }
    if(showAll.length < 1){
       return <Emty></Emty>
    }
    
   return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-8'>
                
            {
                
                showAll.map(phone => <PhoneCard
                     key={phone.id} 
                     phone={phone}
                     deleteble={true}
                     removeHandle={removeHandle}
                    ></PhoneCard>)
            }
        </div>
        </div>
    );
};

export default AddFavorite;