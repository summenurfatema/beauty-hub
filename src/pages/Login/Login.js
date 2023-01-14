import React from 'react';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 py-10'>
            <div className='w-96 md:w-[600px] bg-white px-3 pb-7'>
                <h1 className='text-gray-800 text-center font-bold text-2xl md:text-3xl py-7'>Login to your account</h1>
                <form className='px-8 py-7 space-y-5'>
                    <input placeholder='Email or Phone' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />
                    <input placeholder='Password' className='border-2 py-4 border-red w-full rounded-md text-xl pl-5' />

                    <div className='flex flex-col md:justify-between md:items-center  space-y-2 md:space-y-0'>
                        <div>
                            <input type='checkbox' className='w-5 h-5' />
                            <p className='inline-block pl-2 md:pl-5 text-xl text-gray-400'> Remember me</p>
                        </div>
                        <p className='text-xl text-gray-400'>Forget Password?</p>
                    </div>
                    <button className='w-full py-3 text-xl font-semibold bg-brown text-white rounded-md'>Login</button>
                </form>
                <div className="divider text-lg text-gray-500">Or Log in with</div>
                <div>
                    <div className='flex justify-center items-center space-x-5'>
                        <div className='bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center'>
                            <FaFacebookF className='text-xl   text-white' />
                        </div>

                        <div className='bg-red-600 rounded-full w-8 h-8 flex justify-center items-center'>
                            <FaGooglePlusG className='text-xl   text-white' />
                        </div>

                    </div>
                    <p className='text-xl text-gray-500 text-center pt-3 pb-2'>Don't have an account?</p>
                    <p className='text-center'>
                        <Link to='/register' className='text-xl text-brown font-medium'>Ragister Now</Link>
                    </p>
                </div>
            </div>




        </div>


    );
};

export default Login;