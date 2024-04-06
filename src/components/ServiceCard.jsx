import React from 'react'
import { ServiceSvg, ServiceSvg2, ServiceSvg3, ServiceSvg4 } from './Icons'
import Ourservice from './Ourservices'


const ServiceCard = () => {
    const carding = [
        {
            id: 1,
            svges: <ServiceSvg />,
            heading: "Content Deepfakes",
            paragraph: "Seize control and elevate your business with our hyper-realistic AI content creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.",
            width: "md:w-7/12",
        },
        {
            id: 2,
            svges: <ServiceSvg2 />,
            heading: "AI Verifications",
            paragraph: "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
            width: "md:w-5/12",
        },
        {
            id: 3,
            svges: <ServiceSvg3 />,
            heading: "Content Utilities",
            paragraph: "Consolidate your resources with our comprehensive content utilities. Access everything you need from a single dashboard.",
            width: "md:w-5/12",
        },
        {
            id: 4,
            svges: <ServiceSvg4 />,
            heading: "Image Generation",
            paragraph: "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
            width: "md:w-7/12",
        },
    ]
    return (
        <div className='  bg-bg_grad ient  bg-bl ack py-32'>
            <div className='max-w-[966px] px-3  mx-auto '>
                <h2 className='font-inter font-bold leading-[56px]  text-white text-5xl text-center'>Our Services</h2>
                <p className=' font-medium text-dark-gray text-2xl text-center mx-auto leading-[30px] lg:max-w-[476px] pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                <div className='flex flex-row flex-wrap -mx-3 pt-10'>
                    {carding.map((p) => <Ourservice key={p.id} svg={p.svges} head={p.heading} para={p.paragraph} width={p.width} />)}
                </div>
            </div>
        </div>
    )
}
export default ServiceCard
