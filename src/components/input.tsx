import { FormEvent } from 'react';
import Label from './label'

interface Props {
  label: string;
  required: boolean;
  type: 'tel' | 'text'
  name: string;
  placeholder?: string;
}

function Input (props: Props){
  const { label, required, type, name, placeholder } = props
  
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
      <Label label={label} required={required} />
      <input 
        type={type}
        name={name}
        onInput={handleInput}
        placeholder={placeholder || label}
        className='bg-neutral-100 focus:outline-none px-3 py-3.5 text-sm w-full placeholder:text-main-placeholder'
      />
    </div>
  )
}
export default Input