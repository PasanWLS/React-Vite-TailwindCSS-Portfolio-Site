import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cta = () => {

 useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='pricing' className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
      <div data-aos="zoom-in" className='w-full bg-[#2f2f2f] flex lg:flex-row flex-col justify-between items-center lg:p-20 p-8'>
        <h1 className='text-white lg:w-[50%] w-full lg:text-35px] text-[30px] leading-10 lg:text-left text-center font-semibold font-poppins'>Discover How Design Can Help Your Business</h1>
        <button className='bg-themered hover:bg-white text-white hover:text-themered font-semibold lg:text-lg text-sm rounded-lg px-8 py-3 text-sm font-poppins'>Contact Me</button>

      </div>
    </div>
  )
}

export default Cta
