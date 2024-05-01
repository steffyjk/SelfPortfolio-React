import { IoHomeOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <section className="header bg-[#485464] py-[10px] fixed w-[100%]">
      <div className="container mx-auto !max-w-[1390px] relative md:px-[30px] px-[10px]">
        <div className="con flex justify-between items-center">
          <div className="part_1 flex items-center gap-3">
            <div className="logo">
              <img
                src={require("../asset/asset 0.png")}
                alt=""
                height={"60px"}
                width={"60px"}
              />
            </div>
            <h2 className="font-bold text-white md:text-[18px] mt-[7px]">
              Steffy JK | Software Engineer
            </h2>
          </div>
          <div className="part_2 hidden md:block">
            <div className="menu">
              <ul className="flex gap-8">
                <li>
                  <a href="" className="text-white text-[25px]">
                    <IoHomeOutline></IoHomeOutline>
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-[25px]">
                    <VscGraph></VscGraph>
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-[25px]">
                    <IoFolderOpenOutline></IoFolderOpenOutline>
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-[25px]">
                    <FiPhone></FiPhone>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm_screen md:hidden">
            <div className="icon">
              <FaBars className="text-white text-[20px]"></FaBars>
              <ul className="main_menu hidden absolute left-0 top-[120%] bg-[#F5F5F8] w-[100%] p-4">
                <li className="relative mb-4">
                  <a
                    href=""
                    className="px-[20px] py-4 text-left text-[20px] font-[600] rounded-2xl bg-white flex text-[#47494c] justify-between"
                  >
                    Home
                    <IoHomeOutline className="text-[#017aff] mt-[5px]"></IoHomeOutline>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="Learn"
                    className="px-[20px] flex justify-between py-4 text-left text-[20px] font-[600] rounded-2xl bg-white text-[#47494c]"
                  >
                    About
                    <VscGraph className="mt-[9px]" />
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="Features"
                    className="px-[20px] flex justify-between py-4 text-left text-[20px] font-[600] rounded-2xl bg-white text-[#47494c]"
                  >
                    Work <IoFolderOpenOutline className="mt-[9px]" />
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="px-[20px] flex  py-4 text-left text-[20px] font-[600] rounded-2xl bg-white text-[#47494c] justify-between"
                  >
                    Contect <FiPhone className="mt-[9px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
