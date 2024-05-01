import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

var a = 0;

function Work() {
  const [isOpen, setIsOpen] = useState({
    isOpen1: true,
    isOpen2: true,
  });

  const toggleAccordion = (isSecond = false) => {
    setIsOpen({
      ...isOpen,
      [`isOpen${isSecond ? "2" : "1"}`]:
        !isOpen[`isOpen${isSecond ? "2" : "1"}`],
    });
  };

  return (
    <>
      <section className="work pb-[100px]">
        <div className="container xl:!w-[1280px] mx-auto xl:p-0">
          <div className="con">
            <div className="p_1 p-2">
              <div className="border rounded">
                <div
                  className="flex gap-2 items-center p-[10px] border-b cursor-pointer bg-[#F9FAFB]"
                  onClick={() => toggleAccordion(false)}
                >
                    <svg
                    className={`w-6 h-6 ${
                      isOpen.isOpen1 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <h2 className="text-lg font-semibold"> Work Skills </h2>
                  
                </div>
                {isOpen.isOpen1 && (
                  <div className="p-5 text-[#4b5563]">
                    <div className="!my-4">
                        This category includes technical skills relevant to software
                        development and IT infrastructure. These skills are
                        essential for building robust applications and managing
                        cloud services.
                    </div>
                    <div className=" flex gap-2 justify-center flex-wrap">
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Python</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Django</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Django Rest Framework</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Flask</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Elasticsearch</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Angular</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>TypeScript</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Flask Restful</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>AWS</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>AWS S3 Bucket</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>AWS EC2</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Scrapy</span>
                        <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Selenium</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="p_2 p-2">
              <div className="border rounded">
                <div
                  className="flex gap-2 items-center p-[10px] border-b cursor-pointer bg-[#F9FAFB]"
                  onClick={() => toggleAccordion(true)}
                >
                    <svg
                    className={`w-6 h-6 ${
                      isOpen.isOpen2 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <h2 className="text-lg font-semibold">Soft Skills</h2>
                </div>
                {isOpen.isOpen2 && (
                  <div className="p-5 text-[#4b5563]">
                  <div className="!my-4">
                    Soft skills are interpersonal skills that enable effective communication, collaboration, and  problem-solving in the workplace. These skills are crucial for teamwork and leadership roles.
                  </div>
                  <div className=" flex gap-2 justify-center flex-wrap">
                      <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Team Leadership</span>
                      <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Time Management</span>
                      <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Team Work</span>
                      <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Communication</span>
                      <span className="px-[7px] py-[4px] flex text-[12px] text-black font-bold bg-[#E1E8EF] rounded-md"><IoCheckmark className="text-[16px] mr-[2px] mt-[2px]"></IoCheckmark>Problem Solving</span>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
