import { FooterLogo } from "./common/Icons";
import { CommonBtn, navLinkData } from "./common/Helper";
import { HeroBg } from "./common/Icons";
import dashboardimg from '../assets/images/dashboardimage.webp'
import { useOverflowHidden } from "./common/Hooks";
import { Twirl as Hamburger } from 'hamburger-react';

const Header = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <>
            <div id="home" className="relative overflow-hidden min-h-[667px] md:min-h-[810px]">
                <span className="absolute bottom-0 left-0 z-0 w-full h-full"><HeroBg /></span>
                <div className="lg:max-w-[1320px] px-3 container mx-auto pt-4 sm:pt-5 md:pt-10 relative">
                    <div className="rounded-full p-[1px] bg-gradient-to-l from-black-primary-200 to-gray-white-500">
                        <nav className="flex items-center justify-between bg-[#06050D] rounded-full p-3 lg:p-2.5">
                            <a className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl" href="/">
                                <span> <FooterLogo /> </span> CupidAI</a>
                            <ul className={`${isOpen ? "right-0" : "-right-full"} flex max-lg:fixed max-lg:top-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col gap-7 items-center justify-center`}>
                                {
                                    navLinkData.map((item, index) => (
                                        <li key={index}>
                                            <a className="text-base font-normal leading-6 tracking-wide text-white duration-300 sm:text-lg md:text-xl navLinks" href={item.path} onClick={() => setOpen(false)}>{item.link}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="items-center hidden gap-5 lg:flex">
                                <a
                                    href="#"
                                    className="font-normal text-xl leading-[15px] duration-300 text-white hover:text-[#B302B1]"
                                >
                                    Log in
                                </a>
                                <CommonBtn name="Sing up" />
                            </div>
                            <div className='relative z-[110] mx-2 sm:mx-3 lg:hidden'>
                                <Hamburger toggled={isOpen} toggle={setOpen} size={26} rounded distance="sm" direction='right' duration={0.5} color='#FFF' />
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center max-w-[691px] px-3 mx-auto relative z-10 mt-16 pt-2">
                    <h2 className="font-semibold text-center text-white text-3xl2 sm:text-5xl md:text-6xl lg:text-7xl leading-11 md:leading-13">Unleash <span className="text-transparent bg-headerTextgradient bg-clip-text">Creativity</span>, Effortlessly</h2>
                    <p className="mt-3 text-base font-normal text-center text-white md:leading-8 sm:text-lg md:text-xl md:mt-4">Elevate your agency's output with state-of-the-art AI, engineered to innovate at the speed of thought.</p>
                    <CommonBtn className="mt-5" name="Try Now" />
                </div>
            </div>
            <div className="container xl:max-w-[1320px]">
                <img src={dashboardimg} alt="dashboardimg" className="mx-auto -translate-y-[43%] pl-4 sm:pl-5 md:pl-8 lg:pl-12 lg:w-[1015px] md:w-[600px] max-h-[400px] md:max-h-[687px] relative z-10" />
            </div>
            {
                isOpen && (
                    <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-20'>
                    </div>
                )
            }
        </>
    );
};

export default Header;