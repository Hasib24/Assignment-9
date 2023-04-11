import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobCard from './AppliedJobCard';

const AppliedJobs = () => {

    let allJobsArray = useLoaderData();

    let applideJosArray = [];
    // let displayAble = [];

    if(localStorage.getItem('appliedJobsIds')){
        let storedJosIds = JSON.parse(localStorage.getItem('appliedJobsIds'));
        applideJosArray = allJobsArray.filter(aJob => storedJosIds.includes(aJob.id))   
    }

    return (
        <div className='container mx-auto my-10'>
            {/* {applideJosIds.length || `Not yet applied`} */}
            {(applideJosArray.length > 0) || <p className='h-[400px] border justify-center items-center text-5xl text-red-600 font-bold flex'>Not yet applied</p>}
            {applideJosArray.length && applideJosArray.map(job => <AppliedJobCard job={job} key={job.id}></AppliedJobCard>)}
        </div>
    );
};

export default AppliedJobs;