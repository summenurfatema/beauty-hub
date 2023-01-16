import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import 'swiper/css';
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carosal() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <div className='pl-20 pt-24 pb-10 absolute'>
                            <p className='text-2xl fony-medium text-gray-800 pb-4'>Worried About Your Skin ?</p>
                            <p className="flex flex-col">
                                <span className='text-5xl tracking-wider text-brown font-bold uppercase'>Beauty Hub</span>
                                <span className='text-5xl tracking-widest text-brown font-bold uppercase'>skin-care treatment</span>
                            </p>

                            <p className='text-5xl font-thin text-gray-600 my-12'>Don't worry, we got you!</p>

                            <button className='px-3 py-3 text-white bg-brown text-lg rounded-md'>Explore Now</button>
                        </div>

                        <img src='assets/bio.jpg' alt='hero1' />
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=''>
                        <div className='pl-20 pt-24 pb-10 absolute'>
                            <p className='text-2xl fony-medium text-gray-800 pb-4'>What's Your Skin Concern ?</p>
                            <p className='flex flex-col'>
                                <span className='text-5xl tracking-widest text-brown font-bold uppercase'>personalized</span>
                                <span className='text-5xl tracking-widest text-brown font-bold uppercase'>treatment</span>
                            </p>

                            <p className='text-5xl font-thin text-gray-600 my-12 z-'>Premium Solution For Skin</p>

                            <button className='px-3 py-3 text-white bg-brown text-lg rounded-md'>Explore Now</button>
                        </div>


                        <img src='assets/bio2.jpg' alt='hero2' />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}