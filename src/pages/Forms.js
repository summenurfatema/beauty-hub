import React from 'react';

const Forms = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-60'>


            <h1 className='text-3xl font-bold pb-5 uppercase'>Form</h1>
            <form>
                <input className='w-[400px] h-[50px] border-2 text-xl' type='text' placeholder='Enter your name' value='Value' />

            </form>


        </div>
    );
};

export default Forms;