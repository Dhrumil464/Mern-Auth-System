import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { AppContextProvider } from './context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/email-verify" element={<EmailVerify />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  )
}

export default App
