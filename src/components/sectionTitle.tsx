interface Props {
  title: string;
  description?: string;
}

function SectionTitle(props: Props) {
  const { title, description } = props

  return (
    <div className='form-title text-center mb-12'>
      <h2 className='font-bold text-3xl'>
        {title}
      </h2>
      {description && <div className='inline-flex flex-row mt-2 gap-1'>
        <p>{description}</p>
      </div>}
    </div>
  )
}
export default SectionTitle