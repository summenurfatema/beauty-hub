import React from 'react';
import Caregory from './Caregory';

const Categories = () => {
    const categories = [
        {
            'id': 1,
            'name': 'WHITENING & BRIGHTENING',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/3gH32kgMh3z38UVoxrfFScyKX7O33qTJhzXK7G40.webp'
        },
        {
            'id': 2,
            'name': 'OILY & ACNE SKIN CARE',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/dGT0AD0grJogwOOIAHhbzshzJDqEgLqm5sdK0ilB.webp'
        },
        {
            'id': 3,
            'name': 'EXCLUSIVE SKIN CARE',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/tXxESuckqM6HNX2VAhj5ZwMBooOOR4MtN4O7GBEQ.webp'
        },
        {
            'id': 4,
            'name': 'MOISTURIZER',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/3gH32kgMh3z38UVoxrfFScyKX7O33qTJhzXK7G40.webp'
        },
        {
            'id': 5,
            'name': 'PREMIUM SKINCLINIC PRODUCTS',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/yr0xgl0ESXaSxiwvkclFpMUEQw4tKs1v1FniIdRM.webp'
        },
        {
            'id': 6,
            'name': 'DAILY SKIN CARE',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/yr0xgl0ESXaSxiwvkclFpMUEQw4tKs1v1FniIdRM.webp'
        },
        {
            'id': 7,
            'name': 'MATURE SKIN CARE',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/zTf8m4SUDARWOfAntjQpcnrSlnkZL2HrHU0bFzkq.webp'
        },
        {
            'id': 8,
            'name': 'HYPERPIGMENTATION, SPOT & SCAR',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/pZ5fRkyL85ll9oZQjGnTdONkbmk1xBkplOxVCZhP.webp'
        }
    ]
    return (
        <div className='bg-gray-100 pb-7'>
            <div className='divider text-black px-20 py-12 '><span className=' border-2 border-brown px-4 py-3 text-xl'>Shop By Category</span></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-9 container mx-auto bg-white py-7 pl-14'>
                {
                    categories.map(category => <Caregory
                        key={category.id}
                        category={category}
                    />)
                }
            </div>
        </div>
    );
};

export default Categories;