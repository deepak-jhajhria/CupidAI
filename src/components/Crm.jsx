import React from "react";
import crmai from "../assets/images/clupiai.webp";
import { crmData } from "../common/TrustedHelper";
import { YellowMan } from "../common/TrustedIcons";
const Crm = () => {
  return (
    <div className=" bg-bodymain sm:pt-11 mt-[-2px] ">
      <div className="max-w-[1320px] mx-auto px-3">
        <h2 className="  font-bold sm:text-6xl text-4xl text-white leading-[56px]  tracking-[-1.2px]">
          A CRM created <br />
          to be your own.
        </h2>
        <p className="  font-medium text-2xl text-gray-white-700 pt-[22px] tracking-[0.2px]">
          Tweak anything and everything to ensure fits
          <br />
          your business, not the other way around.
        </p>
        <div className=" overflow-hidden my-10 md:mb-20 md:mt-24  pt-9 px-3 sm:px-6 lg:px-10 border-[#3C3C3C] border  rounded-[20px] bg-[#0A0A0A] ">
          <div className=" flex flex-row justify-between max-xl:overflow-x-scroll snap-mandatory snap-x scrolbar flex-nowrap mb-5 sm:mb-11  md:mb-16 ">
            {crmData.map((obj, i) => (
              <div
                key={i}
                className="group duration-200 snap-start mb-4 min-w-[324px]  sm:min-w-[400px]  sm:pe-4 h-full "
              >
                <div className="flex items-center gap-[10px]">
                  <span>{obj.svg}</span>
                  <h2 className=" group-hover:text-gray-dark-200 duration-200  font-semibold text-lg leading-[21px] text-gray-light-300">
                    {obj.title}
                  </h2>
                </div>
                <p className=" group-hover:text-gray-dark-200 duration-200 pt-[10px]  font-medium text-base leading-6 tracking-[-0.2px] text-gray-light-300">
                  {obj.para}
                </p>
              </div>
            ))}
          </div>
          <img
            src={crmai}
            alt="crmai"
            height={397}
            className=" min-h-[184px] w-full h-full rounded-t-[20px]"
          />
        </div>
        <sapn className=" rounded-full text-center  flex  justify-center ">
          <YellowMan />
        </sapn>
        <p className="  font-normal pt-6 text-2xl leading-[30px] tracking-wide text-center max-w-[590px] mx-auto text-gray-light-300">
          “My team loves cupid reporting system because it’s so dynamic. We can
          splice our data in so many different ways and combinations.”
        </p>
        <p className=" pt-7 pb-12 text-gray-white-700  font-medium text-sm leading-5 tracking-[-0.1px] text-center">
          Davio White <br />
          Chief of Staff, Pallet
        </p>
      </div>
    </div>
  );
};

export default Crm;
