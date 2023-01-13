import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Register = () => {

    const [phone, setPhone] = useState(false)

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 py-10'>
            <div className='w-[600px] bg-white pb-7'>
                <h1 className='text-gray-800 text-center font-bold text-3xl py-7'>Create an account</h1>
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
                        <p className='inline-block pl-5 text-xl text-gray-400'> By signing up you agree to our terms and conditions.</p>
                    </div>
                    <button className='w-full py-3 text-xl font-semibold bg-brown text-white rounded-md'>Create Account</button>
                </form>
                <div className="divider">Or Join with</div>
                <div>
                    <div className='flex justify-center items-center pt-2'>
                        <FaFacebookF className='text-3xl bg-blue-700 rounded-full text-white' />
                        <FaGooglePlusG className='text-3xl mx-5 bg-red-700 rounded-full text-white' />

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