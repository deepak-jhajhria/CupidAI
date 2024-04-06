import React from 'react'

function Pricing() {
    return (
        <div>
            <div className='max-w-[966px] px-3 mx-auto pt-32 '>
                <h2 className='font-inter font-bold leading-[56px] text-white text-5xl text-center'>Pricing</h2>
                <p className='font-inter font-medium text-[#646464] text-2xl text-center mx-auto leading-[30px] max-w-[476px] pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                <div className='flex flex-row flex-wrap -mx-3'>
                    <div className='md:w-4/12'>
                        <div className='max-w-[404px] px-5 h-[675px] border border-[#4c4c4c] rounded-[24px]'>
                            <p className='font-inter pt-4 font-medium text-lg leading-[28px] text-white '>Indivisual</p>
                            <p className='font-inter pt-4 font-medium text-base leading-[22px] text-[#a3a8ae]'>Everything you need to supercharge your
                                productivity.</p>
                            <div className='flex pt-5 gap-1 border-b border-[#4c4c4c]'>
                                <p className='font-inter font-semibold text-white leading-[40px] text-4xl'>£24</p>
                                <p className='font-inter pt-4 font-medium text-2sm leading-[22px] text-[#a3a8ae] pb-9 '>/ month</p>
                                <p className=''>What’s included</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing