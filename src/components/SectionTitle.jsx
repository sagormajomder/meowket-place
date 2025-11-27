export default function SectionTitle({ title, desc = '' }) {
  return (
    <div className='text-center mb-12'>
      <h2 className='heading-secondary'>{title}</h2>
      {desc && <p className='text-lg'>{desc}</p>}
    </div>
  );
}
