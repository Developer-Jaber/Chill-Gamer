import React from 'react'

const Loding = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100 w-screen h-screen'>
      <div className='bg-white shadow-lg p-10 rounded-lg'>
        <div className='flex justify-center items-center'>
          <div className='daisy-loader daisy-loader-lg daisy-loader-primary'></div>
        </div>
        <p className='mt-4 text-center text-gray-600'>Loading...</p>
      </div>
    </div>
  )
}

export default Loding
