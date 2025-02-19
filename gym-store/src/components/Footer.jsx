import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-96 bg-[#414141] uppercase !pt-16 text-sm'>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full text-white text-[15px] '>
          <div className='!p-4'>
            <h3 className='text-lg text-teal-500'>online store</h3>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>men gym accessories</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>women gym accessories</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>gym suppliments</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>more products..</p>
          </div>
          <div  className='!p-4'>
            <h3 className='text-lg text-teal-500'>Helpful links</h3>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>home</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'><a href="/about">about</a></p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>contact</p>
          </div>
          <div className='!p-4'>
            <h3 className='text-lg text-teal-500'>Partners</h3>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>Mussele Blaze</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>Nutrabay</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>Hyugalife</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>Muscle and strength</p>
          </div>
          <div className='!p-4'>
            <h3 className='text-lg text-teal-500'>address</h3>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>building 101</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>central avenue</p>
            <p className='text-sm hover:text-gray-400 cursor-pointer !m-1'>Noida - 110025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
