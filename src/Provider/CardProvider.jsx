import React, { useEffect, useState } from 'react';
import { CardContext } from './Context';
import { getCard } from '../utility/card';

const CardProvider = ({children}) => {
    const [card,setCard] = useState([]);

    useEffect(()=>{
        setCard(getCard())
    },[])

    return (
        <div>
            <CardContext.Provider value={{card,setCard}}>
                {children}
            </CardContext.Provider>
        </div>
    );
};

export default CardProvider;