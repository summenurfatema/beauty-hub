import React from 'react';

const Caregory = ({ category }) => {
    const { name, img } = category
    return (
        <div>
            <img src={img} alt='category' />
            <p>{name}</p>
        </div>
    );
};

export default Caregory;