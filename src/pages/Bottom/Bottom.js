import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaCcMastercard } from 'react-icons/fa';

const Bottom = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Copyright 2023 © Bio-Xin Cosmeceuticals</p>
                </div>

                <div className='flex space-x-2'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                </div>
                <div>
                    <FaCcMastercard />
                </div>
            </div>

        </div>
    );
};

export default Bottom;