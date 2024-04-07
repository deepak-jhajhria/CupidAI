import React, { useState } from 'react'
import { GreenStar, GreenTick, RedStar, WhiteTick } from './Icons'

const includedata = [
    {
        includedata1: "Calculator, Quicklinks, Snippets, Window Management, and many more core features",
    },
    {
        includedata1: "More than 1000 Extensions",
    },
    {
        includedata1: "Custom Extensions",
    },
    {
        includedata1: "Developer Tools",
    },
]

const enterpreneurdata = [
    {
        includedata1: "Everything in Free"
    },
    {
        includedata1: "Raycast AI"
    },
    {
        includedata1: "Cloud Sync"
    },
    {
        includedata1: "Custom Themes"
    },
    {
        includedata1: "Unlimited Clipboard History"
    },
]

const business = [
    {
        includedata1: "Everything in Pro"
    },
    {
        includedata1: "Unlimited Shared Commands"
    },
    {
        includedata1: "Unlimited Shared Quicklinks"
    },
    {
        includedata1: "Unlimited Shared Snippets"
    },
    {
        includedata1: "Unlimited Team Members"
    },
]

const pricedata = [
    {
        heading: "Indivisual",
        para: "Everything you need to supercharge your productivity.",
        includedata: (<>
            <div className='flex gap-4 flex-col mb-[85px]'>
                {includedata.map((line) => {
                    return (
                        <div className='flex gap-3 '>
                            <div>
                                <WhiteTick />
                            </div>
                            <p className='text-2sm font-medium text-[#FFFFFF99] leading-[147%]'>{line.includedata1}</p>
                        </div>
                    )
                })}
            </div>
        </>),
        monthdata: (
            <>
                <div className='flex items-baseline gap-1'>
                    <h3 className='font-semibold text-5xl text-white'>£24</h3>
                    <p className='font-medium text-2sm text-[#FFFFFF99] leading-[147%]'>/ month</p>
                </div>
            </>
        ),
        billed: (
            <>
                <div className='bg-whitegradient w-full h-[1px] my-[48px]'>
                </div>
            </>
        )
    },
    {
        heading: "Entrepreneur",
        para: "Unlock a new level of your personal productivity.",
        includedata: (<>
            <div className='flex gap-4 flex-col mb-[147px]'>
                {enterpreneurdata.map((line) => {
                    return (
                        <div className='flex gap-3'>
                            <div>
                                <GreenTick />
                            </div>
                            <p className='text-2sm font-medium text-[#FFFFFF99] leading-[147%]'>{line.includedata1}</p>
                        </div>
                    )
                })}
                <div className='flex gap-3'>
                    <div>
                        <GreenStar />
                    </div>
                    <p className='text-2sm font-medium text-[#FFFFFF99] leading-[147%]'>More Coming Soon</p>
                </div>
            </div>
        </>),
        monthdata: (
            <>
                <div className='flex items-baseline gap-1'>
                    <h3 className='font-semibold text-5xl text-white'>£34</h3>
                    <p className='font-medium text-2sm text-[#FFFFFF99] leading-[147%]'>/ month</p>
                    <button className='py-[4px] px-[8px] bg-[#FF6363] text-[#110E19] font-semibold text-xs leading-[100%] rounded-[24px]' >-20%</button>
                </div>
            </>
        ),
        billed: (
            <>
                <div className='relative flex items-center justify-center mt-[32px] mb-[35px]'>
                    <button className='text-2sm font-medium text-white leading-[100%] text-center mx-auto py-[4px] px-[12px] bg-[#FFFFFF1A] rounded-[10px] top-[-14px] relative z-10'>£408 billed annually</button>
                    <div className='bg-whitegradient absolute w-full h-[1px] bottom-[25px] left-0 right-0 z-[1]'>
                    </div>
                </div>
            </>
        )

    },
    {
        heading: "Business",
        para: "Supercharge your team and maximize productivity.",
        includedata: (<>
            <div className='flex gap-4 flex-col mb-[103px]'>
                <div className='flex gap-4 flex-col'>
                    {business.map((line) => {
                        return (
                            <div className='flex gap-3 '>
                                <div>
                                    <WhiteTick />
                                </div>
                                <p className='text-2sm font-medium text-[#FFFFFF99] leading-[147%]'>{line.includedata1}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex gap-3'>
                    <div>
                        <RedStar />
                    </div>
                    <p className='text-2sm font-medium text-[#FFFFFF99] leading-[147%]'>More Coming Soon</p>
                </div>
            </div>
        </>),
        monthdata: (
            <>
                <div className='flex items-center gap-1'>
                    <h3 className='font-semibold text-5xl text-white'>£120</h3>
                    <div>
                        <p className='font-medium text-2sm text-[#FFFFFF99] leading-[147%]'>/ month</p>
                        <p className='font-medium text-2sm text-[#FFFFFF99] leading-[147%]'>/ user</p>
                    </div>
                    <button className='py-[4px] px-[8px] bg-[#FF6363] text-[#110E19] font-semibold text-xs leading-[100%] rounded-[24px]' >-20%</button>
                </div>
            </>
        ),
        billed: (
            <>
                <div className='relative flex items-center justify-center mt-[32px] mb-[35px]'>
                    <button className='text-2sm font-medium text-white leading-[100%] text-center mx-auto py-[4px] px-[12px] bg-[#FFFFFF1A] rounded-[10px] top-[-14px] relative z-10'>£1300 billed annually</button>
                    <div className='bg-whitegradient absolute w-full h-[1px] bottom-[25px] left-0 right-0 z-[1]'>
                    </div>
                </div>
            </>
        )
    }
]

const Pricing = () => {
    const [toggle, setToggle] = useState(1)
    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-[88px] container">
                <h2 className='font-bold text-4xl text-white text-center leading-[140%]'>Pricing</h2>
                <p className=' text-gray font-inter text-xl text-center mt-[22px]'>Tweak anything and everything to ensure fits <span className='sm:block'>your business, not the other way around.</span></p>
                <div className='bg-[#FFFFFF1A] rounded-[41px] p-1 max-w-[192px] mx-auto w-full flex justify-between mt-[44.5px]'>
                    <button onClick={() => setToggle(1)} className={`py-[6px] px-[19px] rounded-[48px] text-base font-medium text-white ${toggle === 1 ? "bg-[#FFFFFF1A]" : ""}`}>Yearly</button>
                    <button onClick={() => setToggle(2)} className={`py-[6px] px-[18px] rounded-[48px] text-base font-medium text-white ${toggle === 2 ? "bg-[#FFFFFF1A]" : ""}`}>Monthly</button>
                </div>
                <div className='flex items-center flex-wrap justify-center w-full mt-[67px] min-h-[1080px]'>
                    {pricedata.map((item) => {
                        return (
                            <>
                                <div className='lg:w-[33.33%] md:w-[50%] sm:w-[80%] w-full lg:mt-0 md:mt-10 mt-8'>
                                    <div className='blur_box_border transition-all ease-linear hover:scale-[1.02] relative hover:z-10 duration-500 cursor-pointer group '>
                                        <div className='p-[33px] bg-[#FFFFFF0D] rounded-3xl'>
                                            <h3 className=' group-hover:text-[32px] text-lg font-medium leading-[156%] transition-all ease-linear duration-500 group-hover:bg-clip-text group-hover:bg-textgradient group-hover:text-transparent text-white inline-block'>{item.heading}</h3>
                                            <p className='text-base font-medium leading-125%[] text-[#FFFFFF99] my-6'>{item.para}</p>
                                            {item.monthdata}
                                            {item.billed}
                                            {item.includedata}
                                            <button className='py-[10px] px-[12px] border border-solid border-[#858585] group-hover:bg-btngradient group-hover:border-transparent transition-all duration-500 ease-linear text-white text-base  font-medium text-nowrap rounded-[13px] w-full'>Select Plan</button>
                                        </div>
                                    </div>
                                </div >
                            </>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default Pricing