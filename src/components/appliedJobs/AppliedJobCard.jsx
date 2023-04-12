import React from 'react';
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineDollarCircle } from "react-icons/ai"
import BtnNormal from '../buttons/BtnNormal';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({job}) => {
    
    let {id, job_title, company_name, company_logo, location, location_type, employment_type, salary} = job;

    const viewDetailsbtnHandler = (id) =>{
        localStorage.setItem('jobId', id)
    }

    return (
        <div className='border md:grid md:grid-cols-4 py-5 my-5'>
            <div className='flex items-center p-3'><img src={company_logo} alt="Company logo" /></div>
            <div className='col-span-2'>
                <h1 className='font-bold text-2xl text-slate-800'>{job_title}</h1>
                <h1>{company_name}</h1>
                <p>
                    <span className='inline-block border rounded-md p-2 mr-2 '>{location_type}</span>
                    <span className='inline-block border rounded-md p-2 mr-2 '>{employment_type}</span>
                </p>
                <p>
                    <span  className='mr-5'><IoLocationOutline className='inline-block text-xl'></IoLocationOutline>{location}</span>
                    <span  className='mr-5'><AiOutlineDollarCircle className='inline-block text-xl'></AiOutlineDollarCircle>{salary}</span>
                </p> 
            </div>
            <div className='flex items-center justify-end pr-3'>
                <Link to={`/jobdetaiis/${id}`}>
                
                    <BtnNormal btnText={"View detailes"}></BtnNormal>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJobCard;