import React from 'react'

const About = () => {
  return (
    <div>
        <div>
          <img className='h-[400px] w-fit !mx-auto !mt-4' src="./images/aboutUs.jpg" alt="" />
          <div className='w-[50%] !mt-14 !mr-auto !ml-10 text-sm rounded-2xl bg-amber-100 !p-3'>
            <p>At [Your Store Name], we are passionate about fitness and dedicated to helping you achieve your health and strength goals. Whether you're a beginner or a seasoned athlete, we provide high-quality gym accessories, fitness gear, and premium supplements to support your journey.</p>
          </div>
          <div className='w-[50%] !mt-12  !ml-auto !mr-10  text-sm rounded-2xl bg-amber-100 !p-3'>
            <p>Our products are designed for durability, performance, and comfort, ensuring that you get the best workout experience. We source only the finest supplements to help you fuel your body, recover faster, and maximize results.</p>
          </div>
        </div>

        <h1 className='text-3xl font-bold !ml-10'>Reviews</h1>

        <div className='flex gap-2 justify-evenly !mt-10 !mb-10'>
        <div className='bg-emerald-200 w-[250px] text-center !p-3 rounded'>
          <h2 className='text-xl font-semibold !mb-2'>Arup Biswas</h2>
          <p className='text-2xl'>4.5/5</p>
          <p className='text-sm'>Their products are very good. delivery is also very perfect</p>
        </div><div className='bg-emerald-200 w-[250px] text-center !p-3 rounded'>
          <h2 className='text-xl font-semibold !mb-2'>Pritam Gupta</h2>
          <p className='text-2xl'>4.5/5</p>
          <p className='text-sm'>Their products are very good. delivery is also very perfect</p>
        </div><div className='bg-emerald-200 w-[250px] text-center !p-3 rounded'>
          <h2 className='text-xl font-semibold !mb-2'>Subihan Sen</h2>
          <p className='text-2xl'>4.5/5</p>
          <p className='text-sm'>Their products are very good. delivery is also very perfect</p>
        </div>
        </div>
      </div>
  )
}

export default About
