interface Props {
  title: string;
  description?: string;
}

function SectionTitle(props: Props) {
  return (
    <div className='form-title text-center mb-12'>
      <h2 className='font-bold text-3xl'>
        {props.title}
      </h2>
      {props.description && <div className='inline-flex flex-row mt-2 gap-1'>
        <p>{props.description}</p>
      </div>}
    </div>
  )
}
export default SectionTitle