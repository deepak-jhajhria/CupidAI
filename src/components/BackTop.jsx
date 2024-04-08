import React from "react";
import backtop from "../assets/images/BackTo.png";
const BackTop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 1000
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div>
      <div
        onClick={() =>
          setPosition({ ...position, position: { top: 0, left: 0 } })
        }
        className="fixed hidden bottom-[8%] right-[1%] z-30 translate-y-[0%] animate-bounce"
        ref={scrollTop}
      >
        <div className=" rounded-[50%] p-[6px] sm:p-2 cursor-pointer transform-[.3s] bg-bg-gradient  hover:bg-gradientTrailBtn ">
          <img
            src={backtop}
            alt="backtop"
            width={20}
            height={20}
            className=" rounded-2 box-line "
          />
        </div>
      </div>
    </div>
  );
};

export default BackTop;
