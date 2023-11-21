import React from 'react'

const Pricing3Component = () => {
    return (
        <div className=' bg-[#FCC6A5] flex justify-center'>
            <div className=' px-4 py-10 2xl:w-[1300px] xl:flex justify-between'>
                <div>
                    <img src="./images/iPhone16.png" alt="" className='hidden sm:flex mx-auto' />
                </div>
                <div className=' flex justify-end  items-center'>
                    <div className=' xl:w-[835px] text-left'>
                        <h1 className=' text-[32px] lg:text-[60px] '>Start Your <span className=' text-[#FF914D]'>Free Trial Now</span></h1>
                        <div>
                            <img src="./images/iPhone16.png" alt="" className='sm:hidden flex mx-auto w-48' />
                        </div>
                        <p className=' text-[20px] lg:text-[39px] lg:leading-[46px] font-black'>Experience Enhanced Efficiency and Compliance in Healthcare Staffing with Lubi.</p>
                        <div className=' mt-[40px] grid justify-center xl:flex  gap-[22px] '>
                            <button className=' bg-[url("../public/images/Frame.png")] bg-cover w-[200px] h-[65px]'></button>
                            <button className=' bg-[url("../public/images/svg.png")] w-[200px] h-[65px]'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing3Component