import React from 'react';
import { Link } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi'

const TopNav = () => {
    return (
        <div className='hidden lg:block'>
            <div className='flex justify-between items-center mt-6 px-6 py-3 bg-sky-400'>
                <p className='text-lg'><BiPhone className='inline-block' /> Help line 01755-660522</p>

                <nav>
                    <ul className='flex space-x-4 text-lg'>
                        <li><Link to=''>About Us  |</Link> </li>
                        <li><Link to=''>Contact Us |</Link> </li>
                        <li><Link to=''>Beauty Hub location |</Link> </li>
                        <li><Link to=''>Blog |</Link> </li>
                        <li><Link to=''>Vlog |</Link> </li>
                        <li><Link to=''>Career |</Link> </li>
                        <li><Link to=''>Login |</Link> </li>
                        <li><Link to=''>Register</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TopNav;