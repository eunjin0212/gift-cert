"use client"

import Image from 'next/image'
import banner from '@/lib/banner.json'
import ChevronLeft from '@/icons/chevronLeft.svg'
import ChevronRight from '@/icons/chevronRight.svg'
import { useEffect, useRef, useState } from 'react'

export default function Carousel() {
  const { image } = banner

  const slideRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === image.length - 1) {
        setIndex(0)
        return
      }
      setIndex((idx) => idx + 1)
    }, 3000)
    return () => {
      clearInterval(timer);
    };
  }, [index, image])

  useEffect(() => {
    slideRef.current!.style.transition = "all 1s ease-in-out";
    slideRef.current!.style.transform = `translateX(-${index}00vw)`;
  }, [index])


  const iconClass = 'w-1/12 h-8 z-1 cursor-pointer absolute'
  return (
    <section className='w-full h-96 flex relative justify-between items-center'>
      <ChevronLeft
        className={[iconClass, 'left-0'].join(' ')}
        alt='left'
        width={30}
        height={30}
      />
      <div className='h-96 flex items-center overflow-hidden' style={{minWidth: `${image.length}00%`}} ref={slideRef}>
        {image.map((img) => 
          <div key={img.name} className='min-w-[100vw] w-screen h-96 relative'>
            <Image
              alt={img.name}
              fill={true}
              src={img.link}
              priority
            />
          </div>
        )}
      </div>
      <ChevronRight
        className={[iconClass, 'right-0'].join(' ')}
        alt='right'
        width={30}
        height={30}
      />
    </section>
  )
}
