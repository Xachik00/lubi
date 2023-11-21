import React, { useState } from 'react'

const Home5Components = () => {
  const [activeUser, setActiveUser] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const usersArray = [
    {
      name: 'Julia Hanses',
      specality: 'Agency Owner',
      title: 'Streamlined Timesheet Approval with Lubi',
      text: 'The Easy Timesheet Approval feature of Lubi has streamlined our approval process like never before. It’s user-friendly, efficient, and has drastically cut down the time it takes to approve timesheets. This has greatly helped in maintaining timely payments and happy contractors.      ',
      star: [1, 1, 1, 1, 1]
    },
    {
      name: 'Marcus Reynolds',
      specality: 'HR Manager',
      title: 'Simplifying Timesheet Management with Lubi’s Automation',
      text: "Lubi's Automatic Timesheets have been a lifesaver for our agency. The automation of timesheet entries not only saves time but also significantly reduces the margin for error. It's incredible how much smoother our payroll process is now, thanks to this feature.",
      star: [1, 1, 1, 1, 0]
    },
    {
      name: 'Sandra Bell',
      specality: 'Head of Operations',
      title: 'Geo-Clocking In & Out: A Game Changer for Staffing Agencies',
      text: "Lubi's Geo-Clocking feature has transformed how we track our staff's working hours. The accuracy and real-time tracking have eliminated discrepancies and boosted our operational efficiency. It's reassuring to know exactly when and where our contractors begin and end their shifts.",
      star: [1, 1, 1, 1, 0]
    }
  ]
  const questionArray = [
    {
      id: 1,
      title: 'What kind of support and resources does Lubi offer?',
      text: "We prioritize our customers' needs and offer dedicated email support to address any concerns or queries. Additionally,we facilitate one-on-one onboarding ..."
    },
    {
      id: 2,
      title: 'What problem does Lubi aim to solve?',
      text: "Staffing agencies working with ambulant contractors face significant challenges in manually managing timesheets, leading to errors and potential fines..."
    },{
      id: 3,
      title: 'How does Lubi integrate with existing systems at staffing agencies?',
      text: "Lubi is designed to integrate seamlessly with payroll systems, thereby aiding in efficient management of  healthcare professionals and..."
    },
  ]
  return (
    <div className=' bg-white'>

      <div className=' px-[18px] py-10 2xl:w-[1300px] mx-auto sm:pt-[100px]'>
        <h1 className=' text-[32px] text-left lg:text-[80px]'>Frequently Asked <span className=' text-[#FF914D]'>Questions</span></h1>
        <div className=' grid lg:grid-cols-3 lg:gap-[30px]'>
          {
            questionArray?.map((elem, index) =>
              window.innerWidth<650?index===activeQuestion&&<div key={index} className=' sm:p-[10px] pl-[14px] py-[25px] lg:py-[70px] sm:pl-[38px] shadow-[0_0_20px_-10px] rounded-[30px]'>
                <div className=' w-[55px] h-[55px] bg-[#FF914D] text-[30px] text-white flex justify-center items-center'>{elem.id}</div>
                <h6 className=' text-[24px] leading-[28px] mt-[24px] lg:h-[35%] 2xl:h-[150px]'>{elem.title}</h6>
                <p className='mt-[23px] font-sans text-[20px] text-gray-500 leading-[26px]'>{elem.text}</p>
                <a href="/" className=' text-[#FF914D] flex underline decoration-1 sm:mt-[35px] font-mono'>Learn more <img src="./images/icon1.1.png" alt="" className=' w-[25px]' /></a>
              </div>:<div key={index} className=' sm:p-[10px] pl-[14px] py-[25px] lg:py-[70px] sm:pl-[38px] shadow-[0_0_20px_-10px] rounded-[30px]'>
                <div className=' w-[55px] h-[55px] bg-[#FF914D] text-[30px] text-white flex justify-center items-center'>{elem.id}</div>
                <h6 className=' text-[24px] leading-[28px] mt-[24px] lg:h-[35%] 2xl:h-[150px]'>{elem.title}</h6>
                <p className='mt-[23px] font-sans text-[20px] text-gray-500 leading-[26px]'>{elem.text}</p>
                <a href="/" className=' text-[#FF914D] flex underline decoration-1 sm:mt-[35px] font-mono'>Learn more <img src="./images/icon1.1.png" alt="" className=' w-[25px]' /></a>
              </div>
            )
          }
          <div className=' flex gap-5 mt-5 sm:hidden'>
            {
              questionArray?.map((el,idx)=>
              <div key={idx} onClick={()=>{setActiveQuestion(idx)}} className={` h-[6px] w-[30%] rounded-[50px]  ${idx===activeQuestion?' bg-[#FF914D]':' bg-[#FDDBC5]'}`}></div>)
            }
          </div>
        </div>
      </div>


      <div className=' px-[18px] 2xl:w-[1300px] mx-auto pt-[100px] pb-[80px]'>

        <h1 className=' text-[32px] text-left lg:text-[80px]'>Here is what others <span className=' text-[#FF914D]'>think about us</span></h1>
        <hr className=' sm:mt-[56px] h-0 sm:h-1' />
        <div className='  2xl:w-[1217px]  mx-auto sm:mt-[90px] text-center lg:text-left'>
          {
            usersArray?.map((el, index) =>
              index === activeUser && <div key={index} className=' lg:flex justify-between items-center '>
                <div className=' flex flex-col gap-[10px] h-[140px] '>
                  <h5 className=' text-[24px] lg:text-[42px]'>{el.name}</h5>
                  <p className=' text-[20px] lg:text-[34px] font-mono'>{el.specality}</p>
                  <div className=' text-[20px] lg:text-[20px] flex gap-[7px] mx-auto lg:mx-0'>
                    {
                      el?.star?.map((elem, idx) =>
                        <span key={idx} className={`fa fa-star ${elem === 1 && "text-yellow-500"} ${elem === 0 && "text-yellow-300 opacity-40"}`}></span>
                      )}
                  </div>
                </div>
                <div className=' text-left lg:w-[820px]'>
                  <h6 className=' text-[24px] italic'>{el.title}</h6>
                  <p className=' text-[20px] font-Montserrat font-semibold mt-[31px] leading-[32px]'>{el.text}</p>
                </div>
              </div>)
          }
          <div className=' lg:w-[820px] ml-auto mt-[22px]  flex  justify-between items-center '>
            <button onClick={() => { if (activeUser !== 0) setActiveUser(activeUser - 1) }} className={`${activeUser === 0 && "disabled:pointer-events-none opacity-30"} w-[52px] h-[52px] bg-[#FF914D] text-white text-[35px] font-medium rounded-[50%] flex justify-center items-center`}>{'<'}</button>
            <div className=' flex gap-1'>{usersArray?.map((el, inde) =>
              inde === activeUser ?
                <div key={inde} className=' w-[23px] h-[6px] bg-[#FF914D] rounded-[50px] '></div>
                : <div key={inde} className=' w-[6px] h-[6px] bg-[#ff914d86] rounded-[50px] '></div>
            )}
            </div>
            <button onClick={() => { if (activeUser !== usersArray?.length - 1) setActiveUser(activeUser + 1) }} className={`${activeUser === usersArray?.length - 1 && "disabled:pointer-events-none opacity-30"} w-[52px] h-[52px] bg-[#FF914D] text-white text-[35px] font-medium rounded-[50%] flex justify-center items-center`}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home5Components