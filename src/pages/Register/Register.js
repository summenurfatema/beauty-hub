import React from 'react';

const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center border-4'>
            <div className='w-[600px] border-4'>
                <form className='px-5 py-7 space-y-5'>
                    <input placeholder='Email' className='border-2 py-4 border-red w-full rounded-md' />
                    <input placeholder='Phone number' className='border-2 py-4 border-red w-full rounded-md' />
                    <input placeholder='Email' className='border-2 py-4 border-red w-full rounded-md' />
                    <input placeholder='Email' className='border-2 py-4 border-red w-full rounded-md' />

                    <div>
                        <input type='checkbox' className='w-5 h-5' />
                        <p className='inline-block pl-5 text-xl'> Accept all condition</p>
                    </div>
                </form>
            </div>




        </div>
    );
};

export default Register;