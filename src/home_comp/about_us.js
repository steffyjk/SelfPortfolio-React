import { FaChevronDown } from "react-icons/fa6";


function About()
{
    return(
        <section className="about_us py-[100px] pt-[180px] text-center overflow-hidden">
            <div className="container mx-auto w-[1462px]">
                <div className="con mx-auto">
                    <div className="first">
                        <div className="box w-[132px] mx-auto !h-[170px] relative">
                            <a href="">
                                <div className="icon p-[28px] mx-auto">
                                    <img src={require("../asset/asset 1.png")} className="mx-auto" width={'48px'} />
                                </div>
                                <div className="content leading-5">
                                    <h3 className="font-bold !text-[#4b5563]">Steffy JK</h3>
                                    About Me
                                </div>
                                <button className="h-[24px] w-[24px] absolute rounded-full bottom-[-12px] bg-white left-[58px]"><FaChevronDown className="ml-[3px]"></FaChevronDown></button>
                            </a>
                        </div>
                    </div>
                    <div className="second flex mt-[39px] justify-between">
                        <div className="box w-[132px] !h-[170px] relative ml-[278px]">
                            <a href="">
                                <div className="icon p-[28px] mx-auto">
                                    <img src={require("../asset/asset 2.png")} className="mx-auto" width={'48px'} />
                                </div>
                                <div className="content leading-5">
                                    <h3 className="font-bold !text-[#4b5563]">Steffy JK</h3>
                                    About Me
                                </div>
                                <button className="h-[24px] w-[24px] absolute rounded-full bottom-[-12px] bg-white left-[58px]"><FaChevronDown className="ml-[3px]"></FaChevronDown></button>
                            </a>
                        </div>
                        <div className="box w-[132px] !h-[170px] relative mr-[292px] spcial">
                            <a href="">
                                <div className="icon p-[28px] mx-auto">
                                    <img src={require("../asset/asset 3.png")} className="mx-auto" width={'48px'} />
                                </div>
                                <div className="content leading-5">
                                    <h3 className="font-bold !text-[#4b5563]">Steffy JK</h3>
                                    About Me
                                </div>
                                <button className="h-[24px] w-[24px] absolute rounded-full bottom-[-12px] bg-white left-[58px]"><FaChevronDown className="ml-[3px]"></FaChevronDown></button>
                            </a>
                        </div>
                    </div>
                    <div className="third flex">
                        <div className="second2 flex mt-[39px] justify-between">
                            <div className="box relative ml-[117px] h-fit">
                                <a href="">
                                    <div className="content p-[20px]">
                                        <span className="">12th [ HSC Science ]</span>
                                    </div>
                                </a>
                            </div>
                            <div className="box relative ml-[64px] h-fit">
                                <a href="">
                                    <div className="content p-[20px]">
                                        <span>Computer Engineer [ B.Tech ]</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="second2 flex mt-[39px] justify-between">
                            <div className="box relative ml-[50px]">
                                <a href="">
                                    <div className="content p-[28px] leading-5">
                                        <h3 className="font-bold !text-[#4b5563]">Software Developer [ Python Developer ]</h3>
                                        <span>Inexture Solutions LLP | 2022 - 2023</span>
                                    </div>
                                </a>
                            </div>
                            <div className="box relative ml-[37px]">
                                <a href="">
                                    <div className="content p-[28px] leading-5">
                                        <h3 className="font-bold !text-[#4b5563]">Software Engineer [ FullStack Developer ]</h3>
                                        <span>Ahmedabad, Gujarat | 2023 - Present</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;