import React from 'react';
import { NavLink } from 'react-router-dom';




const Header = () => {

    const navLinkStyle = ({isActive}) =>{
        return{
            
            backgroundImage: isActive ? 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' : 'none',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: isActive ? 'transparent' : 'gray',
        }

    }

    return (
        <div className='container mx-auto flex justify-between border py-8 items-center'>
            <div>
                <h1 className='text-4xl font-bold'>Dream<span>Jobs</span></h1>
            </div>
            <nav>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/'>Home</NavLink>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/statistics'>Statistics</NavLink>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/appliedjobs'>Applied Jobs</NavLink>
                <NavLink style={navLinkStyle} className='m-2 font-bold tracking-wider ' to='/blog'>Blog</NavLink>
            </nav>
            <button className='bg-blue-500 text-white p-3 rounded-md font-bold tracking-wider'>Start Appling</button>
        </div>
    );
};

export default Header;