import { createContext, useState } from "react";
import axios from 'axios'

const Context = createContext();
const ContextProvider = ({children}) => {
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [confirmLogin, setConfirmLogin] = useState(null);
    const [confirmSignup, setConfirmSignup] = useState(null);
    const [email, setEmail] = useState(null);

    const register = async ({email, password}) => {
        try {
           const response = await axios.post('http://localhost:8000/signup', {email, password});
           setError('');
           setConfirmSignup(`An account successfuly created with ${email}`);
           return response.data.message;
        } catch (error) {
            if (error.response){
                setError(error.response.data.detail);
                throw new Error(error.response.data.detail);
            }else{
                setError('An unexpected error occurred');
                throw new Error('An unexpected error occurred');
            }
        }
    }

    const login = async ({email, password}) => {
        try {
           const response = await axios.post('http://localhost:8000/login', {email, password});
           setError('');
           setIsLoggedIn(true);
           setConfirmLogin(`Hello ${email}`)
           return response.data.message;
        } catch (error) {
            if (error.response){
                setError(error.response.data.detail);
                throw new Error(error.response.data.detail);
            }else{
                setError('An unexpected error occurred');
                throw new Error('An unexpected error occurred');
            }
        }
    }

    const contextValue = {error, isLoggedIn, confirmLogin, confirmSignup, register, login};
    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
}

export {Context, ContextProvider}