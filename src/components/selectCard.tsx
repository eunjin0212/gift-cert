import Image from 'next/image';
import CheckRound from '@/assets/checkRound.svg'
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
  const isChecked = useMemo(() => value === name, [value, name])
  return (
    <div 
      className={['transition-all duration-500 relative flex flex-col items-center justify-center rounded-2xl py-[1.15rem] w-full', isChecked ? 'bg-main-positive text-white' : 'bg-main-secondary text-main-placeholder'].join(' ')}
      onClick={() => {
        onClick(name)
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt='gift cert' className='w-[2.7rem] mx-auto rounded-lg shadow-[0_0_1rem_0_rgba(0,0,0,.08)]' />
      <label className='text-center whitespace-pre-line my-4 font-medium text-sm'>
        <input
          type='radio'
          className='hidden'
          name={name}
          value={name}
          checked={value === name}
        />
        {label}
      </label>
      <CheckRound className={['round-check', isChecked ? 'border-white bg-white text-main-positive' : 'border-main-not-selected text-main-not-selected bg-transparent'].join(' ')} />
    </div>
  )
}
export default SelectCard