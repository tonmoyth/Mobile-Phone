import React from 'react';
import Button from '../../Ui/Button/Button';
import { Link } from 'react-router';

const Emty = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[calc(100vh-130px)]'>
            <div className='space-y-2'>
            <h1 className='text-5xl'>Favorite Emty</h1>
            <p className='text-2xl'>Please add phone Favorite</p>
            <Link to='/' className='text-center'>
            <Button label='Home'></Button>
            </Link>
            </div>
        </div>
    );
};

export default Emty;