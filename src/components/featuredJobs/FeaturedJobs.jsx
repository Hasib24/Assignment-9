

import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import BtnBig from './../buttons/BtnBig';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {

  let jobs = useLoaderData();
  

  let [ allJobs, setAllJobs ] = useState([]);

  useEffect(()=>{
    setAllJobs(jobs.slice(0, 4))
  }, [jobs])
  
 




  const seeAllJobsHandler = () =>{

    setAllJobs(jobs);

    

    
  }


  // console.log(jobs.slice(0, 4));
  

  return (
    <div className='container mx-auto'>
        <div className='text-center'> 
          <h1 className='text-3xl font-bold'>Featured Jobs</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='md:grid md:grid-cols-2'>
          {allJobs.map(job => <JobCard job={job} key={job.id}></JobCard>)}
        </div>
        <div className='text-center' onClick={()=>{seeAllJobsHandler()}}>
          {allJobs.length < 6 ? <BtnBig btnText={'See All Jobs'}></BtnBig> : '' }
        </div>
        
        
        
        
      </div>
  );
};

export default FeaturedJobs;