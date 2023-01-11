import React from 'react'
import { Header } from '../../components';
import About from '../../components/partials/publicPartials/About';

const AboutPage = () => {
  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
       <Header category="Pages" title="About"/>
       <About />
    </div>
  )
}

export default AboutPage