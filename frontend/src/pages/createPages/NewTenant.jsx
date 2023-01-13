import React, { useState,useRef } from 'react'
import { BiExit } from 'react-icons/bi'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { MdDangerous } from 'react-icons/md';
 
function NewTenant() {
        const [input, setInput] = useState({
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            caravanid: ''
        })

        const clearState = () => {
            setInput({   
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            caravanid: ''});
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

            const newTenant = {
                firstname: input.firstname,
                lastname: input.lastname,
                email: input.email,
                address: input.address,
                caravanid: input.caravanid
            } 
    
            axios.post('http://localhost:3001/tenants', newTenant)
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              clearState();
              alert("Form submitted successfully");
        }

  
return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen place-items-center'>
        <Link to='/tenants'><BiExit className='text-2xl mt-5 mb-5 cursor-pointer'/></Link>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Add a new Tenant!</h1>
        <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
            </label>
            <input onChange={handleChange} name="firstname" value={input.firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="Jane" required/>
             
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Last Name
            </label>
            <input  onChange={handleChange} name="lastname" value={input.lastname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe" required/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Address
            </label>
            <input  onChange={handleChange} name="email" value={input.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="tenant@tenantemail.com" required/>
            <p className="text-gray-600 text-xs italic">Primary Address Only!</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Address line 1
            </label>
            <input onChange={handleChange} name="address" value={input.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="123, Doon rd" required/>
            </div>
        </div>

         <div class="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Caravan ID
            </label>
            <input onChange={handleChange} name="caravanid" value={input.caravanid} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="C02" required/>
         </div>
            <div className='flex items-center justify-center mt-4 mb-4'>
                <button onClick={handleClick} className="bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add Tenant
                </button>
            </div>
        </form>
    </div>
}


export default NewTenant