'use client';
import { useState } from 'react';
import Input from './input';
import Label from './label';
import SelectCard from './selectCard';
import Step from './step'
import giftCertificates from '@/lib/giftCertificates.json'

function Form() {
  function handleSubmit() {
    //
  }

  const [checked, setChecked] = useState('')
  return (
    <form
      onSubmit={() => handleSubmit()}
      className='flex flex-row max-w-[80rem] w-full mx-auto gap-7'
    >
      <div className='w-4/6'>
        <Step className='mb-9' step='01' title='상품권 종류 선택'>
          <div className='text-lg font-medium'>판매할 상품권 종류 선택</div>
          <div className='mt-[18px] grid grid-cols-6 gap-2'>
            {giftCertificates.data.map((giftCert) => 
              <SelectCard
                key={giftCert.name}
                label={giftCert.label}
                img={giftCert.img}
                name={giftCert.name}
                value={checked}
                onClick={(val) => setChecked(val)}
              />
            )}
          </div>
        </Step>
        <Step step='02' title='상품권 핀번호 입력'>
          <div className='text-lg font-medium'>핀번호 추출하기</div>
        </Step>
      </div>
      <Step className='w-2/6' childrenClass='flex flex-col gap-6' step='03' title='주문정보 입력'>
        <div>
          <Label required label='은행명' />
          <button
            type='button'
            className='bg-neutral-100 focus:outline-none px-3 py-3.5 text-sm w-full text-left text-main-placeholder'
          >
            선택해 주세요.
          </button>
        </div>
        <Input name='name' type='tel' label='예금주 이름' required placeholder='고객명(예금주명)' />
        <Input name='bankNumber' type='tel' label='계좌번호' required placeholder='입금받으실 계좌번호' />
        <Input name='phoneNumber' type='tel' label='휴대폰 번호' required />
      </Step>
    </form>
  )
}
export default Form