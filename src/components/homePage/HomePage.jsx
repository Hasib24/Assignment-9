import React from 'react';
import Banner from '../Banner';
import JobCategory from '../jobCategory/JobCategory';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
            
        </>
    );
};

export default HomePage;