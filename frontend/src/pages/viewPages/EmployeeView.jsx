import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const EmployeeView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`http://localhost:3001/employees/${id}`)
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
        <h3 className='font-bold text-gray-400 text-lg'>Employee Information</h3>
        <div>
          <h4 >Name: {data.firstname} {data.lastname}</h4>
          <h4>Email: {data.email}</h4>
          <h4>Address: {data.address}</h4>
        </div>
      </div>
        </div>
        <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'>Payments</h3>
        </div>
    </div>
  )
}

export default EmployeeView