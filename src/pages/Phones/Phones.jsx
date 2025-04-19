import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';
import Button from '../../Ui/Button/Button';

const Phones = ({data}) => {
    const [showAll,setShowAll] = useState([]);
    const [isShow,setIsShow] = useState(false);

    useEffect(()=>{
        if(isShow){
            setShowAll(data);
        }else{
            setShowAll(data.slice(0,6));
        }
    },[data,isShow]);
    
    return (
        <div className='mb-8 mx-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-8'>
            {
                showAll.map(phone => <PhoneCard
                     key={phone.id} 
                     phone={phone}
                    ></PhoneCard>)
            }
        </div>
        
            <Button onClick={()=>{
                setIsShow(prev=>!prev)
                if(isShow){
                    window.scroll({
                        top: 470,
                        left:0,
                        behavior:'smooth'
                    })
                }
            }} label={isShow ? 'Show Less' : 'Show All'}></Button>
        </div>
    );
};

export default Phones;