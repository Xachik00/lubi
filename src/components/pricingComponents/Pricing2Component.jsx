import React from 'react'

const Pricing2Component = () => {
    return (
        <div className=' bg-white flex justify-center'>
            <div className=' px-4 py-10 xl:w-[1320px] text-center '>
                <div className=' grid lg:gap-[30px]'>
                    <h1 className=' text-[32px] lg:text-[82px] text-[#FF914D] lg:leading-[90px] font-extrabold'>Plans</h1>
                    <h2 className=' text-[18px] leading-[30px] lg:text-[40px]  md:leading-[47px] font-normal'>Streamline your staffing processes with Lubi, without the complexities of traditional software.</h2>
                    <h3 className=' text-[24px] lg:text-[40px] text-[#FF914D]  lg:leading-[47px] font-semibold'>Get Started for Free!</h3>
                </div>
                <div className=' grid lg:grid-cols-2 xl:w-[1145px] my-[70px] text-left text-[16px] mx-auto gap-[85px]'>
                    <div className='px-4 text-[16px] shadow-[0_0_30px_-15px_#181A18]  sm:px-[74px] py-[41px] rounded-[12px] bg-[#98989826] flex flex-col justify-between'>
                        <div className='grid gap-[10px] '>
                            <p className=' text-[20px] lg:text-[22px]'>30 Days Trial</p>
                            <h4 className=' text-[32px] lg:leading-[73px]  p-[10px] lg:text-[82px] text-[#FF914D]'>Free</h4>
                            <hr className=' bg-[#9898981A] h-[2px]' />
                            <p className=' py-2'>Features</p>
                            <div className=' flex items-start gap-[14px]'>
                                <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                <p>First month free for agencies registering 50 or more contractors within the first 30 days.</p>
                            </div>
                            <div className=' flex items-start gap-[14px] '>
                                <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                <p>Two months free for agencies achieving 100 hours of booked shifts through Lubi within the first month.</p>
                            </div>
                        </div>
                        <p className=' text-[#FF914D] mt-8'>The introductory offer includes all features available in the Standard Plan.</p>
                    </div>
                    <div className='px-4 text-[16px] shadow-[0_0_30px_-15px_#181A18]  md:px-[74px] py-[41px] rounded-[12px] bg-[#FDDBC5] flex flex-col justify-between'>
                        <div className='grid gap-[10px] '>
                            <p className=' lg:text-[22px]'>Standard</p>
                            <h4 className=' text-[32px] flex gap-[10px] items-center lg:leading-[73px]  md:p-[10px] lg:text-[82px] text-[#FF914D]'>$3.99<span className=' text-[16px] lg:text-[16px] text-black leading-[3px]'>per user /month</span></h4>
                            <hr className=' bg-[#989898] h-[2px]' />
                            <p className=' py-2'>Features</p>
                            <div className=' grid gap-[25px]'>
                                <div className=' flex items-start gap-[14px]'>
                                    <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                    <p>Geo-Clocking In & Out</p>
                                </div>
                                <div className=' flex items-start gap-[14px]'>
                                    <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                    <p>Automatic Timesheets</p>
                                </div>
                                <div className=' flex items-start gap-[14px]'>
                                    <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                    <p>Easy Timesheet Approval</p>
                                </div>
                                <div className=' flex items-start gap-[14px]'>
                                    <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                    <p>Seamless Staffing Software Integration</p>
                                </div>
                                <div className=' flex items-start gap-[14px]'>
                                    <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                    <p>Teams and Roles</p>
                                </div>
                                <div className=' flex items-start gap-[14px]'>
                                    <img src="./images/check.png" alt="" className=' bg-[#FF914D] p-1  rounded-[50%]' />
                                    <p>Unlimited staff</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=' leading-[30px] text-[21px] lg:text-[50px] text-left  lg:leading-[61px] font-extrabold' >Expand your staffing capabilities with Lubi. Additional profiles for larger agencies available at competitive rates.</p>
            </div>
        </div>
    )
}

export default Pricing2Component