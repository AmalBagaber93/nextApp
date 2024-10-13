
'use client'

import React from 'react'
import LoginForm from '../../../components/login-form'
import { useEffect } from 'react';
import Cookies from "js-cookie";

const Login = () => {
  useEffect(() => {
    if (Cookies.get('authToken')) {
  
      console.log('Auth token is set');
    } else {
  
      console.log('No auth token ');
  
    }
  }, []);
  return (
    <div > 

 <LoginForm/> 
  </div>
  )
}

export default Login
 