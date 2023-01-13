import React from 'react';

const Footer = () => {
    return (

        <div
            class="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 base:grid-cols-2 lg:grid-cols-4 lg:pt-16"
        >
            <div>
                <p class="font-medium text-brown">ABOUT US</p>

                <nav aria-label="Footer Navigation - Services" class="mt-6">
                    <ul class="space-y-4 text-base">
                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                About Beauty Hub
                            </a>
                        </li>

                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                News & Events
                            </a>
                        </li>

                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Skin Care Blog
                            </a>
                        </li>

                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Our Location
                            </a>
                        </li>

                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Contact Us
                            </a>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Submit Your Complain
                            </a>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <p class="font-medium text-brown">MY ACCOUNT</p>

                <nav aria-label="Footer Navigation - Company" class="mt-6">
                    <ul class="space-y-4 text-base">
                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Login
                            </a>
                        </li>

                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Order History
                            </a>
                        </li>

                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Track Order
                            </a>
                        </li>
                        <li>
                            <a href=" " class="text-gray-700 transition hover:opacity-75">
                                Earn Money
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <p class="font-medium text-gray-900">FIND OUR BRANCH LOCATION</p>

                <nav aria-label="Footer Navigation - Company" class="mt-6">
                    <div className='flex space-x-4'>
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    DHANMONDI
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    MIRPUR
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    UTTARA
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    SHANTINAGAR
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    BASHUNDHARA CITY
                                </a>
                            </li>
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    GAZIPUR
                                </a>
                            </li>
                        </ul>
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    NARAYNGANJ
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    SYLHET
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    RAJSHAHI
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    CHATTOGRAM
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    WARI
                                </a>
                            </li>
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    BANANI
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div>
                <p class="font-medium text-gray-900">Corporate Office:</p>

                <nav aria-label="Footer Navigation - Legal" class="mt-6">
                    <div>
                        <p>Level 4, Mirpur DOHS Cultural Center</p>
                        <p>Road No-09, Mirpur DOHS,</p>
                        <p>Road No-09, Mirpur DOHS,</p>
                        <div className='flex justify-around'>
                            <button className='bg-red-500 px-2 py-3'>CALL US</button>
                            <button className='bg-red-500 px-2 py-3'>EMAIL US</button>

                        </div>

                        <button className='bg-red-500 px-2 py-3'>Appoinment</button>

                    </div>
                </nav>
            </div>




            <p class="text-xs text-gray-500">
                &copy; 2022. Company Name. All rights reserved.
            </p>
        </div>


    );
};

export default Footer;