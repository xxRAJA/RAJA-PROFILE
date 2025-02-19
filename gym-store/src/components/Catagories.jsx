import React, { useState } from 'react'
import Accessories from './Accessories'
import Suppliments from './Suppliments'



   

const Catagories = () => {


  return (
    <div>
      <div className='flex justify-center'>
        <a className='!m-3 bg-blue-500 !p-3 font-semibold rounded-2xl' href="/suppliments">Suppliments</a>
        <a className='!m-3 bg-blue-500 !p-3 font-semibold rounded-2xl' href="/accessories">Accessories</a>
        
      </div>
    </div>
  )
}

export default Catagories
