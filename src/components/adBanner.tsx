import Exchange from '@/assets/exchange.svg'
import Clock from '@/assets/clock.svg'
import type { ReactNode } from 'react'
import Image from 'next/image';

interface BannerStatisticsTextProps {
  icon: ReactNode
  label: string;
  count: string;
  text: string;
}

function BannerStatisticText (props: BannerStatisticsTextProps) {
  const { icon, label, count, text } = props
  
  return (
    <dl className='flex items-center'>
      <dt className='text-blue-400 mr-4'>
        {icon}
      </dt>
      <dd className='flex flex-col'>
        <small className='text-base'>{label}</small>
        <strong className='text-2xl'>
          <span className='text-blue-400'>{count}</span>{text}
        </strong>
      </dd>
    </dl>
  )
}

function AdBanner() {
  const iconClass = 'w-[70px] h-[70px] rounded-full bg-white px-2 py-2 shadow-[0_0_0.6rem_0_rgba(0,0,0,.15)]'
  return (
    <section>
      <article className='flex justify-between items-center px-20 py-12 bg-slate-100'>
        <h2 className='text-xl'>
          <strong className='text-blue-400 mr-2'>회원가입 없이</strong>간편하게
          <strong className='text-blue-400 ml-2'>상품권 현금화</strong>를 해보세요.
        </h2>
        <div className='flex flex-nowrap gap-10'>
          <BannerStatisticText 
            icon={<Clock className={iconClass} />}
            label='평균 처리시간'
            count='3'
            text='초'
            />
          <BannerStatisticText 
            icon={<Exchange className={iconClass} />}
            label='총 거래 횟수'
            count='151,398'
            text='회'
            />
        </div>
      </article>
      <article className='relative w-full py-16 flex items-center justify-center'>
        <Image src='/assets/ad.png' alt='ad' height={176} width={1146} className='bg-slate-100' />
      </article>
    </section>
  )
}
export default AdBanner