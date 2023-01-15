import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='pl-16 pt-24 pb-10'>
                    <p className='text-2xl fony-medium text-gray-800 pb-4'>Worried About Your Skin ?</p>
                    <p>
                        <span className='text-5xl tracking-wider text-brown font-bold uppercase'>Beauty Hub</span>
                        <span className='text-5xl tracking-wider text-brown font-bold uppercase'>skin-care treatment</span>
                    </p>

                    <p className='text-4xl font-thin text-gray-600 my-12'>Don't worry, we got you!</p>

                    <button className='px-3 py-3 text-white bg-brown text-lg rounded-md'>Explore Now</button>
                </div>

                <img src='https://img.freepik.com/free-photo/well-kept-portrait-beautiful-young-woman-white-studio-background-concept-cosmetics-makeup-natural-eco-treatment-skin-care-shiny-healthy-look-fashion-healthcare-copyspace_155003-23270.jpg?size=626&ext=jpg&ga=GA1.1.821203553.1657130385&semt=sph' alt='hero1' />
            </div>


            <div className='flex justify-between items-center'>
                <div className='pl-16 pt-24 pb-10 z-40'>
                    <p className='text-2xl fony-medium text-gray-800 pb-4'>What's Your Skin Concern ?</p>
                    <p className='flex flex-col'>
                        <span className='text-5xl tracking-wider text-brown font-bold uppercase'>personalized</span>
                        <span className='text-5xl tracking-wider text-brown font-bold uppercase'>treatment</span>
                    </p>

                    <p className='text-4xl font-thin text-gray-600 my-12 z-'>Premium Solution For Skin</p>

                    <button className='px-3 py-3 text-white bg-brown text-lg rounded-md'>Explore Now</button>
                </div>

                <svg
                    className="absolute left-[550px] hidden h-[450px] text-white transform -translate-x-1/2 lg:block z-0"
                    viewBox="0 0 75 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-2/4 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://t3.ftcdn.net/jpg/01/92/98/42/240_F_192984281_jF619bZ4SwP0IgyCT5nPnQrpYi6dXQt7.jpg"
                    alt=""
                />
            </div>


            {/* <img className='w-2/4'
                    src='https://t3.ftcdn.net/jpg/01/92/98/42/240_F_192984281_jF619bZ4SwP0IgyCT5nPnQrpYi6dXQt7.jpg' alt='hero2' />
            </div> */}


        </div >
    );
};

export default Hero;