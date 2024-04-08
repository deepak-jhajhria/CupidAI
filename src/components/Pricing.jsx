import React, { useState } from 'react'
import { GreenStar, GreenTick, RedStar, WhiteArrow, WhiteTick } from './Icons'

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

const pricedata1 = [
    {
        id: 1,
        heading: "Indivisual",
        para: "Everything you need to supercharge your productivity.",
        includedata: (<>
            <div className='flex flex-col gap-4 lg:mb-20 mb-14'>
                {includedata.map((line, index) => {
                    return (
                        <div key={index} className='flex gap-3 '>
                            <div>
                                <WhiteTick />
                            </div>
                            <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.includedata1}</p>
                        </div>
                    )
                })}
            </div>
        </>),
        price: "£240",
        user: "",
        disbtn: (<></>),
        billed: (
            <>
                <div className='bg-whitegradient w-full h-[1px] md:my-12 my-7'>
                </div>
            </>
        )
    },
    {
        id: 2,
        heading: "Entrepreneur",
        para: "Unlock a new level of your personal productivity.",
        includedata: (<>
            <div className='flex flex-col gap-4 pb-1 lg:mb-24 mb-14'>
                {enterpreneurdata.map((line, index) => {
                    return (
                        <div key={index} className='flex gap-3'>
                            <div>
                                <GreenTick />
                            </div>
                            <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.includedata1}</p>
                        </div>
                    )
                })}
                <div className='flex gap-3'>
                    <div>
                        <GreenStar />
                    </div>
                    <p className='font-medium text-2sm text-dark-gray leading-2xl'>More Coming Soon</p>
                </div>
            </div>
        </>),
        price: "£360",
        user: "",
        disbtn: (<button className='px-2 py-1 text-xs font-semibold bg-light-red text-dark-black-300 rounded-3xl' >-20%</button>),
        billed: (
            <>
                <div className='relative flex items-center justify-center md:mt-8 md:mb-9 my-7'>
                    <button className='text-2sm font-medium text-white leading-2xl text-center mx-auto py-1 px-3 bg-gray-white-500 rounded-[10px] relative z-10'>£408 billed annually</button>
                    <div className='bg-whitegradient absolute w-full h-[1px] left-0 right-0 z-[1]'>
                    </div>
                </div>
            </>
        )

    },
    {
        id: 3,
        heading: "Business",
        para: "Supercharge your team and maximize productivity.",
        includedata: (<>
            <div className='flex flex-col gap-4 lg:mb-24 mb-14'>
                <div className='flex flex-col gap-4'>
                    {business.map((line, index) => {
                        return (
                            <div key={index} className='flex gap-3 '>
                                <div>
                                    <WhiteTick />
                                </div>
                                <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.includedata1}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex gap-3'>
                    <div>
                        <RedStar />
                    </div>
                    <p className='font-medium text-2sm text-dark-gray leading-2xl'>More Coming Soon</p>
                </div>
            </div>
        </>),
        price: "£1200",
        user: "/ user",
        disbtn: (<button className='px-2 py-1 text-xs font-semibold bg-light-red text-dark-black-300 rounded-3xl' >-20%</button>),
        billed: (
            <>
                <div className='relative flex items-center justify-center md:mt-8 md:mb-9 my-7'>
                    <button className='text-2sm font-medium text-white leading-2xl text-center mx-auto py-1 px-3 bg-gray-white-500 rounded-[10px] relative z-10'>£1300 billed annually</button>
                    <div className='bg-whitegradient absolute w-full h-[1px] left-0 right-0 z-[1]'>
                    </div>
                </div>
            </>
        )
    }
]

const pricedata = [
    {
        id: 1,
        heading: "Indivisual",
        para: "Everything you need to supercharge your productivity.",
        includedata: (<>
            <div className='flex flex-col gap-4 lg:mb-20 mb-14'>
                {includedata.map((line, index) => {
                    return (
                        <div key={index} className='flex gap-3 '>
                            <div>
                                <WhiteTick />
                            </div>
                            <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.includedata1}</p>
                        </div>
                    )
                })}
            </div>
        </>),
        price: "£24",
        user: "",
        disbtn: (<></>),
        billed: (
            <>
                <div className='bg-whitegradient w-full h-[1px] sm:my-12 my-8'>
                </div>
            </>
        )
    },
    {
        id: 2,
        heading: "Entrepreneur",
        para: "Unlock a new level of your personal productivity.",
        includedata: (<>
            <div className='flex flex-col gap-4 pb-1 lg:mb-24 mb-14'>
                {enterpreneurdata.map((line, index) => {
                    return (
                        <div key={index} className='flex gap-3'>
                            <div>
                                <GreenTick />
                            </div>
                            <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.includedata1}</p>
                        </div>
                    )
                })}
                <div className='flex gap-3'>
                    <div>
                        <GreenStar />
                    </div>
                    <p className='font-medium text-2sm text-dark-gray leading-2xl'>More Coming Soon</p>
                </div>
            </div>
        </>),
        price: "£34",
        user: "",
        disbtn: (<button className='py-[4px] px-[8px] bg-light-red text-dark-black-300 font-semibold text-xs rounded-3xl' >-20%</button>),
        billed: (
            <>
                <div className='relative flex items-center justify-center md:mt-8 md:mb-9 my-7'>
                    <button className='text-2sm font-medium text-white leading-2xl text-center mx-auto py-1 px-3 bg-gray-white-500 rounded-[10px] relative z-10'>£408 billed annually</button>
                    <div className='bg-whitegradient absolute w-full h-[1px] left-0 right-0 z-[1]'>
                    </div>
                </div>
            </>
        )

    },
    {
        id: 3,
        heading: "Business",
        para: "Supercharge your team and maximize productivity.",
        includedata: (<>
            <div className='flex flex-col gap-4 lg:mb-24 mb-14'>
                <div className='flex flex-col gap-4'>
                    {business.map((line, index) => {
                        return (
                            <div key={index} className='flex gap-3 '>
                                <div>
                                    <WhiteTick />
                                </div>
                                <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.includedata1}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex gap-3'>
                    <div>
                        <RedStar />
                    </div>
                    <p className='font-medium text-2sm text-dark-gray leading-2xl'>More Coming Soon</p>
                </div>
            </div>
        </>),
        price: "£120",
        user: "/ user",
        disbtn: (<button className='px-2 py-1 text-xs font-semibold bg-light-red text-dark-black-300 rounded-3xl' >-20%</button>),
        billed: (
            <>
                <div className='relative flex items-center justify-center md:mt-8 md:mb-9 my-7'>
                    <button className='text-2sm font-medium text-white leading-2xl text-center mx-auto py-1 px-3 bg-gray-white-500 rounded-[10px] relative z-10'>£1300 billed annually</button>
                    <div className='bg-whitegradient absolute w-full h-[1px] left-0 right-0 z-[1]'>
                    </div>
                </div>
            </>
        )
    }
]

const Pricing = () => {
    const [toggle, setToggle] = useState(1)
    return (
        <div className='relative mt-10 lg:mt-40 sm:mt-20'>
            <div id='pricing' className="xl:max-w-[1219px] lg:pt-24 md:pt-14 pt-10 container">
                <h2 className='font-bold lg:text-4xl sm:text-3xl2 tracking-tighter text-3xl1 text-white text-center leading-2.5xl'>Pricing</h2>
                <p className=' text-dark-gray font-medium text-xxl text-center sm:pt-5 pt-4.5'>Tweak anything and everything to ensure fits <span className='sm:block'>your business, not the other way around.</span></p>
                <div className='bg-gray-white-500 rounded-2md p-1 max-w-[192px] mx-auto w-full flex justify-between md:mt-[44.5px] mt-6'>
                    <button onClick={() => setToggle(1)} className={`py-1.5 px-4.5 rounded-3md text-base font-medium text-white ${toggle === 1 ? "bg-gray-white-500" : ""}`}>Yearly</button>
                    <button onClick={() => setToggle(2)} className={`py-1.5 px-4.5 rounded-3md text-base font-medium text-white ${toggle === 2 ? "bg-gray-white-500" : ""}`}>Monthly</button>
                </div>
                <div className='flex items-center flex-wrap justify-center w-full md:pt-16 sm:pt-10 pt-6 lg:min-h-[826px]'>
                    {toggle === 2 ? (pricedata.map((item, index) => {
                        return (
                            <div key={index} className='w-11/12 mt-8 lg:w-4/12 md:w-6/12 sm:w-10/12 lg:mt-0 md:mt-10'>
                                <div className='relative transition-all duration-500 ease-linear cursor-pointer blur_box_border hover:scale-[1.02] hover:z-10 group '>
                                    <div className='p-8 bg-gray-white-600 rounded-3xl'>
                                        <h3 className='inline-block text-lg font-medium text-white transition-all duration-500 ease-linear group-hover:text-3xl1 leading-3xl group-hover:bg-clip-text group-hover:bg-textgradient group-hover:text-transparent'>{item.heading}</h3>
                                        <p className='my-6 text-base font-medium leading-xl text-dark-gray'>{item.para}</p>
                                        <div className='flex items-center gap-2'>
                                            <h3 className='font-semibold text-white sm:text-4xl2 text-3xl2 lg:text-5xl leading-sm'>{item.price}</h3>
                                            <div className='flex flex-col h-full'>
                                                <p className='font-medium text-2sm text-dark-gray leading-2xl'>/ month</p>
                                                <p className='font-medium text-2sm text-dark-gray leading-2xl'>{item.user}</p>
                                            </div>
                                            {item.disbtn}
                                        </div>
                                        {item.billed}
                                        <p className='mb-4 font-medium text-2sm text-dark-gray leading-2xl'>What’s included</p>
                                        {item.includedata}
                                        <button className='py-2.5 px-3 border border-solid border-gray-black-200 group-hover:bg-btngradient group-hover:border-transparent transition-all duration-500 ease-linear text-white text-base font-medium text-nowrap rounded-xl w-full'>Select Plan</button>
                                    </div>
                                </div>
                            </div >
                        )
                    })) : ""}
                    {toggle === 1 ? (pricedata1.map((item, index) => {
                        return (
                            <>
                                <div key={index} className='w-11/12 mt-8 lg:w-4/12 md:w-6/12 sm:w-10/12 lg:mt-0 md:mt-10'>
                                    <div className='relative transition-all duration-500 ease-linear cursor-pointer blur_box_border hover:scale-[1.02] hover:z-10 group '>
                                        <div className='p-8 bg-gray-white-600 rounded-3xl'>
                                            <h3 className=' group-hover:text-[32px] text-lg font-medium leading-3xl transition-all ease-linear duration-500 bg-clip-text group-hover:bg-textgradient group-hover:text-transparent text-white inline-block'>{item.heading}</h3>
                                            <p className='my-6 text-base font-medium leading-xl text-dark-gray'>{item.para}</p>
                                            <div className='flex items-center gap-2'>
                                                <h3 className='font-semibold text-white sm:text-4xl2 text-3xl2 lg:text-5xl leading-sm'>{item.price}</h3>
                                                <div className='flex flex-col h-full'>
                                                    <p className='font-medium text-2sm text-dark-gray leading-2xl'>/ year</p>
                                                    <p className='font-medium text-2sm text-dark-gray leading-2xl'>{item.user}</p>
                                                </div>
                                                {item.disbtn}
                                            </div>
                                            {item.billed}
                                            <p className='mb-4 font-medium text-2sm text-dark-gray leading-2xl'>What’s included</p>
                                            {item.includedata}
                                            <button className='py-2.5 px-3 border border-solid border-gray-black-200 group-hover:bg-btngradient group-hover:border-transparent transition-all duration-500 ease-linear text-white text-base  font-medium text-nowrap rounded-xl w-full'>Select Plan</button>
                                        </div>
                                    </div>
                                </div >
                            </>
                        )
                    })) : ""}
                </div>
                <div className='flex items-center justify-center'>
                    <a href='#' className='bg-gray-white-500 inline-flex items-center justify-center sm:flex-row flex-col text-white px-4 py-1.5 sm:rounded-2md rounded-3xl sm:gap-2 gap-1 mt-12'><p className='font-medium text-2sm leading-2xl opacity-60 tracking-tightest'>Want enterprise features?</p><p className='flex items-center gap-1 font-bold text-2sm tracking-tightest leading-2xl'>Tell us more <WhiteArrow /></p></a>
                </div>
            </div>
            <div className='bg-[#2980D6] w-[778px] h-[778px] blur-[1000px] absolute top-[25%] left-[-50%]'></div>
        </div>
    )
}

export default Pricing