
function Ourservice(props) {
  const { width } = props;
  return (
    <div className={`px-2 mt-4 ${width}`}>
      <div className=' px-7 md:h-[259px] sm:py-10 py-5 h-full rounded-2xl shadow-[0px_0px_0px_1px_#F4F4F51A] border-2 border-mid-gray bg-off-black  group hover:bg-bg-gradient duration-500'>
        {props.svg}
        <p className='pt-4 text-lg font-semibold leading-4 text-gray-white2 '>{props.head}</p>
        <p className='leading-6 text-sm font-normal group-hover:!text-white z-10 text-off-white pt-4 md:max-w-[420px]'>{props.para}</p>
      </div>
    </div >
  )
}

export default Ourservice