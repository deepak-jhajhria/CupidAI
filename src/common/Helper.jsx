import { FacebookIcon, InstaIcon, TelegramIcon, TwiterIcon } from "../components/Icons";

export const linkData = [
    { path: "#features", link: "features" },
    { path: "#Services", link: "Services" },
    { path: "#pricing", link: "pricing" },
    { path: "#features", link: "how to use" },
]
export const navLinkData = [
    { path: "#features", link: "Home" },
    { path: "#Services", link: "Why us" },
    { path: "#pricing", link: "Services" },
    { path: "#features", link: "FAQ" },
]
export const accordionData = [
    { id: 1, title: "How do you handle my data?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 2, title: "What's the difference between the Pro and Team plan?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 3, title: "Can I use my own OpenAI API key?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 4, title: "Which model do you use for Raycast AI?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 5, title: "Can I upgrade my Teams subscription to use GPT-4?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 6, title: "Does Raycast have a Student Program?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
];
export const icons = [
    { link: "http://www.twitter.com", logo: (<TwiterIcon />) },
    { link: "http://www.instagram.com", logo: (<InstaIcon />) },
    { link: "http://www.telegram.com", logo: (<TelegramIcon />) },
    { link: "http://www.facebook.com", logo: (<FacebookIcon />) },
]

export const CommonBtn = (props) => {
    return (
        <button className={`py-4.5 px-[25px] rounded-full text-white bg-gradient-to-tr from-orange-red from-30% to-blue font-medium text-xl leading-6 flex ${props.cstm}`}>{props.name}</button>
    )
}