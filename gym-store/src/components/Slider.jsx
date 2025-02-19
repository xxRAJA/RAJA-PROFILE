import React, { useEffect, useState } from 'react'

const Slider = () => {


    let images = ['./slider/slider1.webp','./slider/slider4.jpg','./slider/slider5.webp','./slider/slider2.jpg','./slider/slider3.jpg']

    const [index, setIndex] = useState(0);
  
    useEffect(()=>{
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex+1)%images.length);
      }, 2000);
  
      return ()=> clearInterval(interval)
    },[])
    return (
      <div className='flex justify-center !mt-1'>
         <div className="w-[1080px] h-72 overflow-hidden relative mx-auto mt-10 rounded-lg">
        <div 
          className="flex transition-transform duration-600 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }} // Moves images
        >
          {images.map((img, i) => (
            <img key={i} src={img} className="w-[1080px] h-72 flex-shrink-0" alt={`Slide ${i}`} />
          ))}
        </div>
      </div>
      </div>
    )
}

export default Slider
