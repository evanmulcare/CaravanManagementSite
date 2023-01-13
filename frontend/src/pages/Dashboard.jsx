import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { BiTask } from 'react-icons/bi';
import { FaMoneyBill } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BumpChart } from '../components';
import { GrView } from 'react-icons/gr'
import { BsFillTrashFill } from 'react-icons/bs'
import { events } from '../data/events';

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
   Axios.get('http://localhost:3001/tasks')
   .then(res => {
     console.log(res)
     setData(res.data)
   })
   .catch(err => console.error(err));
  }, [data]) 
  const taskDelete = ( id, e) => {
    e.preventDefault();
    Axios.delete(`http://localhost:3001/tasks/${id}`)
      .then(res => console.log(('Deleted') , res))
      .catch(err => console.log(err))
      alert("task deleted");
   }
   const arr = data.map((data, index) => {
    return( 
      <li className='group relative bg-white p-3 shadow rounded-md border-b border-gray-200 hover:bg-gray-50'>
            <div className='text-md'>
              <div className='inline-flex space-x-2'>
                <h2 className='p-2'>{data.title}</h2>
                <button className='bg-red-400 p-1 grid place-items-center rounded-md text-white'>
                  {data.priority}
                </button>
              </div>
              <div className='p-3'>
              <p>{data.body}</p>
             </div>
             <button className='hidden absolute top-1 right-1 w-98 h-8 bg-gray-50 group-hover:grid place-items-center rounded-md text-gray-600 hover:text-black hover:bg-gray-200 px-1'>
                <Link className='hover:underline' to={`/task/${data._id}`}><GrView /></Link>
                <button onClick={(e) => taskDelete(data._id, e)} className='hover:underline'><BsFillTrashFill /></button>
             </button>
             <div className='flex items-center justify-between py-2'>
              <h5 className='text-md font-semibold text-gray-700'>Assigned to</h5>
              <Link className='font-bold text-lime-700 hover:underline'>
                 {data.assigned}
                </Link>
            </div>
             </div>
      </li>
    )
})

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
        <div className='flex justify-between items-center'>
        <div className='text-yellow-800 text-6xl'><BiTask /></div>
                <div>
                <h3 className='font-bold text-gray-400 text-2xl'>Tasks</h3>
                  <p className='text-lime-700 text-xl'>5</p>
                </div>
            </div>
        </div>
        <div className='bg-white h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 '>
        <div className='flex justify-between items-center'>
        <div className='text-lime-800 text-6xl'><FaMoneyBill /></div>
                <div>
                  <h3 className='font-bold text-gray-400 text-2xl'>Balance</h3>
                  <p className='text-lime-700 text-xl'>+20,0000</p>
                </div>
            </div>
        </div>
        <div className='bg-white h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
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
                <div><BumpChart /></div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='border text-center rounded-xl py-12 px-8'>
                  <h3 className='font-bold text-gray-400 text-lg'>Upcoming events</h3>
                  {events.map((item) => ( 
                    <Link to='/calendar'>
                    <div className='bg-lime-600 rounded-3xl hover:bg-lime-400'>
                    <p className='text-white m-3 mt-4 uppercase'>
                    {item.title}
                    </p>
                    </div>
                    </Link>
                  ))}
              </div>
              <div className='border text-center rounded-xl py-12 px-8'>
                  <h3 className='font-bold text-gray-400 text-lg'><span>{arr.length}</span> Task In Progress</h3>
                  <br />
                  <ul className='space-y-5'>{arr}</ul>
              </div>
            </div>
            </div>
        </div>

  )
}

export default Dashboard