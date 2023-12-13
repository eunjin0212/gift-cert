import { ReactNode } from 'react';

interface Props {
  step: string;
  title: string;
  children: ReactNode
}
function Step(props: Props) {
  const { step, title, children } = props
  return (
    <div>
      <div className='flex flex-col'>
        <h4 className='font-bold text-md'>STEP {step}</h4>
        <h1 className='font-medium text-[1.2rem]'>{title}</h1>
      </div>
      <div className='bg-white'>
        {children}
      </div>
    </div>
  )
}

export default Step