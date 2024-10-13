import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <ul className='flex m-5 gap-10'>
        <link href='/'>
            <li>Home</li>
            </link>
            <link href='/login'>
            <li>Login</li>
            </link>
        </ul>
      
    </div>
  )
}

export default Header
