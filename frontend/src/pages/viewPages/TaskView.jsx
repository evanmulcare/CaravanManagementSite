import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import {FaTasks} from 'react-icons/fa'
import { BiExit } from 'react-icons/bi'

const TaskView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`http://localhost:3001/tasks/${id}`)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
     }, [data]) 
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
    <div>
    <div className='border text-center rounded-xl py-12 px-8'>
      <div className='text-left'>
          <div className='flex justify-start'>
            <FaTasks className='text-8xl text-gray-500'/>
            <h3 className='font-semibold text-2xl text-gray-600 p-5'>{data.title}</h3>
            <h5 className='font-semibold text-lime-600 p-5'>{data.priority}</h5>
            <Link to='/tasks'><BiExit className='text-4xl mt-5 mb-5 cursor-pointer text-gray-600 hover:text-gray-200'/></Link>
          </div>
          
      <div className='p-5'> 
      <h3 className='font-bold text-gray-400 text-lg'>Task Information</h3>
      <hr/>
        <div className='text-gray-700 py-4'>
          <h4>Assigned To: {data.assigned}</h4>
          <p className='p-3 text-lg'>{data.body}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TaskView