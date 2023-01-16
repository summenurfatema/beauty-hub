import React from 'react';
import Caregory from './Caregory';

const Categories = () => {
    const categories = [
        {
            'id': 1,
            'name': 'Cream',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/3gH32kgMh3z38UVoxrfFScyKX7O33qTJhzXK7G40.webp'
        },
        {
            'id': 2,
            'name': 'cream2',
            'img': 'https://bioxin.s3.ap-south-1.amazonaws.com/uploads/all/3gH32kgMh3z38UVoxrfFScyKX7O33qTJhzXK7G40.webp'
        }
        // {
        //     'id':3,
        //   'name' : '',
        //   'img':''
        // },
        // {
        //     'id':4,
        //   'name' : '',
        //   'img':''
        // },
        // {
        //     'id':5,
        //   'name' : '',
        //   'img':''
        // },
        // {
        //     'id':6,
        //   'name' : '',
        //   'img':''
        // },
        // {
        //     'id':7,
        //   'name' : '',
        //   'img':''
        // },
        // {
        //     'id':8,
        //   'name' : '',
        //   'img':''
        // }
    ]
    return (
        <div>
            {
                categories.map(category => <Caregory
                    key={category.id}
                    category={category}
                />)
            }
        </div>
    );
};

export default Categories;