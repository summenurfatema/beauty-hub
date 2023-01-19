import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper';
// import Swiper and modules styles
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
import img4 from '../../image/img4.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";

// Import Swiper styles

import 'swiper/css';

import SliderCard from './SliderCard';

const Slider = () => {
    const categories = [
        {
            'id': 1,
            'name': 'WHITENING & BRIGHTENING',
            'img': img1,
            'price': 400
        },
        {
            'id': 2,
            'name': 'WHITENING & BRIGHTENING',
            'img': img2,
            'price': 499
        },
        {
            'id': 2,
            'name': 'OILY & ACNE SKIN CARE',
            'img': img3,
            'price': 399
        },
        {
            'id': 3,
            'name': 'EXCLUSIVE SKIN CARE',
            'img': img4,
            'price': 299

        },
        {
            'id': 4,
            'name': 'MOISTURIZER',
            'img': img3,
            'price': 599
        },
        {
            'id': 5,
            'name': 'PREMIUM SKINCLINIC PRODUCTS',
            'img': img2,
            'price': 499
        },
        {
            'id': 6,
            'name': 'DAILY SKIN CARE',
            'img': img3,
            'price': 499
        },
        {
            'id': 7,
            'name': 'MATURE SKIN CARE',
            'img': img4,
            'price': 599
        },
        {
            'id': 8,
            'name': 'HYPERPIGMENTATION, SPOT & SCAR',
            'img': img3,
            'price': 699
        }
    ]
    return (
        <div className='bg-gray-100'>
            <div className='divider text-black px-20 py-12 '><span className=' border-2 border-brown px-4 py-3 text-xl'>Featured Product</span></div>
            <div className='flex justify-between'>

                <div className='w-[300px]'>

                    <Swiper
                        spaceBetween={3}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt='' /></SwiperSlide>

                    </Swiper>
                </div>


                {/* new Arrival */}
                <div className='w-[800px]'>
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        navigation={true}
                        spaceBetween={30}

                        modules={[Navigation, Grid, Pagination]}
                        className="mySwiper"
                    >
                        {
                            categories.map(newProduct =>
                                <SwiperSlide>
                                    <SliderCard newProduct={newProduct} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div >
        </div>






    );
};

export default Slider;




