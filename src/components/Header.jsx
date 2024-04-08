import { FooterLogo } from "./Icons";
import { CommonBtn, navLinkData } from "../common/Helper";
import { Herobg } from "../common/Icons";
import dashboardimg from '../assets/images/dashboardimage.webp'
import { useOverflowHidden } from "../common/Hooks";
import { Twirl as Hamburger } from 'hamburger-react';

const Header = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <>
            <div className="relative overflow-hidden min-h-[667px] md:min-h-[810px]">
                <span className="absolute bottom-0 left-0 z-0 w-full h-full"><Herobg /></span>
                <div className="lg:max-w-[1320px] px-3 container mx-auto pt-4 sm:pt-5 md:pt-8 bg-[#01020f2e] relative">
                    <nav className="flex items-center justify-between rounded-full p-3 lg:p-2.5 border border-[#fbf0f040] border-solid">
                        <a className="flex items-center gap-2 text-3xl font-bold text-white" href="/">
                            <span> <FooterLogo /> </span> CupidAI</a>
                        <ul className={`${isOpen ? "right-0" : "-right-full"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full max-md:max-w-full max-lg:max-w-[400px] max-lg:z-30 max-lg:duration-300 max-lg:flex-col gap-7 items-center justify-center`}>
                            {
                                navLinkData.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-xl link font-normal transition-all duration-300 ease-linear leading-6 tracking-wide text-white uppercase navLinks" href={item.path} onClick={() => setOpen(false)}>{item.link}</a>
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
                        <div className='relative z-[110] mx-2 sm:mx-3 lg:hidden'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction='right' duration={0.5} color='#FFF' />
                        </div>
                    </nav>
                </div>
                <div id="home" className="flex flex-col w-full justify-center items-center max-w-[691px] px-3 mx-auto relative z-10 mt-16 pt-1.5">
                    <h2 className="text-4xl font-semibold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl md:leading-13">Unleash <span className="text-transparent bg-headerTextgradient bg-clip-text">Creativity</span>, Effortlessly</h2>
                    <p className="mt-3 text-base font-normal leading-8 text-center sm:text-lg md:text-xl text-gray-white-100 md:mt-4">Elevate your agency's output with state-of-the-art AI, engineered to innovate at the speed of thought.</p>
                    <CommonBtn cstm="mt-5" name="Try Now" />
                </div>
            </div>
            <div className="container xl:max-w-[1320px]">
                <img src={dashboardimg} alt="dashboardimg" className="mx-auto -translate-y-[42%] lg:w-[915px] md:w-[600px] max-h-[400px] md:max-h-[687px] relative z-10" />
            </div>
            {isOpen && (
                <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-20'>
                </div>
            )}
        </>
    );
};

export default Header;