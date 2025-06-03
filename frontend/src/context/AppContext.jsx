import axios from 'axios';
import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const AppContext = createContext();

export const AppContextProvider = (props) => { //props object
  const [user, setUser] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credits, setCredits] = useState(' ');
  
  const backendUrl = import.meta.env.BACKEND_URL || 'http://localhost:3000'

  async function fetchCredits () {
    console.log(typeof(token))
    try {
      const res = await axios.post(`${backendUrl}/api/user/credits`, null, {headers: {token}});
      const {data} = res;
      if(data.status){
        setCredits(data.credits)
        setUser(data.user)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){
      fetchCredits()
    }
  }, [])


  const value = {
    user,
    setUser,
    showLoginDialog,
    setShowLoginDialog,
    token,
    setToken,
    credits,
    setCredits,
    backendUrl,
  }
  return (  
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}