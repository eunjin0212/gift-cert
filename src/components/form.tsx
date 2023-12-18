'use client';
import Input from './input';
import Step from './step'

function Form() {

  function handleSubmit() {
    //
  }

  return (
    <form 
      onSubmit={() => handleSubmit()} 
      className='flex flex-row max-w-[80rem] w-full mx-auto gap-7'
    >
      <div className='w-4/6'>
        <Step className='mb-9' step='01' title='상품권 종류 선택'>
          <div className='text-lg font-medium'>판매할 상품권 종류 선택</div>
        </Step>
        <Step step='02' title='상품권 핀번호 입력'>
          <div className='text-lg font-medium'>핀번호 추출하기</div>
        </Step>
      </div>
      <Step className='w-2/6' childrenClass='flex flex-col gap-6' step='03' title='주문정보 입력'>
        <Input name='name' type='tel' label='예금주 이름' required />
        <Input name='bankNumber' type='tel' label='계좌번호' required />
        <Input name='phoneNumber' type='tel' label='휴대폰 번호' required />
      </Step>
    </form>
  )
}
export default Form