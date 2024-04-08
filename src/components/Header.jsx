import React, { useState } from "react";
import { FooterLogo } from "./Icons";
import { CommonBtn, navLinkData } from "../common/Helper";
import { Herobg } from "../common/Icons";
import dashboardimg from '../assets/images/dashboardimage.webp'

const Header = () => {
    const [show, setShow] = useState(true);
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <>
            <div className="relative h-[781px] overflow-hidden">
                <span className="absolute bottom-0 left-0 z-0 w-full h-full"><Herobg /></span>
                <div className="lg:max-w-[1320px] px-3 container mx-auto pt-8 bg-[#01020f2e] relative z-[1]">
                    <nav className="flex items-center justify-between rounded-[60px] p-2.5 border border-white border-solid sm:h-[71px] h-[60px]">
                        <a className="flex items-center gap-2 text-3xl font-bold text-white" href="/">
                            <span> <FooterLogo /> </span> CupidAI</a>
                        <ul className={`${show ? "left-[-100%]" : "left-0"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-[7] max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-7 items-center justify-center`}>
                            {
                                navLinkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-xl font-semibold leading-6 tracking-wide text-white uppercase navLinks" href={item.path}>{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="items-center hidden gap-5 lg:flex">
                            <a
                                href="#"
                                className="font-normal text-xl leading-[15px] text-white"
                            >
                                Log in
                            </a>
                            <CommonBtn name="Sing up" />
                        </div>
                        <div className="flex items-center gap-3 sm:gap-5 lg:hidden">
                            <div onClick={() => setShow(!show)} className="lg:hidden w-[28px] h-[20px] relative z-[10] flex justify-between flex-col">
                                <span
                                    className={`${show
                                        ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                        : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                                        }`}
                                ></span>
                                <span
                                    className={`${show
                                        ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                        : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                                        }`}
                                ></span>
                                <span
                                    className={`${show
                                        ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                        : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                                        }`}
                                ></span>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col w-full justify-center items-center max-w-[691px] px-3 mx-auto relative z-10 mt-16 pt-1.5">
                    <h2 className="text-4xl font-semibold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl md:leading-13">Unleash <span className="bg-gradient-to-r to-orange-red from-15% from-blue text-transparent bg-clip-text">Creativity</span>, Effortlessly</h2>
                    <p className="mt-3 text-base font-normal leading-8 text-center sm:text-lg md:text-xl text-gray-white-100 md:mt-4">Elevate your agency's output with state-of-the-art AI, engineered to innovate at the speed of thought.</p>
                    <CommonBtn cstm="mt-5" name="Try Now" />
                </div>
            </div>
            <div className="container xl:max-w-[1320px] lg:h-[400px] sm-[260px] h-[250px]">
                <img src={dashboardimg} alt="dashboardimg" className="mx-auto -translate-y-[42%] lg:w-[915px] md:w-[600px] max-h-[400px] md:max-h-[687px] relative z-10" />
            </div>

        </>
    );
};

export default Header;