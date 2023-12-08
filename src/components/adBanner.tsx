import Exchange from '@/icons/exchange.svg'
import Clock from '@/icons/clock.svg'

function AdBanner() {
  return (
    <section className='flex justify-between items-center px-20 py-12 bg-slate-100'>
      <h2 className='text-xl'>
        <strong className='text-blue-400 mr-2'>회원가입 없이</strong>간편하게
        <strong className='text-blue-400 ml-2'>상품권 현금화</strong>를 해보세요.
      </h2>
      <div className='flex flex-nowrap gap-10'>
        <dl className='flex items-center'>
          <dt className='text-blue-400 mr-4'>
            <Clock className='w-[70px] h-[70px] rounded-full bg-white px-2 py-2 shadow-[0_0_0.6rem_0_rgba(0,0,0,.15)]' />
          </dt>
          <dd className='flex flex-col'>
            <small className='text-base'>평균 처리시간</small>
            <strong className='text-2xl'>
              <span className='text-blue-400'>3</span>초
            </strong>
          </dd>
        </dl>
        <dl className='flex items-center'>
          <dt className='text-blue-400 mr-4'>
            <Exchange className='w-[70px] h-[70px] rounded-full bg-white px-2 py-2 shadow-[0_0_0.6rem_0_rgba(0,0,0,.15)]' />
          </dt>
          <dd className='flex flex-col'>
            <small className='text-base'>총 거래 횟수</small>
            <strong className='text-2xl'>
              <span className='text-blue-400'>151,398</span>회</strong>
            </dd>
        </dl>
      </div>
    </section>
  )
}
export default AdBanner