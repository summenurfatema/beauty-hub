import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            "id": 1,
            "img": "https://source.unsplash.com/50x50/?portrait?2",
            "name": "Mukta Rani Das",
            "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere."
        },
        {
            "id": 2,
            "img": "https://source.unsplash.com/50x50/?portrait?2",
            "name": "Masud Rana",
            "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere."
        },
        {
            "id": 3,
            "img": "https://source.unsplash.com/50x50/?portrait?2",
            "name": "Fatema Summe Nur",
            "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere."
        },
    ]
    return (
        <div>
            <section className="my-8">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <p className='text-2xl text-gray-800 tracking-wider'>OUR TESTIMONIAL</p>
                    <h1 className="p-4 text-4xl font-semibold text-center">What our customers are saying about us</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">

                    {
                        testimonials.map(testimonial => <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                                <div className="flex flex-col items-center justify-center rounded-b-lg">
                                    <img src={testimonial.img} alt="" className="w-24 h-24 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                                    <p className="text-xl font-semibold leading-tight">{testimonial.name}</p>

                                </div>
                                <p className="relative px-6 py-1 text-lg text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-brown">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    <p>{testimonial.review}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-brown">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='flex justify-evenly bg-orange-300 py-9 px-4 mt-4 '>
                    <h2 className='text-gray-800 text-4xl font-bold tracking-wide'>YOUR GIFT</h2>
                    <p className='text-gray-800 text-xl font-thin tracking-wide'>OF</p>
                    <p className='text-gray-800 text-2xl text-semibold tracking-wide'>THE DAY</p>
                    <button className='text-white px-4 py-3 bg-orange-500 rounded-md'>Explore</button>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;