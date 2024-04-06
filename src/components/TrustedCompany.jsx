import React from "react";
import { companiesData } from "../common/TrustedHelper";
const TrustedCompany = () => {
  return (
    <div className=" bg-[#040403] sm:pt-10 pb-10 overflow-hidden ">
      <div className="max-w-[1112px] mx-auto px-3 sm:pt-10 mt-8 pb-10 mb-8">
        <p className=" font-inter font-normal text-xl leading-[30px] text-center text-[#EAECF0]">
          Trusted by 4,000+ companies
        </p>
        <div className=" flex items-center  xl:gap-[47px] gap-8 justify-center mt-8 max-[850px]:translate-x-[10%]   max-[850px]:animate-moveX min-w-[612px]">
          {companiesData.map((obj, i) => (
            <img
              key={i}
              src={obj.img}
              alt={obj.alt}
              className={` xl:w-full lg:w-[160px] md:w-[140px] h-12 ${obj.none}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
