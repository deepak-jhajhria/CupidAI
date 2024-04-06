import { FacebookIcon, FooterGradientMixup, InstaIcon, Logo, TelegramIcon, TwiterIcon } from "./Icons"

const Footer = () => {
    const linkData = [
        { path: "#features", link: "features" },
        { path: "#Services", link: "Services" },
        { path: "#pricing", link: "pricing" },
        { path: "#features", link: "how to use" },
    ]
    const icons = [{ link: "http://www.facebook.com", logo: (<FacebookIcon />) }, { link: "http://www.instagram.com", logo: (<InstaIcon />) }, { link: "http://www.twitter.com", logo: (<TwiterIcon />) }, { link: "http://www.linkden.com", logo: (<TelegramIcon />) }]
    return (
        <div className=" relative mt-[128px]">
            <div className="container relative z-10">
                <nav>
                    <div className="flex items-center justify-between py-6">
                        <a className="font-inter font-bold text-3xl text-white flex items-center gap-2" href="/"><span><Logo /></span>CupidAI</a>
                        <ul className="flex items-center gap-20">
                            {
                                linkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="font-inter text-[#CAC6DD] text-xs uppercase" href={item.path}>{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
                <div className="flex justify-between items-center w-full relative before:absolute before:top-0 before:w-full before:bg-[#3B2A4E] before:h-[1px] py-6">
                    <p className=" font-inter font-sm font-normal text-[#CAC6DD]">©{(new Date().getFullYear())}. All rights reserved </p>
                    <div className="flex items-center gap-8">
                        {
                            icons.map((items, index) => (
                                <a className="mt-2" key={index} href={items.link} target="_blank"><span className="w-8 h-8 sm:w-[44px] sm:h-[44px] rounded-full bg-[#1B1530] duration-300  group hover:-translate-y-2 flex justify-center items-center">{items.logo}</span></a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <span className=" absolute bottom-0 z-0"><FooterGradientMixup /></span>
        </div>
    )
}

export default Footer
