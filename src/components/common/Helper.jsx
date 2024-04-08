import { FacebookIcon, GreenStar, GreenTick, InstaIcon, RedStar, ServiceSvg, ServiceSvg2, ServiceSvg3, ServiceSvg4, TelegramIcon, TwiterIcon, WhiteTick } from "./Icons";

export const linkData = [
    { path: "#features", link: "features" },
    { path: "#services", link: "Services" },
    { path: "#pricing", link: "pricing" },
    { path: "#howtouse", link: "how to use" },
]
export const navLinkData = [
    { path: "#home", link: "Home" },
    { path: "#whyus", link: "Why us" },
    { path: "#service", link: "Services" },
    { path: "#faq", link: "FAQ" },
]
export const accordionData = [
    { id: 1, title: "How do you handle my data?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 2, title: "What's the difference between the Pro and Team plan?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 3, title: "Can I use my own OpenAI API key?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 4, title: "Which model do you use for Raycast AI?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 5, title: "Can I upgrade my Teams subscription to use GPT-4?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 6, title: "Does Raycast have a Student Program?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
];
export const icons = [
    { link: "http://www.twitter.com", logo: (<TwiterIcon />) },
    { link: "http://www.instagram.com", logo: (<InstaIcon />) },
    { link: "http://www.telegram.com", logo: (<TelegramIcon />) },
    { link: "http://www.facebook.com", logo: (<FacebookIcon />) },
]

export const CommonBtn = (props) => {
    return (
        <button className={`py-3.5 px-[25px] rounded-full text-white hover:shadow-gradientRed transition-all duration-300 ease-linear bg-btngradient font-medium text-xl leading-6 flex ${props.className}`}>{props.name}</button>
    )
}
export const serviceCardItems = [
    {
        id: 1,
        svges: <ServiceSvg />,
        heading: "description Deepfakes",
        paragraph: "Seize control and elevate your business with our hyper-realistic AI description creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.",
        width: "md:w-7/12 md:max-w-[526px]",
    },
    {
        id: 2,
        svges: <ServiceSvg2 />,
        heading: "AI Verifications",
        paragraph: "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
        width: "md:w-5/12 md:max-w-[416px] ",
    },
    {
        id: 3,
        svges: <ServiceSvg3 />,
        heading: "description Utilities",
        paragraph: "Consolidate your resources with our comprehensive description utilities. Access everything you need from a single dashboard.",
        width: "md:w-5/12 md:max-w-[416px]",
    },
    {
        id: 4,
        svges: <ServiceSvg4 />,
        heading: "Image Generation",
        paragraph: "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
        width: "md:w-7/12 md:max-w-[526px]",
    },
]

export const Includedata = [
    {
        description: "Calculator, Quicklinks, Snippets, Window Management, and many more core features",
    },
    {
        description: "More than 1000 Extensions",
    },
    {
        description: "Custom Extensions",
    },
    {
        description: "Developer Tools",
    },
]

export const Enterpreneurdata = [
    {
        description: "Everything in Free"
    },
    {
        description: "Raycast AI"
    },
    {
        description: "Cloud Sync"
    },
    {
        description: "Custom Themes"
    },
    {
        description: "Unlimited Clipboard History"
    },
]

export const Business = [
    {
        description: "Everything in Pro"
    },
    {
        description: "Unlimited Shared Commands"
    },
    {
        description: "Unlimited Shared Quicklinks"
    },
    {
        description: "Unlimited Shared Snippets"
    },
    {
        description: "Unlimited Team Members"
    },
]

export const IndividualData = () => {
    return (
        (<>
            <div className='flex flex-col gap-4 lg:mb-20 mb-14'>
                {Includedata.map((line, index) => {
                    return (
                        <div key={index} className='flex gap-3 '>
                            <div>
                                <WhiteTick />
                            </div>
                            <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.description}</p>
                        </div>
                    )
                })}
            </div>
        </>)
    )
}

export const Entrepreneurcontent = () => {
    return (<>
        <div className='flex flex-col gap-4 pb-1 lg:mb-24 mb-14'>
            {Enterpreneurdata.map((line, index) => {
                return (
                    <div key={index} className='flex gap-3'>
                        <div>
                            <WhiteTick />
                        </div>
                        <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.description}</p>
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
    </>)
}

export const BusinessData = () => {
    return (
        <>
            <div className='flex flex-col gap-4 lg:mb-24 mb-14'>
                <div className='flex flex-col gap-4'>
                    {Business.map((line, index) => {
                        return (
                            <div key={index} className='flex gap-3 '>
                                <div>
                                    <WhiteTick />
                                </div>
                                <p className='font-medium text-2sm text-dark-gray leading-2xl'>{line.description}</p>
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
        </>
    )
}

export const PricedataYear = [
    {
        id: 1,
        heading: "Indivisual",
        para: "Everything you need to supercharge your productivity.",
        includedata: (<IndividualData />),
        price: "£240",
        user: "",
        disbtn: '',
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
        includedata: (<Entrepreneurcontent />),
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
        includedata: (<BusinessData />),
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

export const PricedataMonth = [
    {
        id: 1,
        heading: "Indivisual",
        para: "Everything you need to supercharge your productivity.",
        includedata: (<IndividualData />),
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
        includedata: (<Entrepreneurcontent />),
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
        includedata: (<BusinessData />),
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