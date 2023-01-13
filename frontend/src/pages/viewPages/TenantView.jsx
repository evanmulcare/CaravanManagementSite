import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import {BsPersonCircle} from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrView } from 'react-icons/gr'
import { BiExit } from 'react-icons/bi'

const TenantView = () => {
  const [data, setData] = useState([]);
  const [payData, setPayData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`http://localhost:3001/tenants/${id}`)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
     }, [data]) 


  useEffect(() => {
    Axios.get('http://localhost:3001/payments')
    .then(res => {
      console.log(res)
      setPayData(res.data)
    })
    .catch(err => console.error(err));
   }, [payData]) 

  const paymentDelete = ( id, e) => {
    e.preventDefault();
    Axios.delete(`http://localhost:3001/payments/${id}`)
      .then(res => console.log(('Deleted') , res))
      .catch(err => console.log(err))
      alert("payment deleted");
   }

  const arr = payData.map((payData, index) => {
    if (payData.caravanid === data.caravanid  ) {
        return (
            <tr className="odd:bg-white even:bg-gray-100">
              <td className='p-3 text-sm text-gray-700 flex justify-around whitespace-nowrap'>{payData.firstname} {payData.lastname}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{payData.paymentType}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{payData.amount}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{payData.caravanid}</td>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{payData.createdAt}</td>
              <td className='p-3 text-md text-gray-700 whitespace-nowrap'>
                <span className='p-1.5 text-md font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around hover:bg-yellow-200'>
                  <Link className='hover:underline' to={`/payments/${payData._id}`}><GrView /></Link>
                  <RxDividerVertical />
                  <button onClick={(e) => paymentDelete(payData._id, e)} className='hover:underline'><BsFillTrashFill /></button>
                </span> 
              </td>
            </tr>
          );
      } 
    });
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
    <div>
    <div className='border text-center rounded-xl py-12 px-8'>
      <div className='text-left'>
          <div className='flex justify-start'>
            <BsPersonCircle className='text-8xl text-gray-500'/>
            <h3 className='font-semibold text-2xl text-gray-600 p-5'>{data.firstname} {data.lastname}</h3>
            <h5 className='font-semibold text-lime-600 p-5'>Tenant</h5>
            <Link to='/tenants'><BiExit className='text-4xl mt-5 mb-5 cursor-pointer text-gray-600 hover:text-gray-200'/></Link>
          </div>

      <div className='p-5'> 
      <h3 className='font-bold text-gray-400 text-lg'>Contact Information</h3>
      <hr/>
        <div className='text-gray-700 py-4'>
          <h4>Email: {data.email}</h4>
          <h4>Address: {data.address}</h4>
          <h4>Caravan ID: {data.caravanid}</h4>
        </div>
      </div>
      <div className='p-5'> 
      <h3 className='font-bold text-gray-400 text-lg'>Payments</h3>
      <hr/>
        <div className='text-gray-700 py-4'>
          <div className='overflow-auto rounded-lg shadow hidden md:block'>
          <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Payment Type</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>CID</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Created</th>
            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-center'>Actions</th>
          </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {arr}
          </tbody>
          </table>
          </div>
        </div>
      </div>

  </div>
</div>
</div>
</div>
  )
}

export default TenantView