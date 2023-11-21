import React from 'react'

const TermsComponent = ({ setModal }) => {
  return (
    <div className='Privacy 2xl:w-[1600px] h-[100vh]  fixed top-0 z-10 mr-auto bg-[#000000a7] '>
      <div className=' w-[90%] h-[80vh] px-4 py-5  rounded-[20px] mt-[10vh]  mx-auto sm:pt-[60px]  bg-white text-black sm:py-[50px] sm:px-[90px] overflow-x-hidden overflow-y-scroll'>
        <div className=' md:h-[100px]'>
          <span className=' flex justify-end text-[24px] lg:text-[28px] font-extralight'><img onClick={() => { setModal(0) }} className=' cursor-pointer' src="./images/close.png" alt="" /></span>
          <h1 className=' text-[24px] lg:text-[56px] lg:leading-[61px]'>Terms of use</h1>
        </div>
        <p className=' text-[12px] lg:text-[16px] lg:leading-[24px] mt-[20px] font-normal'>Lorem ipsum dolor sit amet consectetur. Proin amet libero orci eget ante.
          Dictum faucibus cursus a aenean elementum semper proin accumsan arcu.
          A non est at fringilla ut posuere gravida purus suspendisse. Sed non
          pellentesque ut amet facilisi neque cursus dui sed.
          Eu turpis condimentum vitae fringilla ut semper. Cras purus non eu congue
          sed euismod quis. Ut quis consequat nec metus aliquet sollicitudin a augue.
          Velit cursus dui id amet lacus dignissim iaculis. Elementum massa aliquam
          fermentum sit dui sit placerat. Faucibus morbi blandit neque consectetur
          elementum amet. Sagittis ac est diam vitae purus. Arcu ut sapien sagittis
          mattis nec cum. Egestas ac sed interdum fermentum maecenas. Pulvinar et feugiat
          blandit odio bibendum. Eget a blandit imperdiet quis eleifend sit donec.
          In magna at urna a. Id integer non tincidunt magna. Quis faucibus dolor accumsan
          lobortis. Nullam eu vitae cursus viverra dui maecenas tortor. Curabitur gravida
          augue cursus quis arcu.
          Dictumst aliquam vitae eget felis eu volutpat sem pulvinar. Tellus eros elementum
          faucibus id libero vel. Eget cursus tortor eu magna sed pellentesque. Arcu a sapien
          dui vitae neque tristique. Aliquet id tortor pharetra ut consequat penatibus est
          tortor. Molestie consequat semper vestibulum viverra faucibus. Eu rhoncus fringilla
          vitae tristique faucibus luctus malesuada. At risus auctor cursus urna mauris urna.
          Lacinia viverra nisl cursus lacus ac molestie adipiscing.
          Risus sit dictumst in consequat egestas in ipsum in. Aliquam cursus fringilla
          facilisis pharetra eget eu sagittis tristique. Nisl quam volutpat risus hac. Lectus
          eu leo turpis in. Gravida amet auctor urna sed. Ac in nec pulvinar dignissim enim.
          Imperdiet donec euismod aenean vitae a sit maecenas vestibulum dolor. Nisi tincidunt
          scelerisque quis massa. Arcu gravida iaculis mauris est cum a arcu. Euismod lobortis
          quam dolor est nisi in gravida eget. Tortor placerat gravida fringilla dolor risus
          vitae consectetur.</p>
      </div>
    </div>
  )
}

export default TermsComponent