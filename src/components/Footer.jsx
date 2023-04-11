import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const siteLogoStyle = {
        backgroundImage: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:'transparent'

    }

    return (
        <div className='bg-slate-800'>
            <div className='container mx-auto md:grid grid-cols-6  text-white py-10 px-2'>  
            <div className='m-2 text-center md:text-left col-span-2'>
                <h1 style={siteLogoStyle} className='text-4xl font-bold'>DreamJobs</h1>
                <p className='my-3'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex sm:justify-center md:justify-start'>
                    <FaFacebookF className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></FaFacebookF>
                    <TiSocialTwitter className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></TiSocialTwitter>
                    <FaInstagram className='inline-block text-4xl border p-1 m-1 rounded-full cursor-pointer '></FaInstagram>
                </div>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <p>
                    <a className='font-extralight' href="#">About Us</a> <br />
                    <a className='font-extralight' href="#">Work</a> <br />
                    <a className='font-extralight' href="#">Latext News</a> <br />
                    <a className='font-extralight' href="#">Career</a>
                </p>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Product</h1>
                <p>
                    <a className='font-extralight' href="#">Prototype</a> <br />
                    <a className='font-extralight' href="#">Plans & Pricing</a> <br />
                    <a className='font-extralight' href="#">Customers</a> <br />
                    <a className='font-extralight' href="#">Integrations</a>
                </p>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Support</h1>
                <p>
                    <a className='font-extralight' href="#">Help Desk</a> <br />
                    <a className='font-extralight' href="#">Sales</a> <br />
                    <a className='font-extralight' href="#">Become a Partner</a> <br />
                    <a className='font-extralight' href="#">Developer </a>
                </p>
            </div>
            <div className='m-2 text-center md:text-left'>
                <h1 className='text-xl font-semibold'>Contact</h1>
                
                <address className='not-italic'>
                    <h1 className='font-extralight' >524 Broadway , NYC</h1>
                    <h1 className='font-extralight' >+1 777 - 978 - 5570</h1>
                </address>

            </div>
        </div>
        <div className='text-white text-center md:flex md:justify-between container mx-auto py-6 border-t border-slate-700'>
            <div> &copy; 2023 <span className='cursor-pointer font-semibold'>DreamJobs</span> || All Right Researved </div>
            <div>Powered by <span className='font-bold cursor-pointer'>Programming Hero</span></div>
        </div>
        </div>
        
    );
};

export default Footer;