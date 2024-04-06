import React, { useState } from "react";
import { FooterLogo } from "./Icons";
import herobg from "../assets/images/herobg.png";
import { navLinkData } from "../common/Helper";

const Header = () => {
    const [show, setShow] = useState(true);
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <>
            <div className="relative h-[781px]">
                <img src={herobg} alt="herobg" className="absolute left-0 w-full h-full bottom-0 z-0" />
                <div className="lg:max-w-[1320px] px-3 container mx-auto pt-[31px] bg-[#01020f2e] relative z-[1]">
                    <nav className="flex items-center justify-between rounded-[60px] px-2.5 border border-white border-solid sm:h-[71px] h-[60px]">
                        <a className="font-bold text-3xl text-white flex items-center gap-2" href="/">
                            <span> <FooterLogo /> </span> CupidAI</a>
                        <ul className={`${show ? "left-[-100%]" : "left-0"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-[7] max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-7 items-center justify-center`}>
                            {
                                navLinkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-gray-white-100 text-xs uppercase navLinks tracking-wide leading-5" href={item.path}>{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="gap-5 items-center lg:flex hidden">
                            <a
                                href="#"
                                className="font-normal text-xl leading-[15px] text-white"
                            >
                                Log in
                            </a>
                            <a
                                href="#"
                                className="font-medium text-xl leading-[23px] text-white bg-gradient-to-r from-orange-red duration-300 hover:shadow-gradientRed from-15% to-blue rounded-[50px] py-3.5 px-[25px]"
                            >
                                Sing up
                            </a>
                        </div>
                        <div className="flex items-center sm:gap-5 gap-3 lg:hidden">
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
            </div>
        </>
    );
};

export default Header;
