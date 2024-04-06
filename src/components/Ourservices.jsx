
import React from 'react'
function Ourservice(props) {
  const { width } = props;
  return (
    <div className={`px-3 ${width}`}>
      <div className=' px-7 md:h-[259px] py-10 mt-5 rounded-2xl shadow-[0px0px_0px_1px#F4F4F51A] border-2 border-[#1F1F1F] bg-[#0E0D0D]  group services hover:before:content-[""] hover:before:absolute hover:before:bg-bg-gradient hover:before:w-full hover:before:h-full hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:right-0 hover:before:z-[-1]  relative overflow-hidden z-10 duration-500 '>
        {props.svg}
        <p className='leading-[18px] font-inter text-[#E4E4E7]  text-lg font-semibold pt-4 '>{props.head}</p>
        <p className='leading-[24px] text-sm font-normal font-inter group-hover:!text-white z-10 text-[#A1A1AA] pt-4 md:max-w-[425px]'>{props.para}</p>
      </div>
    </div >
  )
}

export default Ourservice