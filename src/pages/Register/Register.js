import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form action="" className="space-y-6">


                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md" />


                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <p>Use email address</p>
                    </div>


                    <button className="block w-full p-3 text-center rounded-sm">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">

                </div>
            </div>
        </div>
    );
};

export default Register;