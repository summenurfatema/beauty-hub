import React from 'react';
import BestSelling from './BestSelling/BestSelling';
import Carosal from './Carosal/Carosal';
import Categories from './Categories/Categories';
import Dermo from './Dermo/Dermo';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import Personalized from './Personalized/Personalized';
import NewArrival from './Slider/NewArrival';


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


        </div>
    );
};

export default Home;