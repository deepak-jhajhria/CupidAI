import { useState } from 'react'
import { WhiteArrow } from '../common/Icons'
import { pricedata, pricedata1 } from '../common/Helper'

const Pricing = () => {
    const [toggle, setToggle] = useState(1)
    return (
        <div className='relative mt-10 lg:mt-40 sm:mt-20'>
            <div id='pricing' className="xl:max-w-[1219px] lg:pt-24 md:pt-14 pt-10 container">
                <h2 className='font-bold lg:text-4xl sm:text-3xl2 tracking-tighter text-3xl1 text-white text-center leading-16'>Pricing</h2>
                <p className='pt-4 font-medium text-center text-dark-gray text-xxl sm:pt-5'>Tweak anything and everything to ensure fits <span className='sm:block'>your business, not the other way around.</span></p>
                <div className='bg-gray-white-500 rounded-2md p-1 max-w-[192px] mx-auto w-full flex justify-between md:mt-[44.5px] mt-6'>
                    <button onClick={() => setToggle(1)} className={`py-1.5 px-4.5 rounded-3md text-base font-medium text-white ${toggle === 1 ? "bg-gray-white-500" : ""}`}>Yearly</button>
                    <button onClick={() => setToggle(2)} className={`py-1.5 px-4.5 rounded-3md text-base font-medium text-white ${toggle === 2 ? "bg-gray-white-500" : ""}`}>Monthly</button>
                </div>
                <div className='flex items-center flex-wrap justify-center w-full md:pt-16 sm:pt-10 pt-6 lg:min-h-[826px]'>
                    {toggle === 2 && <>
                        {
                            pricedata.map((item, index) => (
                                <div key={index} className='w-11/12 mt-8 lg:w-4/12 md:w-6/12 sm:w-10/12 lg:mt-0 md:mt-10'>
                                    <div className='relative transition-all duration-500 ease-linear cursor-pointer blur_box_border hover:scale-[1.02] hover:z-10 group '>
                                        <div className='p-8 bg-gray-white-600 rounded-3xl'>
                                            <h3 className='inline-block text-lg font-medium text-white transition-all duration-500 ease-linear group-hover:text-3xl1 leading-18 group-hover:bg-clip-text group-hover:bg-textgradient group-hover:text-transparent'>{item.heading}</h3>
                                            <p className='my-6 text-base font-medium leading-15 text-dark-gray'>{item.para}</p>
                                            <div className='flex items-center gap-2'>
                                                <h3 className='font-semibold text-white sm:text-4xl2 text-3xl2 lg:text-5xl leading-14'>{item.price}</h3>
                                                <div className='flex flex-col h-full'>
                                                    <p className='font-medium text-2sm text-dark-gray leading-17'>/ month</p>
                                                    <p className='font-medium text-2sm text-dark-gray leading-17'>{item.user}</p>
                                                </div>
                                                {item.disbtn}
                                            </div>
                                            {item.billed}
                                            <p className='mb-4 font-medium text-2sm text-dark-gray leading-17'>What’s included</p>
                                            {item.includedata}
                                            <button className='py-2.5 px-3 border border-solid border-gray-black-200 group-hover:bg-btngradient group-hover:border-transparent transition-all duration-500 ease-linear text-white text-base font-medium text-nowrap rounded-xl w-full'>Select Plan</button>
                                        </div>
                                    </div>
                                </div >
                            ))
                        }
                    </>}
                    {toggle === 1 && (pricedata1.map((item, index) => {
                        return (
                            <div key={index} className='w-11/12 mt-8 lg:w-4/12 md:w-6/12 sm:w-10/12 lg:mt-0 md:mt-10'>
                                <div className='relative transition-all duration-500 ease-linear cursor-pointer blur_box_border hover:scale-[1.02] hover:z-10 group '>
                                    <div className='p-8 bg-gray-white-600 rounded-3xl'>
                                        <h3 className=' group-hover:text-[32px] text-lg font-medium leading-18 transition-all ease-linear duration-500 bg-clip-text group-hover:bg-textgradient group-hover:text-transparent text-white inline-block'>{item.heading}</h3>
                                        <p className='my-6 text-base font-medium leading-15 text-dark-gray'>{item.para}</p>
                                        <div className='flex items-center gap-2'>
                                            <h3 className='font-semibold text-white sm:text-4xl2 text-3xl2 lg:text-5xl leading-14'>{item.price}</h3>
                                            <div className='flex flex-col h-full'>
                                                <p className='font-medium text-2sm text-dark-gray leading-17'>/ year</p>
                                                <p className='font-medium text-2sm text-dark-gray leading-17'>{item.user}</p>
                                            </div>
                                            {item.disbtn}
                                        </div>
                                        {item.billed}
                                        <p className='mb-4 font-medium text-2sm text-dark-gray leading-17'>What’s included</p>
                                        {item.includedata}
                                        <button className='py-2.5 px-3 border border-solid border-gray-black-200 group-hover:bg-btngradient group-hover:border-transparent transition-all duration-500 ease-linear text-white text-base  font-medium text-nowrap rounded-xl w-full'>Select Plan</button>
                                    </div>
                                </div>
                            </div >
                        )
                    }))}
                </div>
                <div className='flex items-center justify-center'>
                    <a href='#' className='bg-gray-white-500 inline-flex items-center justify-center sm:flex-row flex-col text-white px-4 py-1.5 sm:rounded-2md rounded-3xl sm:gap-2 gap-1 mt-12'><p className='font-medium text-2sm leading-17 opacity-60 tracking-tightest'>Want enterprise features?</p><p className='flex items-center gap-1 font-bold text-2sm tracking-tightest leading-17'>Tell us more <WhiteArrow /></p></a>
                </div>
            </div>
            <div className='bg-[#2980D6] w-[778px] h-[778px] blur-[1000px] absolute top-[25%] left-[-50%]'></div>
        </div>
    )
}

export default Pricing