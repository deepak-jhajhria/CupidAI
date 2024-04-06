import React from 'react'
import { ServiceSvg, ServiceSvg2, ServiceSvg3, ServiceSvg4 } from './Icons'

function Ourservices() {
  return (
    <div className=' bg-black pt-32'>
      <div className='max-w-[966px] px-3 mx-auto '>
        <h2 className='font-inter font-bold leading-[56px] text-white text-5xl text-center'>Our Services</h2>
        <p className='font-inter font-medium text-[#646464] text-2xl text-center mx-auto leading-[30px] lg:max-w-[476px] pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
        <div className='flex flex-row flex-wrap -mx-3 pt-10'>
          <div className='md:w-7/12 w-full px-3 '>
            <div className=' px-7  h-[259px] p-[40px_0px_40px_0px] rounded-[16px] shadow-[0px 0px 0px 0px #0E0D0D] border border-[#202020] bg-[#0E0D0D] services relative overflow-hidden z-10 duration-500 -before:[-z-1] filter-[200px]'>
              <ServiceSvg className='pt-7' />
              <p className='leading-[18px] font-inter text-[#E4E4E7]  text-lg  font-semibold pt-4 '>Content Deepfakes</p>
              <p className='leading-[24px] text-sm font-normal font-inter text-[#A1A1AA] pt-4 md:max-w-[425px]'>Seize control and elevate your business with our hyper-realistic AI content creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.</p>
            </div>
          </div>
          <div className='md:w-5/12 w-full px-3 pt-5 md:pt-0'>
            <div className=' px-7  h-[259px] p-[40px_0px_40px_0px] rounded-[16px] shadow-[0px 0px 0px 0px #0E0D0D] border border-[#202020] bg-[#0E0D0D] services relative overflow-hidden z-10 duration-500 -before:[-z-1] filter-[200px]'>
              <ServiceSvg2 className='pt-7' />
              <p className='leading-[18px] font-inter text-[#E4E4E7]  text-lg  font-semibold pt-4 '>AI Verifications</p>
              <p className='leading-[24px] text-sm font-normal font-inter text-[#A1A1AA] pt-4 md:max-w-[425px]'>Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.</p>
            </div>

          </div>
          <div className='md:w-5/12 w-full px-3 pt-5'>
            <div className=' px-7  h-[259px] p-[40px_0px_40px_0px] rounded-[16px] shadow-[0px 0px 0px 0px #0E0D0D] border border-[#202020] bg-[#0E0D0D] services relative overflow-hidden z-10 '>
              <ServiceSvg3 className='pt-7' />
              <p className='leading-[18px] font-inter text-[#E4E4E7]  text-lg  font-semibold pt-4'>Content Utilities</p>
              <p className='leading-[24px] text-sm font-normal font-inter text-[#A1A1AA] pt-4 md:max-w-[425px]'>Consolidate your resources with our comprehensive content utilities. Access everything you need from a single dashboard.</p>
            </div>
          </div>
          <div className='md:w-7/12 w-full px-3 pt-5 '>
            <div className='max-w-[5 26px] px-7  h-[259px] p-[40px_0px_40px_0px] rounded-[16px] shadow-[0px 0px 0px 0px #0E0D0D] border border-[#202020] services relative overflow-hidden bg-[#0E0D0D] z-10  '>
              <ServiceSvg4 className='pt-7' />
              <p className='leading-[18px] font-inter text-[#E4E4E7]  text-lg  font-semibold pt-4 z-10'>Image Generation</p>
              <p className='leading-[24px] text-sm font-normal font-inter text-[#A1A1AA] pt-4 md:max-w-[425px] '>Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourservices