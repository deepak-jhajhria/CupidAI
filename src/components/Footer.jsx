import { icons, linkData } from "../common/Helper"
import { FooterGradientMixup, FooterLogo } from "./Icons"

const Footer = () => {
    return (
        <div className="relative mt-10 sm:mt-16 md:mt-24 lg:mt-32">
            <div className="container relative z-10 max-w-[1300px]">
                <nav>
                    <div className="flex flex-col lg:flex-row items-center justify-between py-6">
                        <a className="font-bold text-3xl text-white flex items-center gap-2 leading-9" href="/"><span><FooterLogo /></span>CupidAI</a>
                        <ul className="flex items-center gap-3 md:gap-10 lg:gap-24 mt-3 sm:mt-5 lg:mt-0 flex-wrap justify-center">
                            {
                                linkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-gray-white-100 text-xs uppercase navLinks tracking-wide leading-5" href={item.path}>{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
                <div className="flex justify-between items-center flex-col-reverse sm:flex-row w-full border-t border-white py-3 sm:py-5 md:py-6">
                    <p className=" font-inter font-sm font-normal text-gray-white-100 mt-4 sm:mt-0">©{(new Date().getFullYear())}. All rights reserved </p>
                    <div className="flex items-center gap-4 sm:gap-5 md:gap-8">
                        {
                            icons.map((items, index) => (
                                <a className="mt-2" key={index} href={items.link} target="_blank"><span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark-black group hover:bg-white duration-300  group hover:-translate-y-2 flex justify-center items-center">{items.logo}</span></a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <span className="absolute bottom-0 z-0"><FooterGradientMixup /></span>
        </div>
    )
}

export default Footer
