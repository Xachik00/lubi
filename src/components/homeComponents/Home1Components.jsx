import React from 'react'

const Home1Components = () => {
  return (
    <div className=' bg-[url("../public/images/BG.png")] bg-cover'>
      <div className='w-[92%]  lg:text-left  mx-auto h-[540px] 2xl:h-[600px] 2xl:w-[1300px] relative top-8  lg:flex lg:justify-between '>
        <div className=' text-white relative flex flex-col sm:block  justify-between  h-[480px] '>
          <h1 className='text-[24px] leading-[30px] tracking-[4px] lg:text-[30px] 2xl:text-[56px] 2xl:w-[780px]  lg:tracking-[4px] lg:leading-[74px] '>Time-sheets shouldn’t be the most complicated part of staffing!</h1>
          <div className=' '>
            <h2 className=' text-[17px] leading-[22px] lg:text-[25px] 2xl:text-[40px] mt-8'>Optimize your timesheets with LUBI</h2>
            <button className=' text-[18px] w-[240px] h-[58px] 2xl:w-[396px] lg:h-[78px]  flex justify-around lg:text-[36px] items-center rounded-[40px] bg-[#FF914D] mt-[20px] sm:mt-12 text-white border-[1px] border-white'>
              <p>Get Early Access</p>
              <img src="./images/icon1.png" alt="" className=' w-[22px] sm:w-[42px]' />
            </button>
          </div>
        </div>
        <div className=' '>
          <img src="./images/iPhone15.png" alt="" className='  absolute top-[100px] sm:top-[50px] sm:right-[-100px] md:top-[0px]  lg:w-[500px] lg:right-0 2xl:w-[840px] 2xl:top-[-100px] 2xl:right-[-140px] ' />
        </div>
      </div>
    </div>
  )
}

export default Home1Components