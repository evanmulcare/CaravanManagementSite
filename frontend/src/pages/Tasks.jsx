import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { Link } from 'react-router-dom'
import { BsThreeDots } from 'react-icons/bs'
import { GrView } from 'react-icons/gr'
import { BsFillTrashFill } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'
import { TiTickOutline } from 'react-icons/ti'
import Axios from 'axios';

const Tasks = () => {
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
    
    const smallArr = data.map((data, index) => {
      return(
        <div className='bg-white space-y-4 p-4 rounded-lg shadow'>
          <div className='flex items-center space-x-2 text-sm'>
            <div className='font-bold text-md'>{data.title}</div>
            <div className='text-gray-500'>  
            <button className='bg-red-400 p-1 grid place-items-center rounded-md text-white'>
                {data.priority}
              </button>
            </div>
          </div>

            <div className='p-2 text-sm text-gray-700'>{data.body}</div>
            <div className='flex justify-between'>
              <h3>Assigned to</h3>
              <Link className='font-bold text-lime-700 hover:underline'>
                {data.assigned}
              </Link>
            </div>
            <div>
            <span className='p-2 text-md font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around'>
                <Link className='hover:underline'><GrView /></Link>
                <RxDividerVertical />
                <Link className='hover:underline'>approve</Link>
              </span> 
            </div>
        
    </div>
        )
      })
      
     
    

           
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      
     <div className='flex justify-between'>
        <Header category="Planning" title="Tasks"/>
        <Link to="/new-task">
          <div><button className='border p-2 rounded-2xl bg-lime-700 text-white'>Add Task</button></div>
        </Link>
    </div>
    <div>
    </div>
    <div className='flex-1 overflow-x-auto hidden md:block'>

        <div className='inline-flex h-full items-start px-4 pb-4 space-x-4'>
          <div className='w-72 bg-gray-100 max-h-full flex flex-col rounded-md'>
            <div className='flex items-center justify-between px-3 py-2'>
              <h3 className='text-md font-semibold text-gray-700'>In Progress</h3>
              <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'>{arr.length}</button>
            </div>
            <div className='px-3 pb-3 overflow-y-auto'>
              <ul className='space-y-3'>
                {/* In Progress Tasks*/}
                {arr}
              </ul>
            
            </div>
          </div>



          <div className='w-72 bg-gray-100 max-h-full flex flex-col rounded-md'>
            <div className='flex items-center justify-between px-3 py-2'>
              <h3 className='text-md font-semibold text-gray-700'>Review</h3>
              <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'>1</button>
            </div>
            <div className='px-3 pb-3 overflow-y-auto'>
              <ul className='space-y-3'>
                  {/* Review Tasks*/}
                        <li className='group relative bg-white p-3 shadow rounded-md border-b border-gray-200 hover:bg-gray-50'>
                          <div className='text-md'>
                            <div className='inline-flex space-x-2'>
                              <h2 className='p-2'>Send Invoice</h2>
                              <button className='bg-yellow-400 p-1 grid place-items-center rounded-md text-white'>
                                Mid
                              </button>
                            </div>
                            <div className='p-3'>
                            <p>Send invoice of opayment to elanine</p>
                          </div>
                          <button className='hidden absolute top-1 right-1 w-98 h-8 bg-gray-50 group-hover:grid place-items-center rounded-md text-gray-600 hover:text-black hover:bg-gray-200 px-1'>
                              <Link className='hover:underline' to={`/task/${data._id}`}><GrView /></Link>
                              <Link className='hover:underline'><BsFillTrashFill className='text-lg'/></Link>
                          </button>
                          <div className='flex items-center justify-between py-2'>
                            <h5 className='text-md font-semibold text-gray-700'>Assigned to</h5>
                            <Link className='font-bold text-lime-700 hover:underline'>
                              Austin Stack
                              </Link>
                          </div>
                          </div>
                        </li>
              </ul>
            
            </div>
          </div>


          <div className='w-72 bg-gray-100 max-h-full flex flex-col rounded-md'>
            <div className='flex items-center justify-between px-3 py-2'>
              <h3 className='text-md font-semibold text-gray-700'>Completed</h3>
              <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'>2</button>
            </div>
            <div className='px-3 pb-3 overflow-y-auto'>
              <ul className='space-y-3'>
                 {/* Completed Tasks*/}

                 <li className='group relative bg-white p-3 shadow rounded-md border-b border-gray-200 hover:bg-gray-50'>
                          <div className='text-md'>
                            <div className='inline-flex space-x-2'>
                              <h2 className='p-2'>Complete landscaping</h2>
                              <button className='bg-green-400 p-1 grid place-items-center rounded-md text-white'>
                                Low
                              </button>
                            </div>
                            <div className='p-3'>
                            <p>Complete landscaping on bottom park</p>
                          </div>
                          <button className='hidden absolute top-1 right-1 w-98 h-8 bg-gray-50 group-hover:grid place-items-center rounded-md text-gray-600 hover:text-black hover:bg-gray-200 px-1'>
                              <GrView />
                              <Link className='hover:underline'><BsFillTrashFill className='text-lg'/></Link>
                          </button>
                          <div className='flex items-center justify-between py-2'>
                            <h5 className='text-md font-semibold text-gray-700'>Assigned to</h5>
                            <Link className='font-bold text-lime-700 hover:underline'>
                              Peter Conner
                              </Link>
                          </div>
                          </div>
                        </li>
              </ul>
            
            </div>
          </div>
        </div>
        
    </div>

      {/*Collapse on smaller screens */}
      <div className='grid grid-cols-1 gap-4 md:hidden'>
        <div className='bg-gray-100 max-h-full rounded-md'>
          <div className='flex items-center justify-between px-3 py-2'>
            <h3 className='text-md font-semibold text-gray-700'>In Progress</h3>
            <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'><BsThreeDots /></button>
          </div>
          {/* task cards in progress*/}
            {arr}
          
        </div>

        <div className='bg-gray-100 max-h-full rounded-md'>
          <div className='flex items-center justify-between px-3 py-2'>
            <h3 className='text-md font-semibold text-gray-700'>Review</h3>
            <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'><BsThreeDots /></button>
          </div>
          {/* task cards review*/}
        </div>

        <div className='bg-gray-100 max-h-full rounded-md'>
          <div className='flex items-center justify-between px-3 py-2'>
            <h3 className='text-md font-semibold text-gray-700'>Completed</h3>
            <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'><BsThreeDots /></button>
          </div>
          {/* task cards completed*/}
        </div>
      </div>

    </div>
  )
}

export default Tasks