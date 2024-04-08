
function Ourservice(props) {
  const { width } = props;
  return (
    <div id="service" className={`px-2 mt-4 ${width}`}>
      <div className=' px-7 md:h-[259px] sm:py-10 py-5 h-full transition before:duration-300  before:opacity-0 hover:before:opacity-[0.6] ease-in-out rounded-2xl shadow-[0px0px_0px_1px_#F4F4F51A] border-2 border-mid-gray bg-off-black  group hover:before:absolute hover:before:bg-bg-gradient hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:right-0 hover:before:-z-10  relative overflow-hidden z-10 duration-500 '>
        {props.svg}
        <p className='pt-3 text-lg font-semibold leading-4 md:pt-4 text-mid-white extratightest '>{props.head}</p>
        <p className='leading-6 text-sm  font-normal group-hover:!text-white z-10 text-off-white pt-2 md:pt-4 md:max-w-[425px]  midtighter'>{props.para}</p>
      </div>
    </div >
  )
}

export default Ourservice