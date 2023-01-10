import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Download = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div className='flex justify-between'>
                {visible &&

                    <div>
                        <h1 className='text-4xl font-bold '>Download Beauty Hub App and Discover Your True Beauty</h1>

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