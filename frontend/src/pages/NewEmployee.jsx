import React, { useState } from 'react'
import { BiExit } from 'react-icons/bi'
import axios from 'axios';
 

function NewEmployee() {
        const [input, setInput] = useState({
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            employeeid: ''
        })
    
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
       const NewEmployee = {
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            address: input.address,
            employeeid: input.employeeid
        } 

        axios.post('http://localhost:3001/employees', NewEmployee)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  
return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen place-items-center'>
        <BiExit className='text-2xl mt-5 mb-5'/>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Add a new Employee!</h1>
        <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
            </label>
            <input onChange={handleChange} name="firstname" value={input.firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Last Name
            </label>
            <input  onChange={handleChange} name="lastname" value={input.lastname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Address
            </label>
            <input  onChange={handleChange} name="email" value={input.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="tenant@tenantemail.com" required/>
            <p className="text-gray-600 text-xs italic">boobies!</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Address line 1
            </label>
            <input onChange={handleChange} name="address" value={input.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="123, Doon rd" required/>
            <p className="text-gray-600 text-xs italic">boobies!</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Town
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Ballybunion" required/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                County
            </label>
            <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                <option>Kerry</option>
                <option>Cork</option>
                <option>Limerick</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Eircode
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="V31 K292" required/>
            </div>
        </div>

         <div class="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Employee ID
            </label>
            <input onChange={handleChange} name="employeeid" value={input.employeeid} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-employeeid" type="text" placeholder="E01" required/>
         </div>
            <div className='flex items-center justify-center mt-4 mb-4'>
                <button onClick={handleClick} className="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add Employee
                </button>
            </div>
        </form>
    </div>
}


export default NewEmployee