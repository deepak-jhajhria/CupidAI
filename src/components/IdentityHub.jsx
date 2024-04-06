import { CircleEllipseSvg, GradientLineSvg } from "./Icons"
const IdentityHub = () => {
    return (
        <div className="py-[163px] overflow-x-clip relative">
            <div className="flex flex-col w-full justify-center items-center max-w-[691px] mx-auto relative z-10">
                <h2 className="font-inter text-[60px] text-white font-semibold text-center">Be part of the future of IdentityHub</h2>
                <span><GradientLineSvg /></span>
                <p className="text-xl font-inter font-normal text-[#E4E2EE] mt-6 text-center">Unleash the power of AI within cupid. Upgrade your productivity with cupid, the open AI chat app.</p>
                <button className=" text-white py-3 px-5 bg-gradient-to-t from-[#7F04E2] from-15% to-[#F70071] rounded-xl mt-8">Start free trail</button>
            </div>
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2]"><CircleEllipseSvg /></span>
        </div>
    )
}

export default IdentityHub
