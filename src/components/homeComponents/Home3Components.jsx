import React, { useState } from 'react'

const Home3Components = () => {
  const features = [
    {
      img: './images/icon5.png',
      title: 'Geo-Clocking In & Out',
      miniTitle: 'Precision in Every Punch',
      text: "Track staff hours with utmost accuracy using our geolocation technology. Maintain a real-time record of clock-ins and outs,ensuring precise timekeeping that's essential for healthcare staffing agencies."
    },
    {
      img: './images/icon6.png',
      title: 'Automatic Timesheets',
      miniTitle: 'Streamlined Efficiency at Your Fingertips',
      text: "Experience hassle-free time-sheet management with our automated system. Say goodbye to manual data entry and human errors.Lubi generates electronic time-sheets effortlessly, saving you time and ensuring accuracy for every contract."
    },
    {
      img: './images/icon7.png',
      title: 'Easy Timesheet  approval',
      miniTitle: 'Easy Timesheet  approval',
      text: "Facilitate seamless communication between supervisors and contractors with our user-friendly time-sheet approval process. Speed up approvals, enhance transparency, and ensure contractors get paid on time, every time."
    },
    {
      img: './images/icon8.png',
      title: 'Roles and Teams',
      miniTitle: 'Empowering Collaboration and Specialization',
      text: "Different roles and team functionalities for health facilities to manage various departments and their specific needs. Tailor Lubi to Fit Every Team's Unique Workflow"
    },
  ]
  const [activFea, setActiveFea] = useState(0)

  return (
    <div className=' bg-white'>
      <div className=' hidden sm:flex justify-end p-10'>
        <img src="./images/ket.png" alt="" className=' w-[150px] lg:w-[300px]' />
      </div>
      <div className=' w-[90%] py-[25px] 2xl:w-[1300px] mx-auto '>
        <h1 className='text-[32px] text-left lg:text-[77px]  '>Features You <span className=' text-[#FF914D]'>Need</span></h1>

        <div className=' hidden sm:flex md:block 2xl:flex mt-10 relative justify-between flex-wrap  '>
          <div className=' 2xl:w-[33%] px-5 lg:px-0 md:flex 2xl:block'>
            <div className=' mt-10'>
              <div className=' flex gap-[40px] items-center w-[90%]'>
                <img src="./images/icon5.png" alt="" className=' lg:w-[38px] lg:h-[50px]' />
                <h4 className=' text-[28px] lg:text-[38px]'>Geo-Clocking In & Out</h4>
              </div>
              <div className=' text-[20px]  w-[70%] ml-[20%]'>
                <h5>Precision in Every Punch</h5>
                <p className=' font-sans text-gray-500 leading-[26px]'>Track staff hours with utmost accuracy using our geolocation technology.
                  Maintain a real-time record of clock-ins and outs,
                  ensuring precise timekeeping that's essential for healthcare staffing agencies.</p>
              </div>
            </div>
            <div className=' mt-10'>
              <div className=' flex gap-[40px] items-center w-[90%]'>
                <img src="./images/icon6.png" alt="" className=' w-[38px] h-[50px]' />
                <h4 className='  text-[38px]'>Automatic Timesheets</h4>
              </div>
              <div className=' text-[20px] w-[70%] ml-[20%]'>
                <h5>Streamlined Efficiency at Your Fingertips</h5>
                <p className=' font-sans text-gray-500 leading-[26px]'>Experience hassle-free time-sheet management with our
                  automated system. Say goodbye to manual data entry and human errors.
                  Lubi generates electronic time-sheets effortlessly,
                  saving you time and ensuring accuracy for every contract.</p></div>
            </div>
          </div>
          <div className=' mx-auto 2xl:absolute w-[550px] left-[28%] top-5'>
            <img src="./images/iPhone15.2.png" alt="" />
          </div>
          <div className=' 2xl:w-[33%] px-5 lg:px-0 md:flex 2xl:block'>
            <div className=' mt-10'>
              <div className=' flex gap-[40px] items-center w-[90%]'>
                <img src="./images/icon7.png" alt="" className=' lg:w-[38px] lg:h-[50px]' />
                <h4 className='  text-[38px]'>Easy Timesheet  approval</h4>
              </div>
              <div className=' text-[20px]  w-[70%] ml-[20%]'>
                <h5>Easy Timesheet  approval</h5>
                <p className=' font-sans text-gray-500 leading-[26px]'>Facilitate seamless
                  communication between supervisors and contractors with our user-friendly
                  time-sheet approval process. Speed up approvals,
                  enhance transparency, and ensure contractors get paid on time, every time.</p>
              </div>
            </div>
            <div className=' mt-10'>
              <div className=' flex gap-[40px] items-center w-[90%]'>
                <img src="./images/icon8.png" alt="" className=' lg:w-[38px] lg:h-[50px]' />
                <h4 className='  text-[38px]'>Roles and Teams</h4>
              </div>
              <div className=' text-[20px] w-[70%] ml-[20%]'>
                <h5>Empowering Collaboration and Specialization</h5>
                <p className=' font-sans text-gray-500 leading-[26px]'>Different roles and team
                  functionalities for health facilities to manage various departments and their specific needs.
                  Tailor Lubi to Fit Every Team's Unique Workflow</p></div>
            </div>
          </div>
        </div>


        <div className=' sm:hidden'>
          <div className=' mx-auto w-[195px] 2xl:absolute sm:w-[550px] sm:left-[28%] sm:top-5'>
            <img src="./images/iPhone15.2.png" alt="" />
          </div>
          <div className=' flex md:block 2xl:flex sm:mt-10 relative justify-between sm:flex-wrap  '>
            {
              features?.map((el, index) =>
                index === activFea && <div key={index} className='  flex items-start  gap-[10px]'>
                  <img src={el.img} alt="" className=' w-[38px] h-[50px]' />
                  <div className=' '>
                    <div className=' flex sm:gap-[40px] items-center w-[90%]'>
                      <h4 className=' text-[24px] lg:text-[38px]'>{el.title}</h4>
                    </div>
                    <div className=' text-[18px]  sm:w-[70%] sm:ml-[20%]'>
                      <h5>{el.miniTitle}</h5>
                      <p className=' font-sans text-gray-500 leading-[26px]'>{el.text}</p>
                    </div>
                  </div>
                </div>)
            }
          </div>
          <div className=' flex sm:hidden gap-5 mt-5'>
            {
              features?.map((el, index) =>
                <div key={index} onClick={() => { setActiveFea(index) }} className={`w-[67px] h-[6px] rounded-[50px] bg-[${index === activFea ? "#FF914D" : "#FDDBC5"}]`}></div>
              )
            }
          </div>
        </div>
        <div className=' hidden sm:flex justify-start p-10'>
          <img src="./images/ket.png" alt="" className=' w-[150px] lg:w-[300px]' />
        </div>
      </div>
    </div>
  )
}

export default Home3Components