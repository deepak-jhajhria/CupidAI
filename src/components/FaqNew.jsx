import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind";
function Arrow({ id, open }) {
    return (
        <div className="relative ">
            <svg className={`${id === open ? "rotate-180" : "rotate-0"
                }  sm:mr-6   transition-transform`}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.7">
                    <path
                        d="M12.449 15.6904C12.3157 15.6904 12.1864 15.6654 12.061 15.6154C11.9357 15.5654 11.8317 15.4987 11.749 15.4154L7.14902 10.8154C6.96569 10.632 6.87402 10.3987 6.87402 10.1154C6.87402 9.83205 6.96569 9.59871 7.14902 9.41538C7.33236 9.23205 7.56569 9.14038 7.84902 9.14038C8.13236 9.14038 8.36569 9.23205 8.54902 9.41538L12.449 13.3154L16.349 9.41538C16.5324 9.23205 16.7657 9.14038 17.049 9.14038C17.3324 9.14038 17.5657 9.23205 17.749 9.41538C17.9324 9.59871 18.024 9.83205 18.024 10.1154C18.024 10.3987 17.9324 10.632 17.749 10.8154L13.149 15.4154C13.049 15.5154 12.9407 15.5864 12.824 15.6284C12.7074 15.6704 12.5824 15.691 12.449 15.6904Z"
                        fill="#131200"
                    />
                </g>
            </svg>
        </div>
    );
}
const Accordionsec = () => {
    const [open, setOpen] = React.useState(1);
    const AccordionOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="relative z-10">
            <div className=" container mx-auto px-3 pt-[40px] md:pt-[90px] lg:pt-[150px]">
                <div className=" mx-auto relative max-w-[774px] px-2 ">
                    <div className="shadow-[0_4px_32px_0_#00000014]">
                        <Accordion
                            onClick={() => AccordionOpen(1)}
                            className={` rounded-[6px] shadow-[0px 4px32px_0px_#00000014] cursor-pointer border bg-white p-4 md:p-6  ${open == 1
                                ? "shadow-[inset_0_-5px_1px_#a854e9] border-[#a854e9] "
                                : "shadow-none border-[#EBDAF8] "
                                }`}
                            open={open === 1}
                            icon={<Arrow id={1} open={open} />}
                        >
                            <AccordionHeader className=" font-Outfit text-sm md:text-base font-medium text-[#4D4D4D] w-full justify-between">
                                What is Artificial Intelligence (AI)?
                            </AccordionHeader>
                            <AccordionBody className=" font-Exo text-sm md:text-base font-medium text-[#4D4D4D] max-w-[680px] pt-3 ">
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.{" "}
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordionsec