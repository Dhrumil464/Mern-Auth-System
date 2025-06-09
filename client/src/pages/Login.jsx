import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Login = () => {

    const [state, setState] = useState('Sign Up');

    return (
        <div className='flex justify-center items-center min-h-screen px-6 sm:px-0 bg-gradient-to-b from-gray-200 to-gray-400 relative'>
            <div className='flex items-center gap-4 absolute left-5 sm:left-20 top-5 cursor-pointer'>
                <img src={assets.auth_img} alt="" className='w-8 sm:w-10' />
                <h3 className='text-xl'>Auth System</h3>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 w-full sm:w-96 max-w-md'>
                <h2 className='text-3xl font-semibold text-center mb-3'>{state === 'Sign Up' ? 'Sign Up' : 'Login'}</h2>
                <p className='text-md text-center text-gray-700'>{state === 'Sign Up' ? 'Create your account' : 'Login your account!'}</p>

                <form className='flex flex-col gap-4 mt-4'>
                    {state === 'Sign Up' && (
                        <input type="text" placeholder='Full Name' required className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500' />
                    )}
                    <input type="email" placeholder='Email' required className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500' />
                    <input type="password" placeholder='Password' required className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500' />
                    {state === 'Sign Up' && (
                        <input type="password" placeholder='Confirm Password' required className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500' />
                    )}
                    <p className='mb-4 text-blue-700 cursor-pointer'>Forgot Password</p>
                    <button type='submit' className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors'>{state === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
                </form>
                <button type='button' onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')} className='text-blue-900 text-sm mt-2'>
                    {state === 'Sign Up' ? 'Already have an account? ' : "Don't have an account? "}
                    <span className='hover:underline text-blue-800'>
                        {state === 'Sign Up' ? ' Login' : ' Sign Up'}
                    </span>
                </button>
                <div className='flex items-center justify-center mt-4'>
                    <p className='text-gray-600'>Or continue with</p>
                    <div className='flex items-center gap-2 ml-2'>
                        <img src={assets.google_icon} alt="Google" className='w-6 h-6 cursor-pointer' />
                        <img src={assets.github_icon} alt="GitHub" className='w-10 h-10 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
