import React from 'react'

const Home4Components = () => {
  return (
    <div className=' bg-[#FDDBC5] flex justify-center'>
    <div className=' px-[15px] sm:px-10 2xl:w-[1300px] my-[47px]'>
      <div>
        <h2 className=' text-[24px]  xl:text-[66px] lg:w-[820px]'>How much are timesheets costing you?</h2>
      </div>
      <div className=' text-[18px] leading-[28px] mt-[20px] xl:flex justify-between lg:mt-[50px] lg:leading-[61px] items-end'>
        <p className=' xl:text-[32px] lg:w-[844px]'>On average, Timesheet mistakes, fraud, and processing
          Cost  staffing agencies nearly $12,500 per month</p>

        <button className=' text-[18px] mt-4 w-[207px] h-[58px] lg:mx-0 lg:mt-0 lg:w-[330px] lg:h-[78px] bg-[#FF914D] lg:text-[36px] items-center rounded-[40px] flex justify-around text-white border-[1px] border-white'>
          <p>CALCULATE</p>
          <img src="./images/icon1.png" alt="" className=' w-[22px] sm:w-[42px]' />

        </button>
      </div>
    </div>
  </div>
  )
}

export default Home4Components