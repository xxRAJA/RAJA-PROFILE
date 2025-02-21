import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='!mt-6'>
        <h1 className='text-center font-semibold text-3xl !mb-4'>Profile Ragistration</h1>
        <form className='w-full h-auto flex flex-col justify-center items-center' action="">
            <label>
                <input className='!p-2 border-2 border-black border-solid rounded-2xl !mt-2 w-sm md:w-xl' type="text" placeholder='Bhupender jogi'/>
            </label>
            <label>
                <input className='!p-2 border-2 border-black border-solid rounded-2xl !mt-2 w-sm md:w-xl' type="email" placeholder='bhupenderjogi123@gmail.com'/>
            </label>
           
            <div>
                <input className='!p-2 border-2 border-black border-solid rounded-2xl !mt-2 w-sm md:w-xl' type="number" placeholder='age:18' />
            </div>
            <div>
                <input className='!p-2 border-2 border-black border-solid rounded-2xl w-sm md:w-xl !mt-2' type="number" placeholder='address: Park aveneue, netaji sarani , Delhi' />
            </div>
            <div>
                <input className='!p-2 border-2 border-black border-solid rounded-2xl w-sm md:w-xl !mt-2' type="number" placeholder='pin- 723133' />
            </div>
            <div className='flex flex-row !mt-2 !mb-2 gap-3'>
            <div>
            <label for="op1">Male</label>
            <input type="radio" id='op1' name='choice'/>
            </div>
            <div>
            <label for="op2">Female</label>
            <input type="radio" id='op2' name='choice'/>
            </div>
            <div>
            <label for="op3">Others</label>
            <input type="radio" id='op3' name='choice'/>
            </div>
            </div>
            <button className='!mb-[5rem] !p-3 w-sm bg-amber-200 rounded-2xl text-2xl font-semibold hover:text-amber-200 hover:bg-[#515151]'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
