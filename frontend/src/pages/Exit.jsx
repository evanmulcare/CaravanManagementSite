import React from 'react'
import { Header } from '../components';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from '../components/auth/AuthenticationButton';


const Exit = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
        <Header category="Members" title="Exit"/>
        <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'>User Information</h3>
          <div>
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
          </div>
        </div>
        <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'><AuthenticationButton /></h3>
        </div>
    </div>

  )
}

export default Exit