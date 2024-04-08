import React from "react";

const Preloader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-black z-[100] w-full flex flex-col gap-5 justify-center items-center">
        <h1 className=" font-medium text-white text-8xl  text-center ">
          C
          <span className=" d-block  text-transparent bg-headerTextgradient bg-clip-text">
            U
          </span>
          P
          <span className=" d-block  text-transparent bg-headerTextgradient bg-clip-text">
            I
          </span>
          D
          <span className=" d-block  text-transparent bg-headerTextgradient bg-clip-text">
            A
          </span>
          I
        </h1>
        <div className="  bg-bg-gradient p-2  animate-spin rounded-full">
          <div className="bg-black w-16 h-16 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
