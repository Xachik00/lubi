import React, { useState } from 'react'

const About3Component = () => {
    const [activeLubi,setActiveLubi]=useState(0)
    const lubiArray = [
        {
            img: './images/set1.png',
            title: 'Scalable  Solutions',
            text: 'Lubi is designed to cater to agencies of various sizes, from small to large-scale operations. Its scalable architecture ensures that it meets the evolving needs of healthcare staffing agencies, growing alongside their business.'
        },
        {
            img: './images/set2.png',
            title: 'User-Friendly Interface',
            text: "Understanding the diverse needs of our users, Lubi is designed to be intuitive and accessible. Whether it's a healthcare facility or a professional seeking employment opportunities, our platform ensures a smooth, hassle-free experience."
        }, {
            img: './images/set3.png',
            title: 'Compliance and Security',
            text: "At the core of Lubi's functionality is a commitment to compliance and security. We prioritize the safety of user data and ensure that our systems adhere to the highest standards, providing peace of mind to both staffing agencies and healthcare professionals."
        },
    ]
    return (
        <div className=' bg-[#FDDBC5] flex justify-center'>
            <div className=' px-4 py-10 2xl:w-[1320px] text-left sm:text-center lg:mt-[70px] mb-[47px]'>
                <h2 className='text-[32px] lg:text-[82px]  font-extrabold'>What Sets <span className=' text-[#FF914D]'>LUBI Apart?</span></h2>
                <div className='hidden mt-[40px] sm:grid lg:grid-cols-3 gap-[42px] text-[#989898] '>
                    <div className=' flex flex-col gap-[23px] items-center bg-white rounded-[12px] p-[36px] text-[18px]'>
                        <img src="./images/set1.png" alt="" className=' w-[140px]' />
                        <h3 className=' text-[28px] text-black'>Scalable  Solutions</h3>
                        <p >Lubi is designed to cater to agencies of various sizes, from small to large-scale operations. Its scalable architecture ensures that it meets the evolving needs of healthcare staffing agencies, growing alongside their business.</p>
                    </div>
                    <div className=' flex flex-col gap-[23px] items-center bg-white rounded-[12px] p-[36px] text-[18px]'>
                        <img src="./images/set2.png" alt="" className=' w-[140px]' />
                        <h3 className=' text-[28px] text-black'>User-Friendly Interface</h3>
                        <p >Understanding the diverse needs of our users, Lubi is designed to be intuitive and accessible. Whether it's a healthcare facility or a professional seeking employment opportunities, our platform ensures a smooth, hassle-free experience.</p>
                    </div>
                    <div className=' flex flex-col gap-[23px] items-center bg-white rounded-[12px] p-[36px] text-[18px] '>
                        <img src="./images/set3.png" alt="" className=' w-[140px]' />
                        <h3 className=' text-[28px] text-black'>Compliance and Security</h3>
                        <p >At the core of Lubi's functionality is a commitment to compliance and security. We prioritize the safety of user data and ensure that our systems adhere to the highest standards, providing peace of mind to both staffing agencies and healthcare professionals.</p>
                    </div>
                </div>
                <div className='sm:hidden mt-[40px]  text-[#989898] '>
                    {
                        lubiArray?.map((el, index) =>

                            activeLubi===index&&<div key={index} className=' flex flex-col gap-[23px] items-center bg-white rounded-[12px] p-[36px] text-[18px]'>
                                <img src={el.img} alt="" className=' w-[140px]' />
                                <h3 className=' text-[28px] text-black'>{el.title}</h3>
                                <p >{el.text}</p>
                            </div>
                        )
                    }
                    <div className=' flex gap-5 mt-5 sm:hidden '>
                        {
                            lubiArray?.map((el,idx)=>
                          <div key={idx} onClick={()=>{setActiveLubi(idx)}} className={`h-[6px] w-[67px] rounded-[50px] ${idx===activeLubi?'bg-[#FF914D]':'bg-[#FFFFFF]'}`}></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3Component