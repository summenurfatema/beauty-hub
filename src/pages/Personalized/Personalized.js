import React from 'react';

const Personalized = () => {
    return (
        <div className='py-7 px-5'>
            <div className='right-12 text-end pt-24 pb-10 absolute'>
                <p className='text-2xl fony-medium text-gray-800 pb-4'>What your skin needs ?</p>
                <p className="flex flex-col">
                    <span className='text-5xl tracking-wider text-brown font-bold uppercase'>personalized</span>
                    <span className='text-5xl tracking-widest text-brown font-bold uppercase'>treatment</span>
                </p>

                <p className='text-5xl font-thin text-gray-600 my-12'>Premium Solution For Skin</p>

                <button className='px-3 py-3 text-white bg-brown text-lg rounded-md'>Shop Now</button>
            </div>

            <img src='https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/UrnSjTDOrrzH5HwJcrFOdWrpmYCv1VwQcVFvGDNf.jpg' alt='hero1' />
        </div>



    );
};

export default Personalized;