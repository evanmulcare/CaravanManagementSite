import React, { useState } from 'react'
import { BiExit } from 'react-icons/bi'
import axios from 'axios';
import { Link } from 'react-router-dom'
 

function NewBlog() {
        const [input, setInput] = useState({
            title: '',
            body: '',
            tags: '',
            author: '',
           
        })

    
    const clearState = () => {
        setInput({   
            title: '',
            body: '',
            tags: '',
            author: '',
          });
        };
    
    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
       const NewBlog = {
            title: input.title,
            body: input.body,
            tags: input.tags,
            author: input.author
        } 

        axios.post('http://localhost:3001/blogs', NewBlog)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          clearState();
          alert("Blog submitted successfully");
    }

  
return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen place-items-center'>
        <Link to='/blog'><BiExit className='text-2xl mt-5 mb-5 cursor-pointer'/></Link>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Add a new Blog!</h1>
        <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Title
            </label>
            <input onChange={handleChange} name="title" value={input.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title" type="text" placeholder="title" required/>
            </div>
            <div className="w-full  px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Blog Content
            </label>
            <textarea  onChange={handleChange} name="body" value={input.body} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="4" cols="50" type="text" placeholder="content" required/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Tags
            </label>
            <input  onChange={handleChange} name="tags" value={input.tags} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tags" type="text" placeholder="tag" required/>
            <p className="text-gray-600 text-xs italic">i.e 'rules'</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Author
            </label>
            <input onChange={handleChange} name="author" value={input.author} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-author" type="text" placeholder="Dahl" required/>
            <p className="text-gray-600 text-xs italic">credit to!</p>
            </div>
        </div>
            <div className='flex items-center justify-center mt-4 mb-4'>
                <button onClick={handleClick} className="bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add Blog
                </button>
            </div>
        </form>
    </div>
}


export default NewBlog