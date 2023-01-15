import React from 'react';
import { GoPlus } from 'react-icons/go'
import Bottom from '../Bottom/Bottom';

const Footer = () => {
    return (
        <div>

            <div
                class="grid grid-cols-1 gap-2 pt-8 border-t border-gray-100 base:grid-cols-2 lg:grid-cols-4 lg:pt-16 bg-black pl-6 pb-4"
            >
                <div classNam=''>
                    <p class="font-medium text-lg text-brown">ABOUT US</p>

                    <nav aria-label="Footer Navigation - Services" class="mt-6">
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    About Beauty Hub
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    News & Events
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Skin Care Blog
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Our Location
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Contact Us
                                </a>

                            </li>
                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Submit Your Complain
                                </a>
                            </li>
                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-medium text-lg text-brown">MY ACCOUNT</p>

                    <nav aria-label="Footer Navigation - Company" class="mt-6">
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Login
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Order History
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Track Order
                                </a>
                            </li>
                            <li>
                                <a href=" " class="text-gray-100 transition hover:opacity-75">
                                    Earn Money
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-medium text-lg text-brown">FIND OUR BRANCH LOCATION</p>

                    <nav aria-label="Footer Navigation - Company" class="mt-6">
                        <div className='flex space-x-4'>
                            <ul class="space-y-4 text-base">
                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' /> DHANMONDI
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' />   MIRPUR
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' />     UTTARA
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' />  SHANTINAGAR
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' /> BASHUNDHARA CITY
                                    </a>
                                </li>
                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' /> GAZIPUR
                                    </a>
                                </li>
                            </ul>
                            <ul class="space-y-4 text-base">
                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' /> NARAYNGANJ
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' />  SYLHET
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' /> RAJSHAHI
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' /> CHATTOGRAM
                                    </a>
                                </li>

                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' />    WARI
                                    </a>
                                </li>
                                <li>
                                    <a href=" " class="text-gray-100 transition hover:opacity-75">
                                        <GoPlus className='inline-block font-bold' />  BANANI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div>

                    <p class="font-medium text-xl text-brown">Corporate Office:</p>

                    <nav aria-label="Footer Navigation - Legal" class="mt-6">
                        <div>
                            <p className='text-gray-100 text-base transition hover:opacity-75'>Level 4, Mirpur DOHS Cultural Center</p>
                            <p className='text-gray-100 text-base transition hover:opacity-75'>Road No-09, Mirpur DOHS,</p>
                            <p className='text-gray-100 text-base transition hover:opacity-75'>Mirpur 12, Dhaka-1216</p>
                            <div className='flex space-x-4 py-3'>
                                <button className='bg-gray-100 rounded-md px-3 py-2'>CALL US</button>
                                <button className='bg-gray-100 rounded-md px-3 py-2'>EMAIL US</button>

                            </div>

                            <button className='bg-brown text-white rounded-md px-3 py-2 mb-2'>Appoinment</button>
                            <div> <img className='rounded-md h-12 w-32 mb-2 border-2' src='assets/gp2.png' alt=' ' />
                            </div>

                        </div>
                    </nav>
                </div>
            </div>

            <Bottom />



        </div>


    );
};

export default Footer;