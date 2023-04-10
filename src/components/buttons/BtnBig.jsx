import React from 'react';

const BtnBig = ({btnText}) => {
    return (
        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white p-3 rounded-md font-bold tracking-wider'>{btnText}</button>
    );
};

export default BtnBig;