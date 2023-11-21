import React from 'react'

const Home6Components = () => {

  return (
    <div className=' bg-[#FCC6A5] flex justify-center'>
      <div className=' px-[18px] py-10 2xl:w-[1300px] lg:flex justify-between'>
        <div className=' hidden sm:flex '>
          <img src="./images/iPhone16.png" alt="" className=' mx-auto' />
        </div>
        <div className=' flex justify-end  items-center'>
          <div className=' lg:w-[835px] text-left'>
            <h1 className=' text-[32px] lg:text-[60px] '>Download the <span className=' text-[#FF914D]'>App Now!</span></h1>
            <div className=' sm:hidden flex '>
              <img src="./images/iPhone16.png" alt="" className=' mx-auto w-[195px]' />
            </div>
            <p className=' text-[18px] lg:text-[32px] lg:leading-[37px] font-black'>Simplify healthcare staffing with the Lubi app. Effortless time-sheets, and real-time communication – all in one place. Download now to transform your agency's operations.</p>
            <div className=' mt-[40px] grid justify-center lg:flex gap-[22px]'>
              <button className=' bg-[url("../public/images/Frame.png")] bg-cover w-[200px] h-[65px]'></button>
              <button className=' bg-[url("../public/images/svg.png")] w-[200px] h-[65px]'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home6Components