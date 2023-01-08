import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Header } from '../components';
import { GrView } from 'react-icons/gr'
import { MdPersonRemoveAlt1 } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'

const Employees = () => {   
  const [data, setData] = useState([])

   useEffect(() => {
    Axios.get('http://localhost:3001/employees')
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err => console.error(err));
   }, []) 

   const arr = data.map((data, index) => {
        return(
          <tr className="odd:bg-white even:bg-gray-100">
            <td className='p-3 text-sm text-gray-700 flex justify-around whitespace-nowrap'>{data.firstname} {data.lastname}</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{data.email}</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{data.address}</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <Link className='font-bold text-lime-700 hover:underline'>
                Payroll
              </Link>
            </td>
            <td className='p-3 text-md text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-md font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around'>
                <Link className='hover:underline'><GrView /></Link>
                <RxDividerVertical />
                <Link className='hover:underline'><MdPersonRemoveAlt1 /></Link>
              </span> 
            </td>
          </tr>
        )
   })

   const smallArr = data.map((data, index) => {
    return(
      <div className='bg-white space-y-4 p-4 rounded-lg shadow'>
          <div className='flex items-center space-x-2 text-sm'>
            <div className='font-bold text-md'>{data.firstname} {data.lastname}</div>
            <div className='text-gray-500'>{data.email}</div>
          </div>

            <div className='p-2 text-sm text-gray-700'>{data.address}</div>
            <div>
              <Link className='font-bold text-lime-700 hover:underline'>
                Payroll
              </Link>
            </div>
            <div>
            <span className='p-2 text-md font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around'>
                <Link className='hover:underline'><GrView /></Link>
                <RxDividerVertical />
                <Link className='hover:underline'><MdPersonRemoveAlt1 /></Link>
              </span> 
            </div>
          
      </div>
    )
   })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <div className='flex justify-between'>
        <Header category="People" title="Employees"/>
        <Link to="/new-employee">
          <div><button className='border p-2 rounded-2xl bg-lime-700 text-white'>Add Employee</button></div>
        </Link>
      </div>
      <div className='overflow-auto rounded-lg shadow hidden md:block'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Address</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Payroll</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-center'>Actions</th>
          </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {arr}
          </tbody>
        </table>
      </div>

       {/*Collapse on smaller screens */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
        {smallArr}
      </div>

     </div>
  )
}

export default Employees