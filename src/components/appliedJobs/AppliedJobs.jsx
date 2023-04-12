import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobCard from './AppliedJobCard';
import BtnNormal from '../buttons/BtnNormal';

const AppliedJobs = () => {

    let [filterJobBy, setFilterJobBy ] = useState('')

    let allJobsArray = useLoaderData();

    let applideJosArray = [];
    // let displayAble = [];

    if(localStorage.getItem('appliedJobsIds')){
        let storedJosIds = JSON.parse(localStorage.getItem('appliedJobsIds'));
        applideJosArray = allJobsArray.filter(aJob => storedJosIds.includes(aJob.id))   
    }

    if(filterJobBy){
        applideJosArray = applideJosArray.filter(aJob => aJob.location_type == filterJobBy || aJob.employment_type == filterJobBy )
        
    }

    return (
        <div className='container mx-auto my-10'>
            <div className='text-end'>
                Filter by
                
                <select defaultValue="none" onChange={(e)=>{
                    setFilterJobBy(e.target.value)
                }} className='border'>
                    <option value='' >none</option>
                    <option value='onsite'>onsite</option>
                    <option value='remote'>remote</option>
                    <option value='part-time'>part-time</option>
                    <option value='full-time'>full-time</option>
                </select>
            </div>
            <div>
                
                {(applideJosArray.length > 0) || <p className='h-[400px] border justify-center items-center text-5xl text-red-600 font-bold flex'>Not yet applied</p>}
                {applideJosArray.length && applideJosArray.map(job => <AppliedJobCard job={job} key={job.id}></AppliedJobCard>)}
        
            </div>
            
        </div>
    );
};

export default AppliedJobs;