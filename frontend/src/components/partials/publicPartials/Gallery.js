import { current } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import terminal from '../assets/terminal.png'
import Button from './Button'

const Gallery = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }
       

  return (

    <div className='flex items-center justify-center w-full text-dark bg-white'>
        <div className='max-w-[1240px] px-4 py-16'>
            <div className='text-center'>
                <h1 className='text-4xl py-2'>Photo Gallery</h1>
                <hr class="my-4 mx-auto w-48 h-1 bg-gray-400 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
            </div>

            {/*Slider*/}
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                 <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover        duration-500'></div>

                 {/* left Arrow */}
                 <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-6xl p-2 text-white cursor-pointer'>
                    <ion-icon name="arrow-back-circle" onClick={prevSlide}></ion-icon>
                    </div>
                {/* Right Arrow */}
                 <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-6xl p-2 text-white cursor-pointer'>
                    <ion-icon name="arrow-forward-circle" onClick={nextSlide}></ion-icon> 
                 </div>
                 <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)}className='text-xs cursor-pointer p-2 text-gray-600'>
                            <ion-icon name="ellipse" ></ion-icon>
                        </div>
                    ))}
                 </div>
            </div>


            <div className='text-center'>
                <p className='py-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas numquam natus ipsam quam quo voluptates atque nesciunt ea, distinctio soluta?</p>
                <Link to="/" className='text-4xl'>
                   <ion-icon name="arrow-up-circle-outline"></ion-icon>
                </Link>
            </div>
            
            
        </div>
    </div>
  )
}

export default Gallery