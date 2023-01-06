import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-[90px]'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div className='text-indigo-600 text-5xl font-bold'><ion-icon name="logo-web-component"></ion-icon></div>
            <div>
                <ul className='flex text-white items-center'>
                    <Link to="/login">
                        <Button className='ml-4'>Members</Button>
                    </Link>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Nav