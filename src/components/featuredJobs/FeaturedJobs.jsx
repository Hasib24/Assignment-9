

import React, { useEffect } from 'react';

const FeaturedJobs = () => {

  useEffect(()=>{
    fetch('featuredjobs.json')
    .then(res => res.json())
    .then(jobs =>console.log(jobs) )
  }, [])

  

  return (
    <div className='container mx-auto'>
        <div className='text-center'> 
          <h1>Featured Jobs</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div>
          featureed jobs will appera here
        </div>
        
        
        
        
      </div>
  );
};

export default FeaturedJobs;