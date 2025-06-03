import axios from 'axios';
import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const AppContext = createContext();

export const AppContextProvider = (props) => { //props object
  const [user, setUser] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credits, setCredits] = useState(' ');
  
  const backendUrl = import.meta.env.BACKEND_URL || 'https://imagyn.onrender.com'

  async function fetchCredits () {
    console.log(typeof(token), 1)
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
  // fetchCredits()
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
    fetchCredits
  }
  return (  
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}