import { useGSAP } from '@gsap/react'
import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const News = () => {
  var first = useRef()
  var second = useRef()
  var third = useRef()
  var four = useRef()
  var parent = useRef()

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger : {
        trigger : parent.current,
        top : '0 0',
        scrub : 1 ,
    }
    })
    tl.to(first.current , {
      ease : Power4,
      x : '40%',
    } ,'a').to(second.current , {
      ease : Power4,
      x : '-40%',
    } ,'a').to(third.current , {
      ease : Power4,
      x : '40%',
    } ,'a').to(four.current , {
      ease : Power4,
      x : '-40%',} , 'a')
     
  })
  

  return (
    <div ref={parent} className='w-full md:min-h-[160vh] min-h-[75vh] '>
        <div className="part1 max-w-screen-lg md:h-[130vh] h-[80vh] pt-[17vh] flex justify-center   mx-auto md:pt-[25vh]  w-full  md:px-[4vh]">
            <div className='bg-green-200 w-[50%] md:h-[90%] h-[50%] relative '>
              <div ref={first} className='md:w-56 md:h-[15rem] w-20 h-[7rem]  absolute top-5 -right-1/3 md:top-9'>
              <img src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" className='w-full h-full object-cover' alt="" />
              </div>
              <div ref={second} className='w-32 h-[7rem]  absolute md:w-96 top-[6vh]  md:h-[13rem] md:-left-1/2 -left-16 md:top-[40vh]'>
              <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4" className='w-full h-full object-cover' alt="" />
              </div>
              <div ref={third} className='w-28 absolute md:-right-3/4 md:w-80 md:h-[24rem] md:-bottom-40 -right-14 -bottom-28 right  h-[10rem] '>
              <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4" className='w-full h-full object-cover' alt="" />
              </div>
              <div ref={four} className='w-24 h-[7rem] absolute -bottom-28 md:-bottom-44 md:w-96 md:-left-64 md:h-[14rem] -left-10 '>
              <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" className='w-full h-full object-cover' alt="" />

              </div>
              <img src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" className='w-full h-full object-cover' alt="" />
            </div>
        </div>
    </div>
  )
}

export default News