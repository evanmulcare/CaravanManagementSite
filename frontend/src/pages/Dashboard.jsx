import React from 'react';

import { BiTask } from 'react-icons/bi';
import { FaMoneyBill } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Dashboard = () => {

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
        <div className='flex justify-between items-center'>
        <div className='text-yellow-800 text-6xl'><BiTask /></div>
                <div>
                <h3 className='font-bold text-gray-400 text-2xl'>Requests</h3>
                  <p className='text-lime-700 text-xl'>3</p>
                </div>
            </div>
        </div>
        <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 '>
        <div className='flex justify-between items-center'>
        <div className='text-lime-800 text-6xl'><FaMoneyBill /></div>
                <div>
                  <h3 className='font-bold text-gray-400 text-2xl'>Balance</h3>
                  <p className='text-lime-700 text-xl'>+20,0000</p>
                </div>
            </div>
        </div>
        <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
            <div className='flex justify-between items-center'>
            <div className='text-yellow-300 text-6xl'><AiFillStar /></div>
            <div className='flex justify-between items-center'>
                <div>
                  <h3 className='font-bold text-gray-400 text-2xl'>Rating</h3>
                  <p className='text-lime-700 text-xl'>3.5 / 5</p>
                </div>
            </div>
            </div>
        </div>

        </div>
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen gap-4'>
            <div className='border text-center rounded-xl py-12 px-8'>
                <h3 className='font-bold text-gray-400 text-lg'>Money Overview</h3>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='border text-center rounded-xl py-12 px-8'>
                  <h3 className='font-bold text-gray-400 text-lg'>Upcoming events</h3>
              </div>
              <div className='border text-center rounded-xl py-12 px-8'>
                  <h3 className='font-bold text-gray-400 text-lg'>3 Task Awaiting review</h3>
              </div>
            </div>
            </div>
        </div>

  )
}

export default Dashboard