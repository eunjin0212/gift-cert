"use client"

import banner from '@/lib/banner.json'
import Image from 'next/image'
import ChevronLeft from '@/icons/chevronLeft.svg'
import ChevronRight from '@/icons/chevronRight.svg'
import { useEffect, useRef, useState } from 'react'

export default function Carousel() {
  const { image } = banner

  const slideRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(()=> {
    setInterval(() => {
      // console.log(index)
      if(index === image.length) {
        // setIndex(0)
      } else {
        // setIndex((idx) => idx + 1)
      }
    }, 1000)
  }, [])
  
  useEffect(() => {
    slideRef.current!.style.transition = "all 0.5s ease-in-out";
    slideRef.current!.style.transform = `translateX(-${index}00%)`; 
  }, [index])


  return (
    <section className='w-full h-96 flex relative justify-between items-center'>
      <ChevronLeft
        className='w-1/12 h-8 z-1 cursor-pointer'
        alt='left'
        width={30}
        height={30}
      />
      <div className='h-96 w-auto flex overflow-hidden left-0' ref={slideRef}>
        {image.map((img) => 
          <Image
            className='object-fill w-screen min-w-full h-96'
            key={img.name}
            alt={img.name}
            width={1900}
            height={384}
            src={img.link}
            placeholder='empty'
            priority={true}
          />
        )}
      </div>
      <ChevronRight
        className='w-1/12 h-8 z-1 cursor-pointer'
        alt='right'
        width={30}
        height={30}
      />
    </section>
  )
}
