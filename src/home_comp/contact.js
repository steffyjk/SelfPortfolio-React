import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

function Contact()
{
    return(
        <section className="contect py-[100px] overflow-hidden">
            <div className="container xl:!w-[1464px] mx-auto px-5">
                <div className="con">
                    <div className="p_1 flex xl:gap-8 gap-6 flex-wrap lg:flex-nowrap">
                        <div className="main_box lg:w-[25%] md:!w-[352px] w-full text-center">
                            <div className="sub_box bg-[#F0F0F0] p-4 h-[172px]">
                                <div className="icon text-center">
                                    <CiLocationOn className="text-[50px] mx-auto"></CiLocationOn>
                                </div>
                                <div className="content">
                                    <h2 className="text-[20px] font-bold text-[#4B5563] mt-3">Location</h2>
                                    <span>Ahmedabad | Gujarat</span>
                                </div>
                            </div>
                        </div>
                        <div className="main_box lg:w-[25%] md:!w-[352px] w-full text-center">
                            <div className="sub_box bg-[#F0F0F0] p-4 h-[172px]">
                                <div className="icon">
                                    <BsTelephone className="text-[50px] mx-auto"></BsTelephone>
                                </div>
                                <div className="content">
                                    <h2 className="text-[20px] font-bold text-[#4B5563] mt-3">Call Me</h2>
                                    <span>
                                       No1: +91 123456789
                                        <br />
                                       No2: +91 123456789
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="main_box lg:w-[25%] md:!w-[352px] w-full text-center">
                            <div className="sub_box bg-[#F0F0F0] p-4 h-[172px]">
                                <div className="icon">
                                    <MdOutlineEmail className="text-[50px] mx-auto"></MdOutlineEmail>
                                </div>
                                <div className="content">
                                    <h2 className="text-[20px] font-bold text-[#4B5563] mt-3">Email Me</h2>
                                    <span>steffy.jk007@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="main_box lg:w-[25%] md:!w-[352px] w-full text-center">
                            <div className="sub_box bg-[#F0F0F0] p-4 h-[172px]">
                                <div className="icon">
                                    <CiClock2 className="text-[50px] mx-auto"></CiClock2>
                                </div>
                                <div className="content">
                                    <h2 className="text-[20px] font-bold text-[#4B5563] mt-3">Open Hours</h2>
                                    <span>
                                        Monday - Friday
                                        <br />
                                        9:00AM - 05:00PM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p_2 mt-[70px] bg-[#E0E0E0] md:w-[500px] w-[280px] mx-[auto] p-8">
                        <div className="text-center">
                            <h2 className="text-[30px] text-[#4B5563] font-bold mb-3">Contect Me</h2>
                            <span>Do not hesitate to contact me</span>
                        </div>
                        <div className="input mt-[30px]">
                            <span className="text-[#4B5563]">Name</span>
                            <br />
                            <input type="text" placeholder="Enter Your Name" className="p-[10px] rounded-md w-full mb-5" />
                            <span className="text-[#4B5563]">Email</span>
                            <br />
                            <input type="text" placeholder="Enter your email" className="p-[10px] rounded-md w-full mb-5" />
                            <span className="text-[#4B5563]">Reason</span>
                            <br />
                            <input type="text" placeholder="Enter Reason" className="p-[10px] rounded-md w-full mb-5" />
                            <span className="text-[#4B5563]">Message</span>
                            <br />
                            <textarea placeholder="Enter your Message" className="p-[10px] rounded-md w-full mb-8 max-h-[120px]" />
                            <button className=""><a href="" className="px-[20px] py-[10px] bg-[#007BFF] text-white rounded-md !w-[142px] mx-auto my_sp_button md:!ml-[147px] block">Send Message</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;