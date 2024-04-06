import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Arrow } from '../common/Icons';

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
                <div className='mt-[14px]'>
                    {accordionData.map((item, index) => (
                        <Accordion key={index} onClick={() => toggleAccordion(index)} className={`cursor-pointer border-b border-white}`} open={open === 1} icon={<Arrow id={1} open={open} />}>
                            <AccordionHeader className=" font-Outfit text-sm md:text-base font-medium text-[#4D4D4D] w-full justify-between">{item.title}
                            </AccordionHeader>
                            <AccordionBody className=""> {item.content}
                            </AccordionBody>
                        </Accordion>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq
