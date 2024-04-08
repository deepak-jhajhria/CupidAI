import { companiesData } from "../common/TrustedHelper";
const TrustedCompany = () => {
  return (
    <div className="pb-10 -mt-24 overflow-hidden sm:-mt-40 md:-mt-64 bg-bodymain sm:pt-10">
      <div className="max-w-[1112px] mx-auto px-3 sm:pt-10 mt-8 pb-10 mb-8">
        <p className="  font-normal lg:text-xl sm:text-lg text-base leading-[30px] text-center text-gray-white-200">
          Trusted by 4,000+ companies
        </p>
        <div className="flex items-center justify-center gap-8 mt-8 xl:gap-12 max-slg:animate-moveX">
          {companiesData.map((obj, i) => (
            <img
              key={i}
              src={obj.companyLogo}
              alt={obj.alt}
              className={` xl:w-full lg:w-40 md:w-36  h-12 ${obj.none}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
