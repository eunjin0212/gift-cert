'use client';
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
      <Step className='w-2/6' step='03' title='주문정보 입력'>
        <div className='text-lg font-medium'>
          <span className='text-red-400 mr-1'>*</span>은행명
        </div>
      </Step>
    </form>
  )
}
export default Form