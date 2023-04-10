import React from 'react';

const BtnNormal = ({btnText}) => {
    return (
        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-3 py-2 rounded-md font-bold tracking-wider'>{btnText}</button>
    );
};

export default BtnNormal;