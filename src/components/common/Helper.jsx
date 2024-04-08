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
        heading: "Content Deepfakes",
        paragraph: "Seize control and elevate your business with our hyper-realistic AI description creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.",
        width: "sm:w-7/12 md:max-w-[526px]",
    },
    {
        id: 2,
        svges: <ServiceSvg2 />,
        heading: "AI Verifications",
        paragraph: "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
        width: "sm:w-5/12 md:max-w-[416px] ",
    },
    {
        id: 3,
        svges: <ServiceSvg3 />,
        heading: "Content Utilities",
        paragraph: "Consolidate your resources with our comprehensive description utilities. Access everything you need from a single dashboard.",
        width: "sm:w-5/12 md:max-w-[416px]",
    },
    {
        id: 4,
        svges: <ServiceSvg4 />,
        heading: "Image Generation",
        paragraph: "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
        width: "sm:w-7/12 md:max-w-[526px]",
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