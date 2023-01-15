import React from 'react';
import { FaFacebookF, FaInstagram, FaCcMastercard } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai'

const Bottom = () => {
    return (
        <div className=' px-9 py-7 bg-gray-800'>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Copyright 2023 © Bio-Xin Cosmeceuticals</p>
                </div>

                <div className='flex space-x-2'>
                    <span className='h-10 w-10 bg-blue-700 flex justify-center items-center rounded-full'>
                        <FaFacebookF className='text-2xl text-white' />
                    </span>

                    <span className='h-10 w-10 bg-pink-500 flex justify-center items-center rounded-full'>
                        <FaInstagram className='text-2xl text-white' />
                    </span>
                    <span className='h-10 w-10 bg-red-700 flex justify-center items-center rounded-full'>
                        <AiOutlineYoutube className='text-2xl text-white' />
                    </span>




                </div>
                <div>
                    <img src='assets/payment.png' alt='' />
                </div>
            </div>

        </div>
    );
};

export default Bottom;