
import React from 'react'
function Ourservice(props) {
  const { width } = props;
  return (
    <div className={`px-3 mt-5 ${width}`}>
      <div className=' px-7 md:h-[259px] sm:py-10 py-5 h-full  rounded-2xl shadow-[0px0px_0px_1px_#F4F4F51A] border-2 border-dark-black bg-off-black  group  hover:before:content-[""] hover:before:absolute hover:before:bg-bg-gradient hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:right-0 hover:before:z-[-1]  relative overflow-hidden z-10 duration-500 '>
        {props.svg}
        <p className='leading-[18px]  text-mid-white text-lg font-semibold pt-4 '>{props.head}</p>
        <p className='leading-[24px] text-sm font-normal group-hover:!text-white z-10 text-off-white pt-4 md:max-w-[425px]'>{props.para}</p>
      </div>
    </div >
  )
}

export default Ourservice