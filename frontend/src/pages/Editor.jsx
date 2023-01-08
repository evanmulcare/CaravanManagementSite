import React from 'react'
import { Header } from '../components';
import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
        <div className='flex justify-between'>
        <Header category="Planning" title="Blog"/>
        <Link to="/new-employee">
          <div><button className='border p-2 rounded-2xl bg-lime-700 text-white'>New Post</button></div>
        </Link>
      </div>
       <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'>Past Posts</h3>
        </div>
    </div>
  )
}

export default Editor