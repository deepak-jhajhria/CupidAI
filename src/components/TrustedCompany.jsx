import React from "react";
import blotshift from "../assets/images/boltshift.webp";
import lighbox from "../assets/images/lightbox.webp";
import featherdev from "../assets/images/featherdev.webp";
import spherule from "../assets/images/spherule.webp";
import globalbank from "../assets/images/globalbank.webp";
const companies = [
  { img: blotshift, alt: "blotshift" },
  { img: lighbox, alt: "lighbox" },
  { img: featherdev, alt: "featherdev" },
  { img: spherule, alt: "spherule" },
  { img: globalbank, alt: "globalbank" },
];
const TrustedCompany = () => {
  return (
    <div className=" bg-[#040403] pt-10 pb-10 overflow-hidden ">
      <div className="container pt-10 mt-8 pb-10 mb-8">
        <p className=" font-inter font-normal text-xl leading-[30px] text-center text-[#EAECF0]">
          Trusted by 4,000+ companies
        </p>
        <div className=" flex items-center xl:gap-[47px] gap-6 justify-center mt-8 px-16 max-sm:animate-moveX2 max-md:animate-moveX min-w-[612px]">
          {companies.map((obj, i) => (
            <img key={i} src={obj.img} alt={obj.alt} className=" xl:w-full lg:w-[160px] md:w-[120px] h-12" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
