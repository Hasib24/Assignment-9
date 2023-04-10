

import React from 'react';
import CategoryCard from './CategoryCard';

const JobCategory = () => {
  
    const jobCategoryArray = [
        {
            id: 1,
            img: 'https://i.postimg.cc/grS0d2CZ/category-1.png',
            category: 'Account & Finance',
            qnantity: '300 Jobs Available'
        },
        {
            id: 2,
            img: 'https://i.postimg.cc/fkTb69rs/business-1.png',
            category: 'Creative Design',
            qnantity: '100+ Jobs Available'  
        },
        {
            id: 3,
            img: 'https://i.postimg.cc/RN2V6bVC/social-media-1.png',
            category: 'Marketing & Sales',
            qnantity: '150 Jobs Available'
        },
        {
            id: 4,
            img: 'https://i.postimg.cc/6y8pQNK1/chip-1.png',
            category: 'Engineering Job',
            qnantity: '224 Jobs Available'
        }
    ]

    return (
        <div className='container mx-auto px-4 my-10'>
            <div className='text-center'> 
                <h1 className='font-semibold text-4xl mb-4'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
            <div className=' md:grid md:grid-cols-4'>
                {jobCategoryArray.map(aCategory => <CategoryCard aCategory={aCategory} key={aCategory.id}></CategoryCard> )}
            </div>
      </div>
    );
};

export default JobCategory;