import { useState } from "react";
import Download from "../Download/Download";
import TopNav from "../TopNav/TopNav";
import { FaSistrix } from 'react-icons/fa'
import { BsPerson, BsBagPlus, BsJustify } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import { Link } from "react-router-dom";



const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <Download />
            <TopNav />
            <div>
                <div class="bg-gray-900">
                    <div class="px-4 -py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div class="relative flex  items-center justify-between">

                            <div>
                                <BsBagPlus className="text-2xl lg:hidden text-white" />
                            </div>

                            <a
                                href="/"
                                className="inline-flex items-center"
                            >
                                <img src='assets/logo.png' className='h-8 w-14 md:h-20 md:w-24 lg:w-28 lg:-ml-32' alt='logo' />

                                <span class=" text-xl lg:text-2xl font-bold text-yellow-400 -ml-4">
                                    Beauty Hub
                                </span>
                            </a>
                            <ul class="flex items-center hidden space-x-8 lg:flex">
                                <li>
                                    <Link
                                        to="/"
                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Skin care
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"

                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Treatmemt
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"

                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Special offer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"

                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        New arrival
                                    </Link>
                                </li>
                                <li>
                                    <button className="text-xl font-semibold px-4 py-2 bg-yellow-500 rounded-md text-white hover:mb-3 hover:bg-white hover:text-yellow-500">APPOINTMENT</button>
                                </li>

                            </ul>

                            <ul class="flex items-center hidden space-x-4 lg:flex">
                                <li>
                                    <FaSistrix className="text-4xl text-white" />
                                </li>
                                <li>
                                    {/* <BsPerson className="text-4xl text-white" /> */}

                                    <div className="dropdown">
                                        <label tabIndex={0} className=" text-white text-4xl m-1"><BsPerson /></label>
                                        <ul tabIndex={0} className="dropdown-content menu  shadow bg-white rounded-lg p-5 absolute top-20 -right-20 w-[300px] mt-8 space-y-6">
                                            <li className="text-2xl font-semibold text-yellow-500 tracking-wider uppercase"><>Login</></li>

                                            <Link to='/register'>

                                                <li className="text-2xl font-semibold text-yellow-500 tracking-wider uppercase"><>Registration</></li>
                                            </Link>
                                        </ul>
                                    </div>

                                </li>
                                <li>
                                    <BsBagPlus className="text-4xl text-white " />
                                </li>
                            </ul>
                            <div class="lg:hidden">


                                <button

                                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <BsJustify className="text-2xl text-white" />
                                </button>


                                {isMenuOpen && (
                                    <div class="transform top-0 left-0 w-72 bg-gray-800 fixed h-full overflow-auto ease-in-out transition-all duration-1000">
                                        <div class="p-5 border rounded shadow-sm">
                                            <div class="flex items-center justify-between mb-4">
                                                <div>
                                                    <a
                                                        href="/"

                                                        class="inline-flex items-center"
                                                    >
                                                        <img src='assets/logo.png' className='h-12 w-14' alt='logo' />
                                                        <span class="-ml-2 text-xl font-bold  text-yellow-500">
                                                            Beauty Hub
                                                        </span>
                                                    </a>
                                                </div>
                                                <div>
                                                    <button

                                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <AiOutlineCloseCircle className="text-2xl text-white" />
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul class="space-y-4">
                                                    <li>
                                                        <input placeholder="Search here" className="w-full py-2 pl-3 bg-gray-800 border-2  border-white rounded-md" />
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            SKIN CARE
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            TREATMENR
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            SPECIAL OFFER
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            NEW ARRIVAL
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            ABOUT US
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            CONTACT
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            BEAUTY HUB LOCATION
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            NEWS & EVENTS
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            BLOG
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            VIDEO TIPS
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <button className="text-xl font-semibold px-4 py-2 bg-yellow-500 rounded-md">Job Apply</button>
                                                    </li>

                                                    <li>
                                                        <p className='text-lg text-white'><BiPhone className='inline-block' /> Help line 01755-660522</p>

                                                    </li>


                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NavBar;