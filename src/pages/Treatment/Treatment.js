import React from 'react';

const Treatment = () => {
    const treatments = [
        {
            "id": 1,
            "name": "doctor consultation",
            "des": "Consulting our doctors regularly getting the correct treatment quickly, avoiding any complications."
        },
        {
            "id": 2,
            "name": "advance bio-hydra facial",
            "des": "Bio-Hydra Facial a medical-grade resurfacing treatment that clears out pores plus hydrates skin."
        },
        {
            "id": 3,
            "name": "laser unwanted hair",
            "des": "Easy way to remove unwanted hair from the face, leg, chin, back, arm, underarm, bikini line, and other areas."
        },
        {
            "id": 3,
            "name": "revir mcd(microermabrasion)",
            "des": "Most effective treatment to remove Black and Whiteheads, dark spots, scars, sun damage, dull, and skin's aging sign"
        },
        {
            "id": 4,
            "name": "",
            "des": ""
        },
        {
            "id": 5,
            "name": "",
            "des": ""
        },
        {
            "id": 6,
            "name": "",
            "des": ""
        },
        {
            "id": 7,
            "name": "",
            "des": ""
        },
        {
            "id": 8,
            "name": "",
            "des": ""
        }
    ]
    return (
        <div>
            <img src='' alt='' />
            <div className='bg-white px-4 py-3'>
                <h1 className='font-bold text-brown text-3xl'></h1>
                <p className='font-thin text-gray-800 text-xl'></p>
                <button className='px-3 py-2 text-brown border-2  border-brown'>VIEW DETAILS</button>
            </div>
        </div>
    );
};

export default Treatment;