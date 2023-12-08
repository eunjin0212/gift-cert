"use client"

import Image from 'next/image'
import banner from '@/lib/banner.json'
import ChevronLeft from '@/icons/chevronLeft.svg'
import ChevronRight from '@/icons/chevronRight.svg'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

export default function Carousel() {
  const { image } = banner

  const [index, setIndex] = useState(1)
  const [transition, setTransition] = useState('');

  const cloneImages = useMemo(() => [image[image.length - 1], ...image, image[0]], [image]);

  const lastImage = cloneImages.length - 1;

  useEffect(() => {
    if (index === lastImage) {
      handleAutoSlide(1)
      return;
    }

    if (index === 0) {
      handleAutoSlide(lastImage - 1)
    };
  }, [cloneImages.length, lastImage, index]);

  const transform = 'transform 500ms ease-in-out'
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(idx => idx + 1)
      setTransition(transform)
    }, 2500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function handleSlide(direction: 'prev' | 'next') {
    direction === 'prev'
      ? setIndex((idx) => idx - 1)
      : setIndex((idx) => idx + 1);
    setTransition(transform);
  }

  function handleAutoSlide(idx: number) {
    setTimeout(() => {
      setIndex(idx);
      setTransition('');
    }, 500);
  }

  const iconClass = 'w-1/12 h-8 z-1 cursor-pointer'

  return (
    <section className='w-full h-96 relative overflow-hidden'>
      <Link href={'/exchange'}>
        <div
          className='`w-full h-full flex items-center'
          style={{ transform: `translateX(-${index}00%)`, transition: `${transition}`, }}
        >
          {cloneImages.map((img, idx) =>
            <div key={`${img.name}_${idx}`} className='w-screen h-full relative flex-none'>
              <Image
                alt={img.name}
                fill={true}
                src={img.link}
                priority
              />
            </div>
          )}
        </div>
        <div
          className='w-full mt-[-15px] h-[30px] absolute top-[50%] flex justify-between items-center'
        >
          <ChevronLeft
            className={iconClass}
            alt='left'
            width={30}
            height={30}
            onClick={() => {
              handleSlide('prev');
            }}
          />
          <ChevronRight
            className={iconClass}
            alt='right'
            width={30}
            height={30}
            onClick={() => {
              handleSlide('next');
            }}
          />
        </div>
      </Link>
    </section>
  )
}
