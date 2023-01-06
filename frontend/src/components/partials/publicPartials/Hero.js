import React from 'react'
import { Link } from 'react-router-dom'
import heroVid from '../assets/drone.mp4'

const Hero = () => {
  return (

      <div className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
            <video className='absolute object-cover z-10 w-full h-full opacity-70' src={heroVid} autoPlay loop muted absolute />
              <div className= 'w-full h-[90%] z-30 flex flex-col justify-center items-center p-5 text-2xl text-white text-center px-4'>
                <div className='backdrop-blur-sm rounded-full'>
                <h1 className='text-white text-4xl py-2 font-bold drop-shadow-xl'>DOON BAY</h1>
                <br />
                  <p className='text-center text-white font-bold drop-shadow-xl'>Open Season 2023 : MAY 19 - OCT 23</p>
                  <br />
                  <Link to="/login">
                        <button className='text-xl font-bold cursor pointer drop-shadow-lg'>CONTACT</button>
                  </Link>
               
                  <br />
                  <h1 className='text-white text-4xl py-2 font-bold drop-shadow-xl'>Caravan Park</h1>        
              </div>
              </div> 
        
      </div>
  )
}

export default Hero