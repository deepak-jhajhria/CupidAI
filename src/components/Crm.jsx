import React from "react";
import { GridlineBox, YellowMan } from "./Icons";
import crmai from "../assets/images/clupiai.webp";
const crmData = [
  {
    svg: <GridlineBox />,
    title: "Hyper Realistic AI Content",
    para: "Advanced generation techniques helps us generate the best AI generation within the industry",
  },
  {
    svg: <GridlineBox />,
    title: "Streamlined Workflow",
    para: "Enjoy a seamless and swift workflow pipeline with CUPID AI, simplifying your content creation and management processes.",
  },
  {
    svg: <GridlineBox />,
    title: "Universal verification",
    para: "Verify your model anywhere, anytime with our AI content generation methods.",
  },
];
const Crm = () => {
  return (
    <div className=" bg-[#040403] pt-[45px] mt-[-2px]">
      <div className=" w-full px-3 md:px-10 lg:px-[72px]">
        <h2 className=" font-inter font-bold text-6xl text-white leading-[56px]  tracking-[-1.2px]">
          A CRM created <span className=" block ">to be your own.</span>
        </h2>
        <p className=" font-inter font-medium text-2xl text-[#646464] pt-[22px] tracking-[0.2px]">
          Tweak anything and everything to ensure fits
          <span className=" block">
            your business, not the other way around.
          </span>
        </p>
        <div className="mt-[92px] overflow-hidden mb-[84px] pt-9 px-5 lg:px-10 border-[#3C3C3C] border  rounded-[20px] bg-[#0A0A0A] ">
          <div className=" flex flex-row justify-between max-xl:overflow-x-scroll flex-nowrap  mb-16 ">
            {crmData.map((obj, i) => (
              <div key={i} className="  min-w-[350px] max-w-[407px] pe-4 h-full ">
                <div className=" flex items-center gap-[10px]">
                  <span>{obj.svg}</span>
                  <h2 className=" font-inter font-semibold text-lg leading-[21px] text-[#57606A]">
                    {obj.title}
                  </h2>
                </div>
                <p className=" pt-[10px] font-inter font-medium text-base leading-6 tracking-[-0.2px] text-[#57606A]">
                  {obj.para}
                </p>
              </div>
            ))}
          </div>
          <img src={crmai} alt="crmai" className=" rounded-t-[20px]" />
        </div>
        <sapn className=" rounded-full text-center  flex  justify-center ">
          <YellowMan />
        </sapn>
        <p className=" font-inter font-normal pt-6 text-2xl leading-[30px] tracking-[-0.5px] text-center max-w-[579px] mx-auto text-[#99A2AF]">
          “My team loves cupid reporting system because it’s so dynamic. We can
          splice our data in so many different ways and combinations.”
        </p>
        <p className=" pt-7 pb-12 text-[#646464] font-inter font-medium text-sm leading-5 tracking-[-0.1px] text-center">
          Davio White <span className=" block">Chief of Staff, Pallet</span>
        </p>
      </div>
    </div>
  );
};

export default Crm;
