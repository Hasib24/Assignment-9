import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BtnBig from './buttons/BtnBig';

import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";




const Header = () => {

    let [open, setOpen] = useState(false)

    const siteLogoStyle = {
        backgroundImage: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:'transparent'

    }

    const navLinkStyle = ({isActive}) =>{
        return{
            
            backgroundImage: isActive ? 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' : 'none',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: isActive ? 'transparent' : 'gray',
        }

    }

    return (
        <div className='container mx-auto flex justify-between bg-white border-b sticky top-0 py-8 px-2 items-center'>
            <div>
                <h1 className='text-4xl font-bold' style={siteLogoStyle}>Dream<span>Jobs</span></h1>
            </div>
            <div className='text-2xl md:hidden' onClick={()=>{setOpen(!open)}}>
                {open ? <RxCross2 className='h-8 w-8 border m-2 rounded '></RxCross2> : <HiMenu  className='h-8 w-8 border m-2 rounded '></HiMenu>}
            </div>
            <nav className={`flex flex-col md:flex-row absolute md:static duration-1000 right-2  ${open ? 'top-24' : '-top-64'}`} onClick={()=>{setOpen(false)}}>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/'>Home</NavLink>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/statistics'>Statistics</NavLink>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/appliedjobs'>Applied Jobs</NavLink>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/blog'>Blog</NavLink>
            </nav>
            <div className='hidden md:block'>
                <BtnBig btnText={'Start Appling'}></BtnBig>

            </div>
        </div>
    );
};

export default Header;