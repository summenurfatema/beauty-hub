import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Register = () => {

    const [phone, setPhone] = useState(false)

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 px-5 py-10'>
            <div className='w-full md:w-[600px] bg-white pb-7'>
                <h1 className='text-gray-800 text-center font-bold text-2xl md:text-3xl py-7'>Create an account</h1>
                <form className='px-8 py-7 space-y-5'>
                    <input placeholder='Full name' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />

                    {
                        phone ?

                            <input placeholder='Email address' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />
                            :
                            <input placeholder='Phone number' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />

                    }
                    {
                        phone ?

                            <p onClick={() => setPhone(false)} className='text-xl text-right underline text-gray-400'>Use Phone Number</p>
                            :
                            <p onClick={() => setPhone(true)} className='text-xl text-right underline text-gray-400'>Use Email Address</p>


                    }


                    <input placeholder='Password' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />
                    <input placeholder='Confirm Password' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />

                    <div>
                        <input type='checkbox' className='w-5 h-5' />
                        <p className='inline-block text-lg pl-5 md:text-xl text-gray-400'> By signing up you agree to our terms and conditions.</p>
                    </div>
                    <button className='w-full py-3 text-xl font-semibold bg-brown text-white rounded-md'>Create Account</button>
                </form>
                <div className="divider text-lg text-gray-500">Or Join with</div>
                <div>
                    <div className='flex justify-center items-center space-x-5'>
                        <div className='bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center'>
                            <FaFacebookF className='text-xl   text-white' />
                        </div>

                        <div className='bg-red-600 rounded-full w-8 h-8 flex justify-center items-center'>
                            <FaGooglePlusG className='text-xl   text-white' />
                        </div>

                    </div>
                    <p className='text-xl text-gray-500 text-center pt-3 pb-2'>Already have an account?</p>
                    <p className='text-center'>
                        <Link to='/login' className='text-xl text-brown font-medium'>Log in</Link>
                    </p>
                </div>
            </div>




        </div>
    );
};

export default Register;