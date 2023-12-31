import { ReactNode } from 'react';

interface Props {
  step?: string;
  title?: string;
  className?: string;
  childrenClass?: string;
  children: ReactNode
}
function Step(props: Props) {
  const { step, title, children, className, childrenClass } = props
  
  return (
    <div className={className}>
      {(step || title) && <div className='flex flex-col mb-3.5'>
        {step && <h4 className='font-bold text-md text-teal-400 mb-2'>STEP {step}</h4>}
        {title && <h1 className='font-medium text-[1.2rem]'>{title}</h1>}
      </div>}
      <div 
        className={
          [
            'p-11 bg-white rounded-2xl shadow-[0_0_1rem_0_rgba(0,0,0,.1)]', 
            childrenClass
          ].join(' ')
        }
      >
        {children}
      </div>
    </div>
  )
}

export default Step