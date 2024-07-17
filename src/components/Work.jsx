import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <div className='w-full min-h-[100vh] px-[8vw]  py-[3vh] md:py-[7vh]  md:px-[16vw] bg-[#FFFFFF]'>
          <div className="workt relative">
            <div className='flex items-center gap-4 mt-[7vh]'>
                <span className='inline-block w-[3vw] md:w-[2vw]'><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg></span>
                <h2 className='font-medium font-["TWK_Lausanne_400"] text-lg'>Featured Project</h2>
            </div>
            <div className='work font-["TWK_Lausanne_400"] overflow-hidden  '>
                <motion.span initial={{rotate: 5 , y: "100%" , opacity:0 }} viewport={{once: true}} whileInView={{rotate : 0 , y : 0  , opacity:1}} transition={{ease:[0.76, 0, 0.24, 1] , duration: .7 ,delay : .2 ,staggerChildren : 1}} className='text-[#000000] text-6xl md:text-8xl font-medium leading-[7.9vh] md:leading-[33vh] inline-block md:font-light md:tracking-tighter tracking-tight'><h1 className='text-6xl font-extralight mt-[3vh] md:text-[29vh] md:pb-[5vh]'>Work</h1></motion.span>
            </div>
            <div className="para2 mt-[4vh] relative md:absolute md:w-[40%] md:right-0 md:font-medium md:text-lg ">
                <p>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
            </div>
          </div>
          <div className="workbooth">
           <div className="workbooth-sub1 relative md:flex md:flex-row md:h-fit ">
           <div className="card1  h-[62vh] mt-[3.3vh] md:w-[43vw]  relative">
                 <div className="div w-full h-[54vh] md:h-[80vh] pr-[1vh]  relative">
                    <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a" className='w-full object-cover z-[9] h-full'></video>
                    <motion.img  whileHover={{opacity : 0}}   src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)" className=' w-full z-[999] h-full object-covere absolute top-0 left-0 md:block hidden opacity-1 pr-[1vh]' alt="" />
                 </div>
                 <div className="boothtext  flex flex-col md:flex-row md:gap-2 mt-[2vh] gap-1">
                    <h1 className='font-xs font-medium leading-none'>Columbia Pictures</h1>
                    <h2 className='font-xs font-light text-slate-400 leading-none'>Celebrating a Century Of Cinema</h2>
                 </div>
            </div>
            <div className="card2  h-[62vh] mt-[3.3vh] md:mt-[50vh] md:pl-[20vh] relative">
                 <div className="div w-full h-[54vh] relative">
                    <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b" className='w-full object-cover z-[9] h-full'></video>
                    <motion.img  whileHover={{opacity : 0}}  src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)" className='absolute  w-full z-[999] h-full object-cover  top-0 left-0 md:flex hidden ' alt="" />
                 </div>
                 <div className="boothtext  flex flex-col md:flex-row md:gap-2 mt-[2vh] gap-1">
                    <h1 className='font-xs font-medium leading-none'>Rino 7 Pille</h1>
                    <h2 className='font-xs font-light text-slate-400 leading-none'>Effortless Chic Lifestyle</h2>
                 </div>
            </div>
           </div>
            <div className="workbooth-sub2 md:flex md:flex-row md:mt-[12vh]">
            <div className="card3  h-[62vh] md:mt-[70vh] md:pr-[16vh] mt-[3.3vh] relative">
                 <div className="div w-full h-[54vh] relative">
                    <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15" className='w-full object-cover h-full'></video>
                    <motion.img  whileHover={{opacity : 0}}  src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)" className='absolute w-full h-full object-coverolute top-0 left-0 md:flex hidden' alt="" />
                 </div>
                 <div className="boothtext  flex flex-col md:flex-row md:gap-2 mt-[2vh] gap-1">
                    <h1 className='font-xs font-medium leading-none'>Aebella Interriors</h1>
                    <h2 className='font-xs font-light text-slate-400 leading-none'>Luxirous design experience</h2>
                 </div>
            </div>
            <div className="card4  h-[62vh] md:w-[30vw] mt-[3.3vh] relative">
                 <div className="div w-full h-[54vh] md:h-[80vh] relative">
                    <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076" className='w-full object-cover h-full'></video>
                    <motion.img  whileHover={{opacity : 0}}  src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)" className='absolute w-full h-full object-cover top-0 left-0 md:flex hidden' alt="" />
                 </div>
                 <div className="boothtext  flex flex-col md:flex-row md:gap-2 mt-[2vh] gap-1">
                    <h1 className='font-xs font-medium leading-none'>Pixelflakes</h1>
                    <h2 className='font-xs font-light text-slate-400 leading-none'>Architectal Marketing Agency</h2>
                 </div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Work