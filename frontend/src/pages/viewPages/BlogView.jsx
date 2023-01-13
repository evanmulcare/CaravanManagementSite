import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { BiExit } from 'react-icons/bi'

const BlogView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`http://localhost:3001/blogs/${id}`)
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
        <Link to='/blog'><BiExit className='text-4xl mt-5 mb-5 cursor-pointer text-gray-600 hover:text-gray-200'/></Link>
        <h3 className='font-bold text-gray-400 text-lg'>{data.title}</h3>
        <div>
          <h4 className='p-5'>text: {data.body}</h4>
        </div>
        <div>
        <h4 className='font-bold text-gray-400 text-sm text-left py-5' >Writen By: {data.author}</h4>
        </div>
      </div>
        </div>
    </div>
  )
}

export default BlogView