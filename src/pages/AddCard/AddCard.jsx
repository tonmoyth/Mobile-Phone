import React, { useContext } from 'react';
import { CardContext } from '../../Provider/Context';
import PhoneCard from '../Phones/PhoneCard';
import { getCard, removeCard } from '../../utility/card';
import Emty from '../Emty/Emty';

const AddCard = () => {
    const {card,setCard} = useContext(CardContext);
    
    
    const removeHandle = (phone) => {
        removeCard(phone)
        setCard(getCard())
    }
    if(card.length < 1){
        return <Emty></Emty>
     }
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-8'>
            {
                card.map(phone => <PhoneCard 
                    phone={phone}
                    key={phone.id}
                    deleteble={true}
                    removeHandle={() => removeHandle(phone)}
                ></PhoneCard>)
            }
        </div>
        </div>
    );
};

export default AddCard;