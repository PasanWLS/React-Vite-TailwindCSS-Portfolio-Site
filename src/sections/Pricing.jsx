import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HiBadgeCheck } from 'react-icons/hi'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Pricing = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='pricing' className='w-full lg:px-[200px] px-8 py-[40px] h-full flex flex-col justify-between items-center gap-5'>
      <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-poppin font-semibold'>Pricing</h1>
      <div data-aos="zoom-in" className='bg-themered h-[3px] w-20'></div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore architecto voluptatibus consectetur reiciendis non, placeat reprehenderit veniam nulla maiores ea suscipit quisquam omnis earum enim alias labore quos deleniti.</p>
    
      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-8'>
          <div data-aos="zoom-in" data-aos-delay="600" className='w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
            <h1 className='text-white font-semibold text-[24px] font-poppins'>Silver</h1>
            <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <HiBadgeCheck className='fill-white size-9' />
            </div>

            <h1 className='text-5xl text-white font-poppin font-semibold'>$34</h1>
            <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing adipisicing elit. </li>
            </ul>
            <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2'>Select Plan <span><FaArrowRightLong className='text-white' /></span> </button>

          </div>

          <div data-aos="zoom-in" data-aos-delay="600" className='bg-[#2f2f2f] w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
            <h1 className='text-white font-semibold text-[24px] font-poppins'>Gold</h1>
            <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <HiBadgeCheck className='fill-white size-9' />
            </div>

            <h1 className='text-5xl text-white font-poppin font-semibold'>$134</h1>
            <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing adipisicing elit. </li>
            </ul>
            <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2'>Select Plan <span><FaArrowRightLong className='text-white' /></span> </button>

          </div>


          <div data-aos="zoom-in" data-aos-delay="600" className='w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
            <h1 className='text-white font-semibold text-[24px] font-poppins'>Platinum</h1>
            <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <HiBadgeCheck className='fill-white size-9' />
            </div>

            <h1 className='text-5xl text-white font-poppin font-semibold'>$234</h1>
            <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-7' /></span> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing adipisicing elit. </li>
            </ul>
            <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2'>Select Plan <span><FaArrowRightLong className='text-white' /></span> </button>

          </div>
      </div>      
    </div>
  )
}

export default Pricing

