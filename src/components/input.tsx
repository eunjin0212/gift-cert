import { FormEvent } from 'react';

interface Props {
  label: string;
  required: boolean;
  type: 'tel' | 'text'
  name: string;
}

function Input (props: Props){
  const { label, required, type, name } = props
  
  function handleInput(event: FormEvent<HTMLInputElement>) {
    if (type === 'text') {
      return;
    }

    const { target } = event;
    if(target instanceof HTMLInputElement) {
      target.value = target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
  }

  return (
    <div>
      <p className='text-lg font-medium mb-2'>
        {required && <span className='text-red-400 mr-1 text-base'>*</span>}
        {label}
      </p>
      <input 
        type={type}
        name={name}
        onInput={handleInput}
        placeholder={label}
        className='bg-neutral-100 focus:outline-none p-3 w-full'
      />
    </div>
  )
}
export default Input