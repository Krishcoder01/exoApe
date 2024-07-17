import React from 'react'

const Footer = () => {
    // /video/video-6.mp4
  return (
    <div className='w-full min-h-[80vh] bg-black text-white relative font-["TWK_Lausanne_400"]'>
        <div className='max-w-screen-xl mx-auto relative px-[2vh] '>
        <div className='absolute top-0 right-0 md:w-[67%] w-[50%] py-10  z-[8] h-[36vh] md:h-[52vh] '>
                
                <video autoPlay muted loop src="/video-6.mp4" className=' w-full h-full z-[8] object-contain'></video>
        </div>
        <div className="div z-[1000] pt-[9vh] text-[#DFCCBB]">
        <h1 className='text-6xl z-[100] md:text-[18vh]'>Our</h1>
        <h1 className='text-6xl z-[100] md:text-[18vh]'>Story</h1>
        <p className='md:w-[50%] w-[70%] md:text-2xl text-md mt-[7vh] z-[999] '>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        </div>
        <div className='max-w-screen-xl mx-auto h-[1px] bg-[#DFCCBB] rounded-lg md:mt-[8vh] mt-[5vh] '></div>
            
        </div>
    </div>
  )
}

export default Footer