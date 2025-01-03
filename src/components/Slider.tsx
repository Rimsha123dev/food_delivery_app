import React from 'react'

const Slider = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
        {/* text */}
        <div className='h-1/2 flex flex-col item-center justify-center '>
            <h1>
                test1
            </h1>
            <button>
                order now
            </button>
        </div>
        {/* image */}
        <div className='h-1/2 w-full '>
            <img src="/slide1.png" alt="slider image"  className='border rounded-full object-cover fill' />
        </div>
      
    </div>
  )
}

export default Slider
