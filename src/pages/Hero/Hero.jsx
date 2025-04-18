import React, { useState } from 'react';
import bannerImage from '../../assets/banner (1).png'

const Hero = ({formHandle}) => {
    const [text,setText] = useState('');
    
    return (
        <div>
            <div className='w-1/2 mx-auto pt-12'>
                 <img src={bannerImage} alt="Phone image"  className='w-full'/>
            </div>
        <div>
            <h1 className='text-3xl text-center font-normal'>Brows,search,view,buy</h1>
            <p className='text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,<br /> reprehenderit rem nemo sunt sequi voluptas.</p>
            <div className='mt-4'>
                <form onSubmit={(e)=>{
                    formHandle(e,text)
                    setText('')
                }} className='text-center md:flex items-center justify-center gap-2'>
                    <input Value={text} 
                    onChange={(e)=>setText(e.target.value)}
                    className='border md:w-2/5 p-2 rounded-md focus:outline-none' type="text" name="" placeholder='Search phone by Name' />
                    
                   
                    <button type='submit' className="relative inline-block text-md group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Search</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                    
                   
                </form>
            </div>
        </div>
        </div>
    );
};

export default Hero;