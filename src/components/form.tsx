'use client';
import Step from './step'

function Form() {

  function handleSubmit() {
    //
  }

  return (
    <form onSubmit={() => handleSubmit()}>
      <Step step='01' title='상품권 종류 선택'>
        <div>^^</div>
      </Step>
    </form>
  )
}
export default Form