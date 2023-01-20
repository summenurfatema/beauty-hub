import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlogVideo = () => {
    const videos = [
        {
            "id": 1,
            "video": "https://www.youtube.com/embed/_n00-yVKcbg"
        },
        {
            "id": 2,
            "video": "https://www.youtube.com/embed/SYDo1Bk5a5E"
        },
        {
            "id": 3,
            "video": "https://www.youtube.com/embed/_n00-yVKcbg"
        },
        {
            "id": 4,
            "video": "https://www.youtube.com/embed/SYDo1Bk5a5E"
        },
        {
            "id": 5,
            "video": "https://www.youtube.com/embed/_n00-yVKcbg"
        },
        {
            "id": 6,
            "video": "https://www.youtube.com/embed/SYDo1Bk5a5E"
        },
        {
            "id": 7,
            "video": "https://www.youtube.com/embed/_n00-yVKcbg"
        },
    ]
    return (
        <div className='my-7'>
            <p className='text-2xl text-gray-800 tracking-wider text-center py-7 font-semibold'>SKIN CARE</p>



            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className='container mx-auto py-7'>


                    {
                        videos.map(video =>
                            <SwiperSlide key={video.id}>
                                <iframe width="350" height="300" src={video.video} title="YouTube video player" frameborder="0"
                                    className='px-5' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </SwiperSlide>
                        )
                    }
                </div>




            </Swiper>
        </div>
    );
};

export default BlogVideo;