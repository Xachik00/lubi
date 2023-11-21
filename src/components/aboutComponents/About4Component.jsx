import React from 'react'

const About4Component = () => {
  return (
    <div className=' bg-white flex justify-end py-[20px]'>
      <div className=' px-4 py-10 2xl:w-[1460px] lg:flex justify-between '>
        <div className=' lg:w-[700px]  '>
          <h2 className='text-[32px] text-left lg:text-[82px]  font-extrabold'>Join the LUBI  <span className=' text-[#FF914D]'>Revolution Today</span></h2>
          <p className=' text-[20px] mt-5 lg:text-[30px] lg:w-[650px]  font-normal '>Where Healthcare Staffing
            Meets Innovation and Integrity. We're dedicated to providing a secure,
            efficient, and transparent platform, transforming how healthcare
            staffing is managed globally.</p>
        </div>
        <div className=' mt-4 sm:mt-0'>
          <img src="./images/doc.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About4Component