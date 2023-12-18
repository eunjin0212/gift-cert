import Link from 'next/link'
import ArrowRight from '@/icons/arrowRight.svg'
import type Orders from '@/types/orders'

function Orders() {
  const getRandomName = () => {
    const firstName = '김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구'
    const lastName = '가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련'
    
    const randomIdx = (length: number) => Math.floor(Math.random() * length)

    return `${firstName.split('')[randomIdx(firstName.length)]}*${lastName.split('')[randomIdx(lastName.length)]}`
  }

  return (
    <article className='w-full min-h-[540px] py-14 px-[3.5rem] rounded-2xl shadow-[0_0_1rem_0_rgba(0,0,0,.1)]'>
      <Link href={'/notice'} className='text-2xl font-semibold flex items-center'>
        실시간 판매내역
        <ArrowRight className='ml-1 w-7 h-7 text-blue-400' />
      </Link>
      <p className='text-sm font-light mb-4 mt-2'>최근에 판매된 내역을 보실 수 있습니다.</p>
      <ul>
          <li
            className=''
          >
            {getRandomName()}
          </li>
      </ul>
    </article>
  )
}

export default Orders