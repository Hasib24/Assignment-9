

import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import BtnBig from './../buttons/BtnBig';

const FeaturedJobs = () => {

  let [ jobs, setJobs ] = useState([])
  useEffect(()=>{
    fetch('featuredjobs.json')
    .then(res => res.json())
    .then(jobs =>setJobs(jobs) )
  }, [])

  

  return (
    <div className='container mx-auto'>
        <div className='text-center'> 
          <h1 className='text-3xl font-bold'>Featured Jobs</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='md:grid md:grid-cols-2'>
          {jobs.map(job => <JobCard job={job} key={job.id}></JobCard>)}
        </div>
        <div className='text-center'>

          <BtnBig btnText={'See All Jobs'}></BtnBig>
        </div>
        
        
        
        
      </div>
  );
};

export default FeaturedJobs;