import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Swiper and modules styles
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
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/PDuQZ4Rv2uk4f6ApCOFktbXqrsEWW72KWZJeHedQ.jpg',
            'img2': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/QckZ2ftFlctrXnesbbjZU7ONeI2Ue0EH0Ct7sta0.jpg'
        },
        {
            'id': 2,
            'name': 'WHITENING & BRIGHTENING',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/PDuQZ4Rv2uk4f6ApCOFktbXqrsEWW72KWZJeHedQ.jpg',
            'img2': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/QckZ2ftFlctrXnesbbjZU7ONeI2Ue0EH0Ct7sta0.jpg'
        },
        // {
        //     'id': 2,
        //     'name': 'OILY & ACNE SKIN CARE',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/dGT0AD0grJogwOOIAHhbzshzJDqEgLqm5sdK0ilB.webp'
        // },
        // {
        //     'id': 3,
        //     'name': 'EXCLUSIVE SKIN CARE',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/tXxESuckqM6HNX2VAhj5ZwMBooOOR4MtN4O7GBEQ.webp'
        // },
        // {
        //     'id': 4,
        //     'name': 'MOISTURIZER',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/3gH32kgMh3z38UVoxrfFScyKX7O33qTJhzXK7G40.webp'
        // },
        // {
        //     'id': 5,
        //     'name': 'PREMIUM SKINCLINIC PRODUCTS',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/yr0xgl0ESXaSxiwvkclFpMUEQw4tKs1v1FniIdRM.webp'
        // },
        // {
        //     'id': 6,
        //     'name': 'DAILY SKIN CARE',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/yr0xgl0ESXaSxiwvkclFpMUEQw4tKs1v1FniIdRM.webp'
        // },
        // {
        //     'id': 7,
        //     'name': 'MATURE SKIN CARE',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/zTf8m4SUDARWOfAntjQpcnrSlnkZL2HrHU0bFzkq.webp'
        // },
        // {
        //     'id': 8,
        //     'name': 'HYPERPIGMENTATION, SPOT & SCAR',
        //     'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/pZ5fRkyL85ll9oZQjGnTdONkbmk1xBkplOxVCZhP.webp'
        // }
    ]
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    categories.map(cat =>
                        <SwiperSlide key={cat.id}>
                            <FeaturedProductCard cat={cat} />
                        </SwiperSlide>
                    )
                }



            </Swiper>
        </div>
    );
};

export default FeaturedProduct;

