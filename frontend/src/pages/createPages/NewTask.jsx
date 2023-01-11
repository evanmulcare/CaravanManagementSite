import React, { useState } from 'react'
import { BiExit } from 'react-icons/bi'
import axios from 'axios';
import { Link } from 'react-router-dom';
 

function NewTask() {
        const [input, setInput] = useState({
            title: '',
            body: '',
            priority: '',
            assigned: ''
        })

        const clearState = () => {
            setInput({   
            title: '',
            body: '',
            priority: '',
            assigned: '',
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
       const NewTask = {
            title: input.title,
            body: input.body,
            priority: input.priority,
            assigned: input.assigned,
            employeeid: input.employeeid
        }  

        axios.post('http://localhost:3001/tasks', NewTask)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          clearState();
          alert("Task submitted successfully");
    }

  
return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen place-items-center'>
    <Link to='/tasks'><BiExit className='text-2xl mt-5 mb-5 cursor-pointer'/></Link>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Add a new Task!</h1>
        <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
               Title
            </label>
            <input onChange={handleChange} name="title" value={input.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title" type="text" placeholder="Title" required/>
            </div>
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
               Body
            </label>
            <input  onChange={handleChange} name="body" value={input.body} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-body" type="text" placeholder="Body" required/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Priority
            </label>
            <input  onChange={handleChange} name="priority" value={input.priority} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-priority" type="text" placeholder="High" required/>
            <p className="text-gray-600 text-xs italic">Level of urgency</p> 
          {/*}  <select name='priority' onChange={handleChange} value={input.priority}>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
            </select> */}
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Assigned
            </label>
            <input onChange={handleChange} name="assigned" value={input.assigned} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-assigned" type="text" placeholder="Assigned to" required/>
            <p className="text-gray-600 text-xs italic">Make it trustworthy</p>
            </div>
        </div>
            <div className='flex items-center justify-center mt-4 mb-4'>
                <button onClick={handleClick} className="bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add Task
                </button>
            </div>
        </form>
    </div>
}


export default NewTask