import { icons, linkData } from "../common/Helper"
import { FooterGradientMixup, Logo } from "./Icons"

const Footer = () => {

    return (
        <div className="relative mt-32">
            <div className="container relative z-10 maz-w-[1300px]">
                <nav>
                    <div className="flex flex-col lg:flex-row items-center justify-between py-6">
                        <a className="font-bold text-3xl text-white flex items-center gap-2" href="/"><span><Logo /></span>CupidAI</a>
                        <ul className="flex items-center gap-3 md:gap-10 lg:gap-20">
                            {
                                linkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-gray-white-100 text-xs uppercase" href={item.path}>{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
                <div className="flex justify-between items-center w-full border-t border-white py-6">
                    <p className=" font-inter font-sm font-normal text-gray-white-100">©{(new Date().getFullYear())}. All rights reserved </p>
                    <div className="flex items-center gap-8">
                        {
                            icons.map((items, index) => (
                                <a className="mt-2" key={index} href={items.link} target="_blank"><span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dark-black duration-300  group hover:-translate-y-2 flex justify-center items-center">{items.logo}</span></a>
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
