import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    axios.defaults.withCredentials = true

    const URL = 'http://localhost:8000';
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);

    const getAuthState = async () => {
        try {
            const { data } = await axios.get(`${URL}/api/auth/is-auth`);
            if(data.success){
                setIsLoggedin(true)
                getUserData()
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${URL}/api/user/data`);
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getAuthState();
    }, [])
    

    const value = {
        URL,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData
    }

    return (
        <div>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </div>
    )
}