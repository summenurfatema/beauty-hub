import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper';
// import Swiper and modules styles
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
import img4 from '../../image/img4.jpg'
import product1 from '../../image/product1.png'
import product2 from '../../image/product2.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";

// Import Swiper styles

import 'swiper/css';
import BestSellingCard from './BestSellingCard';

const BestSelling = () => {
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
            <div className='divider text-black px-20 py-12 '><span className=' border-2 border-brown px-4 py-3 text-xl'>Best Selling</span></div>
            <div className='flex flex-row-reverse justify-evenly'>

                <div className='w-[500px] mt-40'>

                    <Swiper
                        spaceBetween={3}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='h-[500px] ' src={product1} alt='' /></SwiperSlide>
                        <SwiperSlide><img className='h-[500px]' src={product2} alt='' /></SwiperSlide>

                    </Swiper>
                </div>


                {/* new Arrival */}
                <div className='w-[850px]'>
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
                                    <BestSellingCard newProduct={newProduct} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div >
        </div>






    );
};

export default BestSelling;




