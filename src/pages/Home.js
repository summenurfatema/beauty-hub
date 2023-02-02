import React from 'react';
import BestSelling from './BestSelling/BestSelling';
import BlogVideo from './BlogVideo/BlogVideo';
import Carosal from './Carosal/Carosal';
import Categories from './Categories/Categories';
import Dermo from './Dermo/Dermo';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

import Personalized from './Personalized/Personalized';
import NewArrival from './Slider/NewArrival';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';


const Home = () => {
    return (
        <div>
            
            <Carosal />
            <Categories />
            <FeaturedProduct />
            <NewArrival />
            <Dermo />
            <BestSelling />
            <Personalized />
            <Testimonial />
            <BlogVideo />
            <Treatment />
         


        </div>
    );
};

export default Home;