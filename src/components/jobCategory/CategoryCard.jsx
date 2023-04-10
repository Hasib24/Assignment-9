import React from 'react';

const CategoryCard = ({aCategory}) => {
    return (
        <div className='border my-3 mx-2 px-3 py-5 bg-[#919ffa1f]'>
            <img className='w-12 rounded-md p-2 bg-white' src={aCategory.img} alt="" />
            <h1 className='font-bold mt-2 text-2xl'>{aCategory.category}</h1>
            <span className='text-slate-700'>{aCategory.qnantity}</span>
        </div>
    );
};

export default CategoryCard;