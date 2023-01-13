import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { GrView } from 'react-icons/gr'
import { RxDividerVertical } from 'react-icons/rx'
import { FaRegEdit } from 'react-icons/fa'
import { BsFillTrashFill } from 'react-icons/bs'


const Blog = () => {

  const [data, setData] = useState([])

  useEffect(() => {
   Axios.get('http://localhost:3001/blogs')
   .then(res => {
     console.log(res)
     setData(res.data)
   })
   .catch(err => console.error(err));
  }, [data]) 

  const blogDelete = ( id, e) => {
    e.preventDefault();
    Axios.delete(`http://localhost:3001/blogs/${id}`)
      .then(res => console.log(('Deleted') , res))
      .catch(err => console.log(err))
      alert("blog deleted");
   }


  const smallArr = data.map((data, index) => {
    return(
      <div className='bg-white space-y-4 p-4 rounded-lg shadow'>
      <div className='flex items-center space-x-2 text-sm'>
        <div className='font-bold text-md'>{data.title}</div>
        <div className='text-gray-500'>  
        <button className='bg-gray-400 p-1 grid place-items-center rounded-md text-white'>
            {data.tags}
          </button>
        </div>
      </div>

        <div className='p-2 text-sm text-gray-700'>{data.body}</div>
        <div className='flex justify-between'>
          <h3>Author</h3>
          <Link className='font-bold text-lime-700 hover:underline'>
            {data.author}
          </Link>
        </div>
        <div>

        <span className='p-2 text-md font-medium tracking-wider text-black bg-yellow-200 rounded-lg bg-opacity-50 flex justify-around hover:bg-yellow-200'>
            <Link className='hover:underline' to={`/blog/${data._id}`}><GrView /></Link>
            <RxDividerVertical />
            <button onClick={(e) => blogDelete(data._id, e)} className='hover:underline'><BsFillTrashFill /></button>
          </span> 
        </div>
      
  </div>
      )
    })


  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
        <div className='flex justify-between'>
        <Header category="Planning" title="Blog"/>
        <Link to="/new-blog">
          <div><button className='border p-2 rounded-2xl bg-lime-700 text-white'>New Post</button></div>
        </Link>
      </div>
       <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'>Past Posts</h3>
          <div>
          {/* task cards in progress*/}
            {smallArr}
          </div>
        </div>
    </div>
  )
}

export default Blog