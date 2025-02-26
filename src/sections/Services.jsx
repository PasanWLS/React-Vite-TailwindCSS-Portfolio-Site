import React, { useEffect } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md'
import { IoLogoAndroid } from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
    })
  }, []);

  return (
    <div id='services' className='w-full lg:px-[200px] px-8 lg:py[100px] py-[40px] h-full flex lg:flex-row flex-col justify-between items-start gap-[100px]'>
      <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-poppin font-semibold'>Services</h1>
        <div data-aos="zoom-in" className='bg-themered h-[3px] w-20'></div>
        <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore architecto voluptatibus consectetur reiciendis non, placeat reprehenderit veniam nulla maiores ea suscipit quisquam omnis earum enim alias labore quos deleniti.</p>
      </div>
      
      <div className='lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12'>
        <div data-aos="zoom-in" className='flex flex-col justify-center items-start gap-6'>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duratioin-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9 '/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Dashboard Developing</h1>
            <p className='text-gray-300 font-poppins text-[17px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, molestias fugiat in quaerat illo repellat itaque illum voluptate cum pariatur quis!</p>
          </div>
          <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>

        <div data-aos="zoom-in" className='flex flex-col justify-center items-start gap-6'>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duratioin-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9 '/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Web Designing</h1>
            <p className='text-gray-300 font-poppins text-[17px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, molestias fugiat in quaerat illo repellat itaque illum voluptate cum pariatur quis!</p>
          </div>
          <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>


        <div data-aos="zoom-in" className='flex flex-col justify-center items-start gap-6'>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duratioin-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9 '/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Content Writing</h1>
            <p className='text-gray-300 font-poppins text-[17px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, molestias fugiat in quaerat illo repellat itaque illum voluptate cum pariatur quis!</p>
          </div>
          <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>


        <div data-aos="zoom-in" className='flex flex-col justify-center items-start gap-6'>
          <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duratioin-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9 '/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>UI/UX Designing</h1>
            <p className='text-gray-300 font-poppins text-[17px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, molestias fugiat in quaerat illo repellat itaque illum voluptate cum pariatur quis!</p>
          </div>
          <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>

      </div>
    </div>
  )
}

export default Services
