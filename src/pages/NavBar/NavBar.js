import { useState } from "react";
import Download from "../Download/Download";
import TopNav from "../TopNav/TopNav";
import { FaSistrix } from 'react-icons/fa'
import { BsPerson, BsBagPlus, BsJustify } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'



const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <Download />
            <TopNav />
            <div>
                <div class="bg-gray-900">
                    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div class="relative flex items-center justify-between">
                            <a
                                href="/"
                                className="inline-flex items-center"
                            >

                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                    Beauty Hub
                                </span>
                            </a>
                            <ul class="flex items-center hidden space-x-8 lg:flex">
                                <li>
                                    <a
                                        href="/"
                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Skin care
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"

                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Treatmemt
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"

                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Special offer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"

                                        className="font-xl tracking-wide text-gray-100 uppercase transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        New arrival
                                    </a>
                                </li>
                                <li>
                                    <button className="text-xl font-semibold px-4 py-2 bg-yellow-500 rounded-md text-white">APPOINTMENT</button>
                                </li>

                            </ul>

                            <ul class="flex items-center hidden space-x-4 lg:flex">
                                <li>
                                    <FaSistrix className="text-4xl text-white" />
                                </li>
                                <li>
                                    <BsPerson className="text-4xl text-white" />
                                </li>
                                <li>
                                    <BsBagPlus className="text-4xl text-white" />
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

                                                        <span class="ml-2 text-xl font-bold tracking-wide text-yellow-500 uppercase">
                                                            Beauty Hub
                                                        </span>
                                                    </a>
                                                </div>
                                                <div>
                                                    <button

                                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <AiOutlineCloseCircle />
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul class="space-y-4">
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            SKIN CARE
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            TREATMENR
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            SPECIAL OFFER
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            NEW ARRIVAL
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            ABOUT US
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            CONTACT
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            BEAUTY HUB
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            NEWS & EVENTS
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            BLOG
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"

                                                            className="font-lg text-white transition-colors duration-200 hover:text-yellow-500"
                                                        >
                                                            VIDEO TIPS
                                                        </a>
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