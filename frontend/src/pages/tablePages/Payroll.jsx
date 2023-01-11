import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Header } from '../../components';
import { GrView } from 'react-icons/gr'
import { MdPersonRemoveAlt1 } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'

const Payroll = () => {    
  const [data, setData] = useState([])

  useEffect(() => {
   Axios.get('http://localhost:3001/payrolls')
   .then(res => {
     console.log(res)
     setData(res.data)
   })
   .catch(err => console.error(err));
  }, [data]) 

  const payrollDelete = ( id, e) => {
   e.preventDefault();
   Axios.delete(`http://localhost:3001/payrolls/${id}`)
     .then(res => console.log(('Deleted') , res))
     .catch(err => console.log(err))
     alert("payroll deleted");
  }

  const arr = data.map((data, index) => {
       return(
         <tr className="odd:bg-white even:bg-gray-100">
           <td className='p-3 text-sm text-gray-700 flex justify-around whitespace-nowrap'>{data.firstname} {data.lastname}</td>
           <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{data.paymentType}</td>
           <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{data.amount}</td>
           <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{data.employeeid}</td>
           <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{data.createdAt}</td>
           <td className='p-3 text-md text-gray-700 whitespace-nowrap'>
             <span className='p-1.5 text-md font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around'>
               <Link className='hover:underline' to={`/payroll/${data._id}`}><GrView /></Link>
               <RxDividerVertical />
               <button onClick={(e) => payrollDelete(data._id, e)} className='hover:underline'><MdPersonRemoveAlt1 /></button>
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
           <div className='text-gray-500'>{data.employeeid}</div>
         </div>

           <div className='p-2 text-sm text-gray-700'>Payment Amount: {data.amount}</div>
           <div>
             <Link className='font-bold text-lime-700 hover:underline'>
             {data.paymentType}
             </Link>
           </div>
           <div>
           <span className='p-2 text-md font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around'>
               <Link className='hover:underline' to={`/payroll/${data._id}`}><GrView /></Link>
               <RxDividerVertical />
               <button onClick={(e) => payrollDelete(data._id, e)} className='hover:underline'><MdPersonRemoveAlt1 /></button>
             </span> 
           </div>
         
     </div>
   )
  })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
    <div className='flex justify-between'>
      <Header category="Money" title="Payroll"/>
      <Link to="/new-payroll">
        <div><button className='border p-2 rounded-2xl bg-lime-700 text-white'>Add Payroll</button></div>
      </Link>
    </div>

    <div className='overflow-auto rounded-lg shadow hidden md:block'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Payment Type</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Employee ID</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Created</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-center'>Actions</th>
          </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {arr}
          </tbody>
        </table>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
        {smallArr}
      </div>


    </div>
  )
}

export default Payroll