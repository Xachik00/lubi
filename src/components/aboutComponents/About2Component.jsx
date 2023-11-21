import React from 'react'

const About2Component = () => {
  return (

    <div className='bg-white flex justify-center'>
      <div className=' px-4 py-10   2xl:w-[1300px] lg:pt-[70px] pb-[58px] 2xl:flex  gap-[32px] items-center'>
        <div className=' lg:w-[810px] grid gap-5 text-left'>
          <h2 className='text-[32px] lg:text-[82px]  font-extrabold'>Our <span className=' text-[#FF914D]'>Solution?</span></h2>
          <div>
            <img src="./images/About1.png" alt="" className=' sm:hidden block' />
          </div>
          <p className=' text-[20px]  lg:text-[30px]  font-normal '>Lubi is designed as a comprehensive platform that facilitates seamless
            management of healthcare staffing. With features like Geo-Clocking,
            Automatic Timesheets, and Easy Timesheet Approval, our vision is to
            empower staffing agencies and healthcare professionals with tools that
            foster efficiency, compliance, and better resource management. We aim
            to transform the staffing landscape, making it more adaptable, responsive,
            and rewarding for all involved.</p>
        </div>
        <div>
          <img src="./images/About1.png" alt="" className=' hidden sm:block' />
        </div>
      </div>
    </div>
  )
}

export default About2Component