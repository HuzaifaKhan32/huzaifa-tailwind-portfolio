import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
        <div className="contact-container bg-[#31065A] w-full sm:h-[auto] lg:h-screen sm:px-[2vw] sm:py-[5vh] lg:px-[8vw] lg:py-[5vh] sm:overflow-visible lg:overflow-hidden text-white">
            <div className=" text-4xl flex justify-center items-center">
                <h1 className="text-white border-solid border-b-[1px] border-white animate-navbarLoading">Contact</h1>
            </div>
            <div className="flex justify-between items-center w-full sm:flex-col lg:flex-row sm:h-screen">
                <div className="flex sm:justify-center sm:items-center lg:justify-evenly lg:items-start flex-col sm:w-full lg:w-[30%] h-[20%] sm:pt-[5rem] lg:pt-0 animate-moveInLeft">
                    <div className="flex justify-between my-2">
                        <FontAwesomeIcon icon={faPhone} className="flex justufi-center items-center" />
                        <p className="flex justufi-center items-center mx-4">+92 319 740 8731</p>
                    </div>
                    <div className="flex justify-between my-2">
                        <FontAwesomeIcon icon={faEnvelope} className="flex justufi-center items-center" />
                        <p className="flex justufi-center items-center mx-4">huzaifakhan0856551@gmail.com</p>
                    </div>
                    <div className="flex justify-between my-2">
                        <FontAwesomeIcon icon={faLocationDot} className="flex justufi-center items-center" />
                        <p className="flex justufi-center items-center mx-4">5/187 Liaquatabad, Karachi, Pakistan</p>
                    </div>
                </div>
                <div className="sm:w-[90%] lg:w-[55%] h-screen flex justify-center items-center">
                    <div className="w-full animate-moveInRight">
                        <form className="flex flex-col justify-between w-full">
                            <div className="">
                                <input type="text" placeholder="Full Name" className="w-full rounded-[20px] p-[1vh] pl-[2vw] mt-[10px] backdrop-blur-[10px] bg-white/[0.151] outline-none border-none"/>
                            </div>
                            <div className="email">
                                <input type="text" placeholder="Email Address" className="w-full rounded-[20px] p-[1vh] pl-[2vw] mt-[10px] backdrop-blur-[10px] bg-white/[0.151] outline-none border-none"/>
                            </div>
                            <div className="w-full flex justify-between">
                                <input type="number" placeholder="Phone Number" className="w-[60%] rounded-[20px] p-[1vh] pl-[2vw] mt-[10px] backdrop-blur-[10px] bg-white/[0.151] outline-none border-none appearance-none"/>
                                <input type="text" placeholder="Subject" className="w-[30%] rounded-[20px] p-[1vh] pl-[2vw] mt-[10px] backdrop-blur-[10px] bg-white/[0.151] outline-none border-none" />
                            </div>
                            <div className="">
                                <textarea placeholder="Message" className="w-full rounded-[20px] h-[25vh] mt-[10px] backdrop-blur-[10px] bg-white/[0.151] p-[1vh] pl-[2vw] outline-none border-none resize-none"></textarea>
                            </div>
                            <div className="flex justify-center items-center w-full rounded-[20px] ">
                                <input type="submit" value="Send" className="w-[30%] rounded-[20px] backdrop-blur-[10px] bg-white/[0.151] p-[1vh] pl-[2vw] mt-[10px] outline-none border-none"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;