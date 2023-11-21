import React, { useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [scrollHeader, setScrollHeader] = useState(false)
  window.onscroll = function () { myFunction() };

  function myFunction() {
    if (window.pageYOffset > 0) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }

  return (
    <div className={`w-[100%] bg-black flex justify-center z-10   ${scrollHeader ? ' fixed w-[100%]  md:w-[600px] lg:w-[1000px] xl:w-[1200px]  2xl:w-[1600px] mb-[109px] transition-all duration-300' : "relative"}`}>
      <div className={`w-[90%]  lg:w-[800px] xl:w-[1000px] 2xl:w-[1300px] flex justify-between items-center ${scrollHeader ? 'h-[50px]' : ' lg:h-[50px] xl:h-[109px]'} `}>
        <div>
          <a href="/"><img src="./images/Logo.png" alt="" className={` ${scrollHeader ? " w-[36px] " : " w-[36px] xl:w-[73px] "} `} /></a>
        </div>
        <div className={` hidden ${scrollHeader ? " text-[12px] md:text-[18px]" : "text-[14px] xl:text-[20px]"} text-white sm:flex sm:gap-[5px] md:gap-[20px]`}>
          <a className=' ' href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">Your Savings</a>
          <a href="/">FAQ</a>
          <a href="/About">About</a>
          <a href="/Pricing">Pricing</a>
        </div>
        {!menu ? <div className=' grid sm:hidden gap-[8px]' onClick={() => { setMenu(true) }}>
          <div className='w-[28px] h-[2px] bg-white'></div>
          <div className='w-[28px] h-[2px] bg-white'></div>
          <div className='w-[28px] h-[2px] bg-white'></div>
        </div> :
          <div className=' sm:hidden h-full w-full fixed top-0 left-0 flex justify-end  bg-[#00000075]'>
            <div className=' w-[90%] p-[21px] flex  flex-col items-start border-[1px] text-white bg-black text-start text-[25px] rounded-tl-[40px]'>
              <div className=' ml-auto'>
                <img onClick={()=>{setMenu(false)}} src="./images/close1.png" alt=""  />
              </div>
              <div className=' flex flex-col px-[36px]'>
                <a className=' ' href="/">Home</a>
                <a href="/">Features</a>
                <a href="/">Your Savings</a>
                <a href="/">FAQ</a>
                <a href="/About">About</a>
                <a href="/Pricing">Pricing</a>
              </div>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Header