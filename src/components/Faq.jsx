import React, { useState } from 'react'

const Faq = () => {
    const [open, setOpen] = useState(0);
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    const accordionData = [
        { id: 1, title: "How do you handle my data?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
        { id: 2, title: "What's the difference between the Pro and Team plan?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
        { id: 3, title: "Can I use my own OpenAI API key?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
        { id: 4, title: "Which model do you use for Raycast AI?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
        { id: 5, title: "Can I upgrade my Teams subscription to use GPT-4?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
        { id: 6, title: "Does Raycast have a Student Program?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    ];
    return (
        <div>
            <div className='max-w-[700px] mx-auto pt-[293px]'>
                <h2 className=' font-inter font-bold text-4xl text-white'>FAQs</h2>
                <p className='text-[#646464] font-inter text-xl'>Answers to the most frequently asked questions.</p>
                <div>
                    {accordionData.map((item, index) => (
                        <div className={`${open === index ? "" : " border-opacity-20"} overflow-hidden`} key={item.title}>
                            <div onClick={() => toggleAccordion(index)} className={` ${open === index ? "" : ""} cursor-pointer flex items-center justify-between w-full`}>
                                <p className={` text-white text-base font-semibold font-inter ${open === index ? "" : ""}`}>{item.title}</p>
                                <span className="">{open === index ? (<span></span>) : (<span ></span>)}</span>
                            </div>
                            <p className={`overflow-hidden pTag duration-500 sm:w-[92%] ${open === index ? "max-h-36 mt-2 md:mt-3" : "max-h-0"}`}>{item.content}</p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq
