"use client";
import React from 'react'
import { cookies } from 'next/headers'

const LogoutButton = () => {
    const handleLogout = () => {
        cookies().delete("Authorization");
     
      }
  return (
    <button onClick={handleLogout}>LogOut</button>
  )
}

export default LogoutButton
