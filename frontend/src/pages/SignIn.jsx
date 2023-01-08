import React from 'react'
import { Header } from '../components';
import AuthenticationButton from '../components/auth/AuthenticationButton';

const SignIn = () => {
  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
      <Header category="Members" title="Sign-in"/>
      <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'><AuthenticationButton /></h3>
      </div>
    </div>
  )
}

export default SignIn