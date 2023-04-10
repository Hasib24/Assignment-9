import React from 'react';
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlineCurrencyDollar } from "react-icons/hi"

const JobCard = ({job}) => {
    let {job_title, company_name, location, location_type, employment_type, salary} = job;
    return (
        <div className='border my-3 mx-2 p-3'>
            <div>
                <h1 className='text-2xl font-bold text-slate-700'>{job_title}</h1>
                <h1 className='text-xl font-semibold text-slate-500'>{company_name}</h1>

            </div>
            <div className='my-2'>
                <span className='border p-2 mr-2 rounded-md border-blue-500 font-bold text-blue-500' >{location_type}</span>
                <span className='border p-2 mr-2 rounded-md border-blue-500 font-bold text-blue-500' >{employment_type}</span>

            </div>
            
            <div className='my-3'>
                <span  ><IoLocationOutline className='inline-block text-xl'></IoLocationOutline>{location}</span>
                <span > <HiOutlineCurrencyDollar className='inline-block text-xl'></HiOutlineCurrencyDollar>{salary}</span>
            </div>
        </div>
    );
};

export default JobCard;