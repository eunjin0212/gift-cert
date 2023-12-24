interface Props {
  label: string;
  required: boolean;
}

function Label(props: Props) {
  const { label, required } = props
  return (
    <p className='text-lg font-medium mb-2'>
      {required && <span className='text-red-400 mr-1 text-base'>*</span>}
      {label}
    </p>
  )
}

export default Label