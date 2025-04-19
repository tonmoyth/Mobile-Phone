import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { FaCartShopping  } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { CardContext } from '../../Provider/Context';

const Navber = () => {
    const {card} = useContext(CardContext);
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul  tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                         to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                        to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                        to='/addCard'><FaCartShopping size={20}/>
                        </NavLink>
                        
                    </li>
                   
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                        to='/addFavorite'><MdBookmarkAdd size={20}/></NavLink>
                    </li>
                    
                    </ul>
                </div>
                <Link className='text-2xl font-bold' to='/'>MobilePhone</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
           
            </div>
            <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                         to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                        to='/about'>About</NavLink>
                    </li>
                    <li className='relative'>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                        to='/addCard'><FaCartShopping size={20}/>
                        <span>{card.length}</span>
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink
                        className={({isActive})=> isActive && 'text-green-500' }
                        to='/addFavorite'><MdBookmarkAdd size={20}/></NavLink>
                    </li>
                    
                    </ul>
            </div>
            </div>
    );
};

export default Navber;