import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex justify-between items-center bg-gray-800 p-4 text-white sm:p-6 sm:px-24 top-0 absolute'>
      <div className='flex items-center gap-4'>
        <img src={assets.auth_img} alt="" className='w-8 sm:w-10' />
        <h3 className='text-xl'>Auth System</h3>
      </div>
      <button onClick={() => navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-xl px-6 py-2 text-white hover:bg-gray-500'>Login <img src={assets.arrow_icon} alt="" className='' /></button>
    </div>
  )
}

export default Navbar
