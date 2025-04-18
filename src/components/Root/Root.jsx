import React from 'react';
import Navber from '../Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='md:w-11/12 mx-auto mt-4'>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-130px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;