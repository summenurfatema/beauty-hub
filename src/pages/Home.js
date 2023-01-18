import React from 'react';
import Hero from '../pages/Hero/Hero'
import Carosal from './Carosal/Carosal';
import Categories from './Categories/Categories';
import Dermo from './Dermo/Dermo';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import Personalized from './Personalized/Personalized';

const Home = () => {
    return (
        <div>

            <Carosal />
            <Categories />
            <FeaturedProduct />
            <Dermo />
            <Personalized />

        </div>
    );
};

export default Home;