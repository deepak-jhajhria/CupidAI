import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Arrow } from '../common/Icons';
import { accordionData } from './common/Helper';

const Faq = () => {
    const [open, setOpen] = useState();
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    return (
        <div id='faq' className='container max-w-[1300px]'>
            <div className='max-w-[700px] mx-auto pt-16 sm:pt-32 md:pt-52 lg:pt-64'>
                <h2 className='text-4xl font-bold tracking-tighter text-white leading-11'>FAQs</h2>
                <p className='pb-2 mt-5 text-lg text-gray font-inter md:text-xl md:leading-7 tracking-tightest md:mt-6'>Answers to the most frequently asked questions.</p>
                {accordionData.map((item, index) => (
                    <Accordion key={index} onClick={() => toggleAccordion(index)} className={`cursor-pointer border-b border-white border-opacity-10 mt-5 sm:mt-6 md:mt-8 ${item.id === 6 ? "border-0" : ""}`} open={open === index} icon={<Arrow id={index} open={open} />}>
                        <AccordionHeader className={`font-semibold text-white text-2sm md:text-base text-start w-full justify-between gap-3 border-0 pb-8 mb-0.5 pt-0 leading-6 ${open === index ? "pb-0" : ""}`}>{item.title}
                        </AccordionHeader>
                        <AccordionBody className="py-2 text-sm font-semibold text-white opacity-70 md:text-sm sm:py-3"> {item.description}
                        </AccordionBody>
                    </Accordion>
                ))
                }
            </div>
        </div>
    )
}

export default Faq
