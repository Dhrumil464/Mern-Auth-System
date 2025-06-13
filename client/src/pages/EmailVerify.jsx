import React, { useContext, useEffect, useRef } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmailVerify = () => {

  const { URL, isLoggedin, userData, getUserData } = useContext(AppContext);

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
      inputRefs.current[index - 1].focus();
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    })
    inputRefs.current[Math.min(pasteArray.length, 5)].focus();
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const otpArray = inputRefs.current.map(e => e.value)
      const otp = otpArray.join('');

      const { data } = await axios.post(`${URL}/api/auth/verify-account`, { otp });

      if (data.success) {
        toast.success(data.message)
        getUserData()
        navigate('/')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    isLoggedin && userData && userData.isAccountVerified && navigate('/')
  }, [isLoggedin, userData])


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-b from-gray-200 to-gray-400 relative">
        <div className='flex items-center gap-4 absolute left-4 sm:ml-20 top-6 cursor-pointer'>
          <img src={assets.auth_img} alt="" className='w-8 sm:w-10' onClick={() => navigate('/')} />
          <h3 className='text-xl text-gray-800' onClick={() => navigate('/')}>Auth System</h3>
        </div>
        <form onSubmit={handleSubmit} className='bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8 w-full sm:w-96 text-sm max-w-md'>
          <h1 className=' text-2xl font-semibold text-center mb-4'>Email Verify OTP</h1>
          <p className='text-center mb-6 text-md text-gray-700 '>Enter 6-digit code from your email.</p>
          <div className='flex justify-center mb-8' onPaste={handlePaste}>
            {Array(6).fill(0).map((_, index) => (
              <input ref={(e) => inputRefs.current[index] = e} onInput={(e) => handleInput(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} type="text" maxLength='1' key={index} required className='w-11 h-11 border border-gray-300 mx-1 text-gray-900 text-center text-xl rounded-md focus:outline-none focus:border-blue-500' />
            ))}
          </div>
          <button className='bg-blue-500 text-white rounded-lg w-full px-4 py-2 hover:bg-blue-600 transition-colors'>Verify OTP</button>
        </form>
      </div>
    </div>
  )
}

export default EmailVerify
