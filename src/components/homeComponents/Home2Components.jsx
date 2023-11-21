import React from 'react'

const Home2Components = () => {
  return (
    <div className=' lg:h-[125px] bg-[#FDDBC5] flex justify-center '>
    <div className=' w-[90%] py-5 lg:w-[1200px] text-[20px] flex flex-col md:flex-row items-center justify-between '>
      <div className=' flex  md:justify-center items-center w-[80%]'>
        <img src="./images/icon2.png" alt="" className=' w-[30px] lg:w-[50px]' />
        <p className=' ml-4'>Accurate Clock-in</p>
      </div>
      <div className=' flex  md:justify-center items-center w-[80%]'>
        <img src="./images/icon3.png" alt="" className=' w-[30px] lg:w-[50px]'/>
        <p className=' ml-4'>Easy Timesheet Verification</p>
      </div>
      <div className=' flex  md:justify-center items-center w-[80%]'>
        <img src="./images/icon4.png" alt="" className=' w-[30px] lg:w-[50px]'/>
        <p className=' ml-4'>Roles and Teams</p>
      </div>
    </div>
  </div>
  )
}

export default Home2Components