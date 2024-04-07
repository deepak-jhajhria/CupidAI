import { CircleEllipseSvg, GradientLineSvg } from "./Icons"
const IdentityHub = () => {
    return (
        <div className="py-10 sm:py-24 md:py-32 lg:py-40 overflow-x-clip relative mt-10 sm:mt-16 md:mt-24 lg:mt-48">
            <div className="flex flex-col w-full justify-center items-center max-w-[691px] px-3 mx-auto relative z-10">
                <h2 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold text-center md:leading-13">Be part of the future of <br /> IdentityHub</h2>
                <span className="-mt-1"><GradientLineSvg /></span>
                <p className="text-base sm:text-lg md:text-xl font-normal text-gray-white-100 mt-3 md:mt-4 text-center leading-8">Unleash the power of AI within cupid. Upgrade your productivity with cupid, the open AI chat app.</p>
                <button className=" text-white py-3 px-5 bg-gradient-to-r from-blue duration-300 hover:shadow-gradientRed from-15% to-orange-red rounded-xl mt-4 sm:mt-6 md:mt-8 leading-4">Start free trail</button>
            </div>
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2]"><CircleEllipseSvg /></span>
        </div>
    )
}

export default IdentityHub
