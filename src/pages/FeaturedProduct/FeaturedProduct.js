import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Swiper and modules styles
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
import img4 from '../../image/img4.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles

import 'swiper/css';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProduct = () => {
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
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className='container mx-auto'>


                    {
                        categories.map(category =>
                            <SwiperSlide key={category.id}>
                                <FeaturedProductCard category={category} />
                            </SwiperSlide>
                        )
                    }
                </div>




            </Swiper>
        </div>
    );
};

export default FeaturedProduct;

