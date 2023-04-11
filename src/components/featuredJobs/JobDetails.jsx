import React from 'react';
import { Link, json, useLoaderData } from 'react-router-dom';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5"

// for tost msg 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    let allJobsArray = useLoaderData();
    let jobId = localStorage.getItem('jobId');
    
    let clickdeJob = allJobsArray.find(job => job.id == jobId)
    // console.log(clickdeJob);
    

    let {
        id,
        job_title, 
        job_description,
        job_responsibilities,
        education,
        company_name, 
        company_logo, 
        location, 
        location_type, 
        employment_type, 
        phone,
        email,
        salary,
        experience
    } = clickdeJob;

    let appliedJobsIds = []

    const applyNowClickHandler = (id) =>{
        

         if(localStorage.getItem('appliedJobsIds')){
            appliedJobsIds = JSON.parse(localStorage.getItem('appliedJobsIds'))
            let isExist = appliedJobsIds.find(jobId => jobId === id)
            
            isExist ? toast.error("STOP! Already applied") : appliedJobsIds = [...appliedJobsIds, id];
            localStorage.setItem('appliedJobsIds', JSON.stringify(appliedJobsIds));
            if(!isExist){
                toast.success("WOW! Application done")
            }
            return

         }
         toast.success("WOW! Application done")
         appliedJobsIds = [...appliedJobsIds, id]
         localStorage.setItem('appliedJobsIds', JSON.stringify(appliedJobsIds))


    }


    return (
        <>
        <div className='container mx-auto my-10 px-3 md:px-0 md:grid md:grid-cols-3'>
            <div className='md:col-span-2 md:pr-5'>
                <div className='my-4'><span className='font-bold text-lg'>Job Description: </span>{job_description}</div>
                <div className='my-4'><span className='font-bold text-lg'>Job Responsibility: </span>{job_responsibilities}</div>
                <div className='my-4'>
                    <span className='font-bold text-lg'>Educational Requirements:</span> <br />
                    <span>{education}</span>
                </div>
                
                <div className='my-4'>
                    <span className='font-bold text-lg'>Experience:</span> <br />
                    <span>{experience}</span>
                </div>
                
            </div>

            <div className=''>
                <div className='bg-blue-100  py-5 my-5 md:my-0  px-2 rounded-lg'>
                    <h1 className='font-bold border-b-2 border-slate-300'>Job Details</h1>

                    <div className='mb-5'>
                        <p><span className='inline-block'><AiOutlineDollarCircle></AiOutlineDollarCircle></span> <span className='font-bold'>Salary:</span> {salary}</p>
                        <p><span className='inline-block'><CiCalendarDate></CiCalendarDate></span> <span className='font-bold'>Job title:</span>  {job_title}</p>
                    </div>
                    <h1 className='font-bold border-b-2 border-slate-300'>Contact information</h1>

                    <div>
                        <p><span className='inline-block'><BsTelephone></BsTelephone></span> <span className='font-bold'>Phone:</span> {phone}</p>
                        <p><span className='inline-block'><HiOutlineMail></HiOutlineMail></span> <span className='font-bold'>Email:</span>  {email}</p>
                        <p><span className='inline-block'><IoLocationOutline></IoLocationOutline></span> <span className='font-bold'>Address:</span> {location}</p>
                    </div>
                </div>
                <div>
                <Link onClick={()=>applyNowClickHandler(id)}>
                    <button  className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-3 py-2 rounded-md font-bold tracking-wider w-full mt-5'>
                        Apply Now
                    </button>
                    
                </Link>
                
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
};

export default JobDetails;