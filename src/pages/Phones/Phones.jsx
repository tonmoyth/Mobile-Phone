import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

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
        <div className='mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-8'>
            {
                showAll.map(phone => <PhoneCard
                     key={phone.id} 
                     phone={phone}
                    ></PhoneCard>)
            }
        </div>
        <button onClick={()=>{
            setIsShow(prev=>!prev)
            if(isShow){
                window.scroll({
                    top: 470,
                    left:0,
                    behavior:'smooth'
                })
            }
        }} className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">{isShow ? 'Show Less' : 'Show All'}</span>
            </button>
        </div>
    );
};

export default Phones;