import notice from '@/lib/notice.json'
import type Notice from '@/types/notice'
import Link from 'next/link'
import ArrowRight from '@/icons/arrowRight.svg'
import { useMemo } from 'react'

function Notice() {
  const { notification }: Notice = notice

  const thisMonth = useMemo(() => (date: string) => {
    const month = new Date().getMonth() + 1
    return new Date(date).getMonth() + 1 === month
  }, [])

  return (
    <article className='w-2/5 min-w-[40%] min-h-[540px] py-14 px-[3.5rem] rounded-2xl shadow-[0_0_1rem_0_rgba(0,0,0,.1)]'>
      <Link href={'/notice'} className='text-2xl font-semibold flex items-center'>
        공지사항
        <ArrowRight className='ml-1 w-7 h-7 text-blue-400' />
      </Link>
      <p className='text-sm font-light mb-4 mt-2'>공지사항과 이벤트 소식을 알려드립니다.</p>
      <ul>
        {notification.map((noti) =>
        (
          <li
            key={noti.id}
            className={[
              'w-full h-12 flex flex-row items-center justify-between border-b border-b-neutral-300 relative pl-4',
              thisMonth(noti.create_at) && 'text-red-400 before:absolute before:contents-[""] before:left-0 before:top-0 before:w-4 before:h-4 before:rounded-[0_0_100em_0] before:bg-red-400'
            ].join(' ')}
          >
            <span>{noti.title}</span><span className='text-gray-400 text-xs'>{noti.create_at}</span>
          </li>
        )
        )}
      </ul>
    </article>
  )
}

export default Notice