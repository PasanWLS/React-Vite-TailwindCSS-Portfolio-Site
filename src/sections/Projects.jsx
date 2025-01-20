import React, { useEffect } from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import { FaArrowRightLong } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);


  return (
    <div id='projects' className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
      <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-poppin font-semibold'>Projects</h1>
      <div data-aos="zoom-in" data-aos-delay="200" className='bg-themered h-[3px] w-20'></div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg text-center font-poppins lg:w-[70%] w-full'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Placeat in est atque necessitatibus aliquid quasi, alias repellat illo neque.</p>
      
      <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-20 mt-20'>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Python Dashboard Development</h1>
            <p className='text-gray-300 text-[17px] font-poppins' data-aos="zoom-in" data-aos-delay="800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, reprehenderit.</p>
          </div>
          <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
          <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]'></div>
          <img src={project1} alt="" className='relative z-20 rounded-lg' />
          
        </div>
      </div>

      <div className='w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-20 mt-20'>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>E-Commerce Web Site</h1>
            <p className='text-gray-300 text-[17px] font-poppins' data-aos="zoom-in" data-aos-delay="800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, reprehenderit.</p>
          </div>
          <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
          <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]'></div>
          <img src={project2} alt="" className='relative z-20 rounded-lg' />
          
        </div>
      </div>
    </div>
  )
}

export default Projects
