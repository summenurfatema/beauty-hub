import React from 'react';

//https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/EQXvBuZmLzE52KihOcAvIPxcHmKBKvHrEXHzFSvi.jpg
// url('https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/EQXvBuZmLzE52KihOcAvIPxcHmKBKvHrEXHzFSvi.jpg')

//https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/EQXvBuZmLzE52KihOcAvIPxcHmKBKvHrEXHzFSvi.jpg
const Dermo = () => {
    return (
        <div className='py-7 px-5'>
            <div className='pl-20 pt-24 pb-10 absolute'>
                <p className='text-2xl fony-medium text-gray-800 pb-4'>Is bad skin affecting your daily life ?</p>
                <p className="flex flex-col">
                    <span className='text-5xl tracking-wider text-brown font-bold uppercase'>Dermo</span>
                    <span className='text-5xl tracking-widest text-brown font-bold uppercase'>cosmetics</span>
                </p>

                <p className='text-5xl font-thin text-gray-600 my-12'>Rebalance your skin</p>

                <button className='px-3 py-3 text-white bg-brown text-lg rounded-md'>Shop Now</button>
            </div>

            <img src='https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/EQXvBuZmLzE52KihOcAvIPxcHmKBKvHrEXHzFSvi.jpg' alt='hero1' />
        </div>



    );
};

export default Dermo;