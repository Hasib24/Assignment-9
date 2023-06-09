import React from 'react';
import BannerPic from '../assets/img/bannerPic.png'
import BtnBig from './buttons/BtnBig';

const Banner = () => {

    
    const siteLogoStyle = {
        backgroundImage: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:'transparent'

    }

    return (
        <div className='container mx-auto px-4 md:flex md:flex-row-reverse justify-between'>
            <div>
                <img src={BannerPic} alt="Banner photo" />
            </div>
            <div className=' md:w-1/2 flex flex-col justify-center'>
                <h1 className='text-5xl font-bold tracking-wider text-slate-800'>Every Small Step <br /> Count Toward Your <br /> <span style={siteLogoStyle}>Deram Job!</span></h1>
                <p className='text-slate-600 my-5'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <p className='w-36'>

                    <BtnBig btnText={'Get Started'}></BtnBig>
                </p>
            </div>
        </div>
    );
};

export default Banner;