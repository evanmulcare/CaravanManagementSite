import React from 'react'

const Photos = () => {
  return (
    <main className='py-14 px-4 mx-auto max-w-7xl'>
      <div className='flex items-center'>
          <h1 className='text-4xl font-medium'>Some Photos!</h1>
      </div>
      <p className='pt-3 text-lg text-gray-700'>Photos straight from the vat</p>
      <div className='inline-flex gap-x-2 items-center pt-2 text-sm text-gray-50'>

            <div className='flex gap-x-8 items-center pt-5 text-black'>
                <a href="#" className='text-lg font-medium'>The Park</a>
                <a href="#" className='text-lg font-medium'>The Town</a>
            </div>
      </div>
      <div className='gap-3 pt-2 columns-4 w-[1200px] mx-auto space-y-3 pb-28'>
                <div className='bg-gray-200 break-inside-avoid'><img src='./product1.jpg'/></div>
                <div className='bg-gray-200 break-inside-avoid'><img src='./product1.jpg'/></div>
                <div className='bg-gray-200 break-inside-avoid'><img src='./product1.jpg'/></div>
                <div className='bg-gray-200 break-inside-avoid'><img src='./product1.jpg'/></div>
                <div className='bg-gray-200 break-inside-avoid'><img src='./product1.jpg'/></div>
            </div>
   </main>
  )
}

export default Photos