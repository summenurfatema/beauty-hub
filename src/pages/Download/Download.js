import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Download = () => {
    const [visible, setVisible] = useState(true)
    return (
        <div className='px-1'>
            <div className='flex justify-between items-center'>
                {visible &&

                    <div className='flex items-center'>


                        <div className='flex items-center pb-3'>
                            <img src='assets/logo.png' className='h-8 w-14 md:h-20 md:w-24  relative' alt='logo' />
                            <h2 className='text-xs md:text-2xl font-bold text-yellow-500 absolute left-0  top-6 md:left-14 lg:left-20'>Beauty Hub</h2>
                        </div>

                        <h1 className='text-xs md:text-3xl font-bold tracking-tighter mx-1 lg:ml-36 md:ml-40 ml-8'>Download Beauty Hub App and Discover Your True Beauty</h1>
                        <div>

                            <button className='text-xs lg:text-2xl px-3 font-semibold md:px-3 lg:ml-4 md:py-2 md:mr-5 bg-yellow-500 rounded-xl text-white md:font-bold'>
                                DOWNLOAD NOW
                            </button>
                        </div>

                    </div>

                }
                {
                    visible ?
                        <AiOutlineCloseCircle className='text-4xl' onClick={() => setVisible(false)}>Hide</AiOutlineCloseCircle>
                        :
                        <BsChevronDoubleDown className='absolute top-0 right-0 text-2xl' onClick={() => setVisible(true)}>Show</BsChevronDoubleDown>
                }




            </div>
        </div>
    );
};

export default Download;