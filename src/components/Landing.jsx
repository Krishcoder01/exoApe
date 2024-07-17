import { motion } from 'framer-motion'
import React from 'react'

const Landing = () => {
  return (
    <div className='md:h-[270vh]  h-[150vh] w-full relative'>
        <div className="heros w-full h-full  overflow-hidden">
            <img data-scroll data-scroll-speed="-1" src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-full absolute top-0 left-0  px-[8vw]  py-[3vh] md:py-[7vh]  md:px-[10vw]'>
            <div className="para1 h-fit overflow-hidden mt-[43vh] md:mt-[46vh] ">
                {[" Global digital design studio partnering " ,"with brands and businesses that create " ,"exceptional experiences where people " ,"live, work, and unwind. "].map((item,index) => (
                   <div className="pelem overflow-hidden">
                    <motion.p initial={{rotate: 5 , y: "100%" }} animate={{rotate : 0 , y : 0 }} transition={{ease:[0.76, 0, 0.24, 1] , duration: 1.6 ,delay : index*.2 ,staggerChildren : 1}} key={index} className='text-white leading-normal text-lg md:text-2xl font-lighter  origin-left  tracking-tight  font-["TWK_Lausanne_400"]'>{item}</motion.p>
                   </div>
                ))}
            </div>
            <div className="main-head mt-[4.2vh] md:mt-[12vh] ">
                {["Digital" , "Design" , "Experience"].map((item,index) => (
                    <div className="helem overflow-hidden">
                    <motion.h1 key={index} initial={{rotate: 5 , y: "100%" }} animate={{rotate : 0 , y : 0 }} transition={{ease:[0.76, 0, 0.24, 1] , duration: 1.6 ,delay : index*.4 ,staggerChildren : 1}} className='text-white text-6xl md:text-[30vh] font-["TWK_Lausanne_400"] font-medium origin-left leading-[7.9vh] md:leading-[33vh] md:font-light md:tracking-tighter tracking-tight'>{item}</motion.h1>
                    </div>
                ))}
            </div>
            <div className="lpara text-white md:w-1/2 md:text-2xl text-lg leading-tight mt-[8vh] md:mt-[12vh]">
                <p>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
            </div>
            <div className="lhero">
                <span className='text-lg border-b-[1px] text-white mt-[7vh] md:text-2xl md:mt-[8vh] inline-block border-white '>The Studio</span>
            </div>
        </div>
        
    </div>
  )
}

export default Landing