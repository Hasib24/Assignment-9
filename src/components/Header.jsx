import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between '>
            <div><h1>DreamJobs</h1></div>
            <nav>
                <NavLink className='m-2' to='/'>Home</NavLink>
                <NavLink className='m-2' to='/statistics'>Statistics</NavLink>
                <NavLink className='m-2' to='/appliedjobs'>Applied Jobs</NavLink>
                <NavLink className='m-2' to='/blog'>Blog</NavLink>
            </nav>
            <button>a button </button>
        </div>
    );
};

export default Header;