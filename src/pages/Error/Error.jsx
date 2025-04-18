import React from 'react';
import Navber from '../../components/Header/Navber';
import Footer from '../../components/Footer/Footer';

const Error = () => {
    return (
        <div>
            
            <div className='w-10/12 mx-auto'>
            <Navber></Navber>
            <h1>This is error</h1>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Error;