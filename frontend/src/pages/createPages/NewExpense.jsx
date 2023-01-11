import React, { useState } from 'react'
import { BiExit } from 'react-icons/bi'
import axios from 'axios';
import { Link } from 'react-router-dom';
 

function NewExpense() {
        const [input, setInput] = useState({
            type: '',
            vendor: '',
            paymentType: '',
            amount: '',

        })


        const clearState = () => {
            setInput({   
                type: '',
                vendor: '',
                paymentType: '',
                amount: '',

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
       const NewExpense = {
            type: input.type,
            vendor: input.vendor,
            paymentType: input.paymentType,
            amount: input.amount,
        } 

        axios.post('http://localhost:3001/expenses', NewExpense)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          clearState();
          alert("Expense submitted successfully");
    }

  
return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen place-items-center'>
        <Link to='/employees'><BiExit className='text-2xl mt-5 mb-5 cursor-pointer'/></Link>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Add a new Payroll Reciept!</h1>
        <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Type of Expense
            </label>
            <input onChange={handleChange} name="type" value={input.type} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"type="text" placeholder="equipment" required/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Vendor
            </label>
            <input  onChange={handleChange} name="vendor" value={input.vendor} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="vendor" required/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
               Payment Type
            </label>
            <input  onChange={handleChange} name="paymentType" value={input.paymentType} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Cash" required/>
            <p className="text-gray-600 text-xs italic">cash is king!</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Amount
            </label>
            <input onChange={handleChange} name="amount" value={input.amount} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="1000" required/>
            <p className="text-gray-600 text-xs italic">text!</p>
            </div>
        </div>

            <div className='flex items-center justify-center mt-4 mb-4'>
                <button onClick={handleClick} className="bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add Expense
                </button>
            </div>
        </form>
    </div>
}


export default NewExpense