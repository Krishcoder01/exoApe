import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const PlayReel = () => {

  const play = useRef()
  const reel = useRef()
  const vdeodiv = useRef()
  const parent = useRef()
  
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger : {
        trigger : parent.current,
        top : '0 0',
        scrub : 1 ,
        pin : true,
    }
    })
     tl.to( vdeodiv.current ,{
      width : '105%',
      height : '105%',
      ease : Power4 ,  
     } , 'a').to(play.current , {
      ease : Power4,
      scale : 1.5,
      x : '50%',
     } ,'a').to(reel.current , {
      ease : Power4,
      scale : 1.5,
      x : '-50%',
     } , 'a')

  })
  return (
    <div ref={parent} className='w-full h-screen flex justify-center items-center bg-black relative overflow-hidden'>
        <div className='flex absolute top-1 left-1/2 -translate-x-[50%] items-center justify-center text-white  gap-4 pt-[7vh]'>
                <span className='inline-block w-[2vw] md:w-[1vw]'><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg></span>
                <h2 className='font-medium font-["TWK_Lausanne_400"] text-base'>Work In Motion</h2>
        </div>
        <div ref={vdeodiv} className="videodiv md:h-[40%] h-[20%] md:w-[30%]  relative w-[50%] ">
            <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a" className='w-full h-full object-cover'></video>
        <div  className="playreeldiv flex capitalize text-white items-center md:gap-[70vh] gap-52 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <h2 ref={play} className='md:text-[20vh] text-[8vh] '>play</h2>
        <h2 ref={reel} className='md:text-[20vh] text-[8vh] '>Reel</h2>
        </div>
        </div>
        <div className="ldiv flex justify-center items-center md:w-1/2 w-[95%] text-white absolute bottom-8 left-1/2 -translate-x-1/2">
           <p className='md:w-[50%] w-[90%] text-center'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
        </div>
    </div>
  )
}

export default PlayReel