import React from 'react'
import { Header } from '../components';
import { Link } from 'react-router-dom'
import { BsThreeDots } from 'react-icons/bs'
import { GrView } from 'react-icons/gr'
import { RxDividerVertical } from 'react-icons/rx'
import { TiTickOutline } from 'react-icons/ti'


const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
     <div className='flex justify-between'>
        <Header category="Planning" title="Tasks"/>
        <Link to="/new-tenant">
          <div><button className='border p-2 rounded-2xl bg-lime-700 text-white'>Add Task</button></div>
        </Link>
    </div>
    <div className='flex-1 overflow-x-auto hidden md:block'>

        <div className='inline-flex h-full items-start px-4 pb-4 space-x-4'>
          <div className='w-72 bg-gray-100 max-h-full flex flex-col rounded-md'>
            <div className='flex items-center justify-between px-3 py-2'>
              <h3 className='text-md font-semibold text-gray-700'>In Progress</h3>
              <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'><BsThreeDots /></button>
            </div>
            <div className='px-3 pb-3 overflow-y-auto'>
              <ul className='space-y-3'>
                {/* In Progress Tasks*/}
                <li className='group relative bg-white p-3 shadow rounded-md border-b border-gray-200 hover:bg-gray-50'>
                <div className='text-md'>
                  <div className='inline-flex space-x-2'>
                    <h2 className='p-2'>title</h2>
                    <button className='bg-red-400 p-1 grid place-items-center rounded-md text-white'>
                      High Priority
                    </button>
                  </div>
                  <div className='p-3'>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut, ex quisquam dignissimos fugit eius, cum totam sed eum fugiat consectetur!</p>
                 </div>
                 <button className='hidden absolute top-1 right-1 w-98 h-8 bg-gray-50 group-hover:grid place-items-center rounded-md text-gray-600 hover:text-black hover:bg-gray-200 px-1'>
                    <GrView />
                    <Link className='hover:underline'><TiTickOutline className='text-lg'/></Link>
                 </button>
                 <div className='flex items-center justify-between py-2'>
                  <h5 className='text-md font-semibold text-gray-700'>Assigned to</h5>
                  <Link className='font-bold text-lime-700 hover:underline'>
                      Evan mulcare
                    </Link>
                </div>
                 </div>
                </li>
              
                
              </ul>
            
            </div>
          </div>



          <div className='w-72 bg-gray-100 max-h-full flex flex-col rounded-md'>
            <div className='flex items-center justify-between px-3 py-2'>
              <h3 className='text-md font-semibold text-gray-700'>Review</h3>
              <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'><BsThreeDots /></button>
            </div>
            <div className='px-3 pb-3 overflow-y-auto'>
              <ul className='space-y-3'>
                  {/* Review Tasks*/}
              </ul>
            
            </div>
          </div>


          <div className='w-72 bg-gray-100 max-h-full flex flex-col rounded-md'>
            <div className='flex items-center justify-between px-3 py-2'>
              <h3 className='text-md font-semibold text-gray-700'>Completed</h3>
              <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'><BsThreeDots /></button>
            </div>
            <div className='px-3 pb-3 overflow-y-auto'>
              <ul className='space-y-3'>
                 {/* Completed Tasks*/}
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
          <div className='bg-white space-y-4 p-4 rounded-lg shadow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='font-bold text-md'>title</div>
                  <div className='text-gray-500'>  
                  <button className='bg-red-400 p-1 grid place-items-center rounded-md text-white'>
                      High Priority
                    </button>
                  </div>
                </div>

                  <div className='p-2 text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam inventore voluptatum hic cupiditate a molestiae esse, iste quo. Ratione sit odio veritatis iure corporis sunt dolorum amet aliquam labore.</div>
                  <div className='flex justify-between'>
                    <h3>Assigned to</h3>
                    <Link className='font-bold text-lime-700 hover:underline'>
                      Evan mulcare
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

export default Kanban