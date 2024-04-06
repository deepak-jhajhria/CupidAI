import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Arrow } from '../common/Icons';
import { accordionData } from '../common/Helper';

const Faq = () => {
    const [open, setOpen] = useState();
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    console.log(accordionData.slice(-1));
    return (
        <div className='container max-w-[1300px]'>
            <div className='max-w-[700px] mx-auto pt-[293px]'>
                <h2 className='font-bold text-4xl text-white leading-11 tracking-tighter'>FAQs</h2>
                <p className=' text-gray font-inter text-xl leading-7 tracking-tightest'>Answers to the most frequently asked questions.</p>
                {accordionData.map((item, index) => (
                    <Accordion key={index} onClick={() => toggleAccordion(index)} className={`cursor-pointer border-b border-white border-opacity-10 mt-11 ${item.id === 6 ? "border-0" : ""}`} open={open === index} icon={<Arrow id={index} open={open} />}>
                        <AccordionHeader className={`font-semibold text-white text-sm md:text-base text-start w-full justify-between gap-3 border-0 pb-8 pt-0 leading-6 ${open === index ? "pb-0" : "pb-5 md:pb-8.5"}`}>{item.title}
                        </AccordionHeader>
                        <AccordionBody className="font-semibold text-white opacity-70 text-sm md:text-sm py-2 sm:py-3"> {item.content}
                        </AccordionBody>
                    </Accordion>
                ))
                }
            </div>
        </div>
    )
}

export default Faq
