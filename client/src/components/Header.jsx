import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center text-gray-800'>
            <img src={assets.header_img} alt="" className='w-36 h-36 rounded-full mb-6' />
            <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>Hey Mern Developer </h1>
            <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our Mern Auth app</h2>
            <p className='mb-8 max-w-md'>This is a simple authentication system built with the MERN stack. You can register, login, and verify your email.</p>
            <button className='border border-gray-500 rounded-xl px-8 py-2.5 hover:bg-gray-200 transition-all'>Get Start</button>
        </div>
    )
}

export default Header
