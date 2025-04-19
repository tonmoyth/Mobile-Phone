import React, { useState } from 'react';
import bannerImage from '../../assets/banner (1).png'
import Button from '../../Ui/Button/Button';

const Hero = ({formHandle}) => {
    const [text,setText] = useState('');
    
    return (
        <div>
            <div className='w-1/2 mx-auto pt-12'>
                 <img src={bannerImage} alt="Phone image"  className='w-full'/>
            </div>
        <div>
            <h1 className='text-2xl md:text-3xl text-center font-normal'>Brows,search,view,buy</h1>
            <p className='text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,<br /> reprehenderit rem nemo sunt sequi voluptas.</p>
            <div className='mt-4'>
                <form onSubmit={(e)=>{
                    formHandle(e,text)
                    setText('')
                }} className='text-center md:flex items-center justify-center gap-2'>
                    <input value={text} 
                    onChange={(e)=>setText(e.target.value)}
                    className='border md:w-2/5 p-2 rounded-md focus:outline-none' type="text" name="" placeholder='Search phone by Name' />
                    
                   
                   <Button label='Search' type='submit'></Button>
                    
                   
                </form>
            </div>
        </div>
        </div>
    );
};

export default Hero;