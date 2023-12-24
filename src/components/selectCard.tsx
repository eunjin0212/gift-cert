import Image from 'next/image';
import CheckRound from '@/icons/checkRound.svg'
import { useMemo, useState } from 'react';

interface Props {
  img: string;
  label: string;
  value: string;
  name: string;
  onClick: (arg: string) => void
}
function SelectCard(props: Props) {
  const { img, label, value, name, onClick } = props
  const [checked, setChecked] = useState(value)
  const checkClass = 'stroke-2 w-9 h-9 p-[2px] rounded-full border-4'
  const isChecked = useMemo(() => checked === name, [checked, name])
  return (
    <div 
      className={['transition-all duration-500 relative flex flex-col items-center justify-center rounded-2xl py-[1.15rem] w-full', isChecked ? 'bg-main-positive text-white' : 'bg-main-secondary text-main-placeholder'].join(' ')}
      onClick={() => {
        setChecked(name)
        onClick(name)
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt='gift cert' className='w-[2.7rem] mx-auto overflow-hidden shadow-[0_0_1rem_0_rgba(0,0,0,.08)]' />
      <label className='w-1/2 text-center break-words my-4 font-medium text-sm'>
        <input
          type='radio'
          className='hidden'
          name={name}
          value={checked}
        />
        {label}
      </label>
      <CheckRound className={[checkClass, isChecked ? 'border-white bg-white text-main-positive' : 'border-main-not-selected text-main-not-selected bg-transparent'].join(' ')} />
    </div>
  )
}
export default SelectCard