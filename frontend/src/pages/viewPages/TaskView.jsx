import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

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
        <h3 className='font-bold text-gray-400 text-lg'>Task Information</h3>
        <div>
          <h4 >Title: {data.title} </h4>
          <h4>Task Content: {data.body}</h4>
          <h4>Assigned to: {data.assigned}</h4>
          <h4>Priority level: {data.priority}</h4>
        </div>
      </div>
        </div>
        <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'>Payments</h3>
        </div>
    </div>
  )
}

export default TaskView