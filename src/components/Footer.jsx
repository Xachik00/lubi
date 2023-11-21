import React, { useState } from 'react';
import PrivacyComponent from '../components/privacyComponents/PrivacyComponent'
import TermsComponent from '../components/termsComponents/TermsComponent'

const Footer = () => {

  const [modal,setModal]=useState(0)

  return (
    <div className=' bg-black 2xl:h-[480px] md:pt-[70px] flex justify-center'>
      <div className=' px-[18px] py-10 sm:p-10 md:p-0 md:w-[640px] xl:w-[1000px] 2xl:w-[1300px] text-white  flex flex-col justify-between'>
        <div className='  md:h-[150px] 2xl:h-[215px] grid md:grid-cols-3 2xl:grid-cols-2'>
          <div className=' flex flex-col justify-between gap-[20px] md:gap-0 '>
            <a href='/' className=' flex gap-[20px] md:gap-[37px] items-center '>
              <img src="./images/Logo.png" alt="" className='w-[36px] 2xl:w-[74px]' />
              <h4 className=' xl:text-[24px] lx2:text-[32px] leading-[37px] font-bold '>LUBI</h4>
            </a>
            <p className='text-[18px] leading-7 lg:text-[12px] lg:w-[180px] 2xl:text-[24px] 2xl:w-[480px] text-[#989898] '>Empower Your Agency with Efficiency – Are You Prepared to Transform Your Time Management Today?</p>
          </div>
          <div className=' mt-7 md:mt-0 md:col-span-2 2xl:col-span-1 text-[14px] 2xl:text-[22px] grid grid-cols-2 md:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 md:gap-[20px]'>
            <div className='flex flex-col row-span-2'>
              <h6 className=' text-[18px] leading-5 text-[#989898] md:row-span-2'>Company</h6>
              <a href='/'>Home</a>
              <a href='/About'>About</a>
              <a href='/'>Features</a>
              <a href='/Pricing'>Pricing</a>
              <a href='/'>Your Savings</a>
            </div>
            <div >
              <h6 className=' text-[18px] text-[#989898]'>Email</h6>
              <a href='/'>info@lubiondemand.com</a>
            </div>
            <div className=' xl:ml-[30px] 2xl:ml-[80px] md:col-start-2 md:row-start-2 xl:col-start-3 xl:row-start-1'>
              <h6 className=' text-[18px] text-[#989898]'>Social Media</h6>
              <a href='/' className=' flex gap-[20px] items-center'>
              <img src='./images/In.png' className=' w-[22px] h-[22px]' alt=''/>
                <p>Linkedin</p>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-2 '>
          <hr />
          <div className=' flex justify-between mt-2 sm:mt-[36px] text-[11px] 2xl:text-[18px]' >
            <div className=' flex gap-[10px] 2xl:gap-[64px] ' >
              <p onClick={()=>{setModal(1)}}  className=' underline'>Privacy Policy</p>
              <p onClick={()=>{setModal(2)}}  className=' underline'>Terms of use</p>
            </div>
            <div className=' flex items-center gap-[4px]'>
            &copy;<p>2023 Relace with Lubi's rights</p>
            </div>
          </div>
        </div>

      </div>
          {
            modal===1&&<PrivacyComponent setModal={setModal}/>
          }
          {
            modal===2&&<TermsComponent setModal={setModal} />
          }
    </div>
  )
}

export default Footer