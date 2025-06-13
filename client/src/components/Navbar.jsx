import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const { userData, URL, setUserData, setIsLoggedin } = useContext(AppContext)

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true

      const { data } = await axios.post(`${URL}/api/auth/send-Verify-otp`)

      if (data.success) {
        navigate('/email-verify')
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post(`${URL}/api/auth/logout`)
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full flex justify-between items-center p-4 text-white sm:p-6 sm:px-24 top-0 absolute'>
      <div className='flex items-center gap-4 cursor-pointer'>
        <img src={assets.auth_img} onClick={() => navigate('/')} alt="" className='w-8 sm:w-10' />
        <h3 className='text-xl text-gray-800' onClick={() => navigate('/')}>Auth System</h3>
      </div>
      {userData ?
        <div className='w-11 h-11 flex justify-center items-center border border-gray-500 rounded-full cursor-pointer text-gray-900 hover:bg-gray-200 relative group'>
          {userData.name[0]}
          <div className='absolute hidden group-hover:block top-2 right-0 z-10 text-gray-900 rounded pt-10'>
            <ul className='list-none m-0 p-2 bg-white text-sm'>
              {!userData.isAccountVerified &&
                <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>
              }
              <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
            </ul>
          </div>
        </div>
        : <button onClick={() => navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-xl px-6 py-2 text-gray-900 hover:bg-gray-200'>Login <img src={assets.arrow_icon} alt="" className='' /></button>
      }
    </div>
  )
}

export default Navbar
