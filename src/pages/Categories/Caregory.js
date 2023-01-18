import React from 'react';

const Caregory = ({ category }) => {
    const { name, img } = category
    return (
        <div className='bg-gray-200 w-5/6 hover:scale-105 duration-300'>
            <img className='w-full' src={img} alt='category' />
            <p className='text-center py-2 text-lg'>{name}</p>
        </div>
    );
};

export default Caregory;