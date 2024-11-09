import Link from "next/link";
import Image from "next/image"
import github from "../../../public/github.png"
import linkedIn from "../../../public/linkedIn.png"
import insta from "../../../public/Instagram.png"
import banner from "../../../public/banner.png"

const Hero = () => {
    return (
        <div className="bg-[#31065A]
        text-white
        w-screen
        sm:h-[auto]
        lg:h-screen 
        flex 
        sm:justify-center 
        lg:justify-between 
        items-center
         sm:overflow:visible 
         lg:overflow-hidden 
         sm:px-[2vw] 
         sm:py-[4vh] 
         lg:px-[8vw] 
         sm:flex-col-reverse  
         lg:flex-row
         lg:flex">
            <div className="
            flex 
            sm:justify-center 
            lg:justify-start 
            items-center 
            flex-col 
            sm:w-full
            lg:w-[50%]
            animate-moveInLeft">
                <div className="
                sm:w-full 
                flex 
                sm:justify-between 
                lg:justify-start 
                sm:items-center
                lg:items-start 
                flex-col">
                    <div className="text-[#F86F03]
                    text-[1.9rem]
                    leading-[2.4rem]">Hi, it&apos;s me</div>
                    <div className="text-[3.9rem] leading-[4.4rem] sm:text-center lg:text-left">Huzaifa Khan</div>
                    <div className="text-[2.2rem] leading-[2.6rem] sm:text-center lg:text-left">And I&apos;m a <span className="text-[#F86F03]">Frontend Developer</span></div>
                    <p className="mt-[10px] sm:text-center lg:text-left">
                        I am a passionate front-end web developer skilled in creating user-friendly and visually appealing websites using HTML, CSS, and JavaScript. I strive to deliver high-quality, responsive designs that enhance user experience.
                    </p>
                </div>
                <div className="flex w-full items-center sm:justify-center lg:justify-between mt-[10px] h-[8vh] " >
                    <div className="sm:w-[50%] lg:w-[30%] flex justify-between items-center">

                        <Link href="https://www.linkedin.com/in/huzaifa-khan-b6bb76308/" target="_blank">
                            <div className="w-full flex justify-center items-center">
                                <Image
                                    src={linkedIn}
                                    width={30}
                                    height={24}
                                    alt="linkedIn"
                                />
                            </div>
                        </Link>
                        <Link href="https://github.com/HuzaifaKhan32" target="_blank">
                            <div className="w-full flex justify-center items-center">
                                <Image
                                    src={github}
                                    width={45}
                                    height={30}
                                    alt="linkedIn" />
                            </div>
                        </Link>
                        <Link href="https://www.instagram.com/hzaifa_nadeem/" target="_blank">
                            <div className="w-full flex justify-center items-center">
                                <Image
                                    src={insta}
                                    width={30}
                                    height={30}
                                    alt="linkedIn" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex lg:justify-start sm:justify-center items-center mt-[20px]">
                    <button className="bg-[#F86F03] text-white sm:w-[50%] lg:w-[30%] p-[2vh] text-center rounded-[20px] hover:bg-white hover:text-black transition-all duration-1000 ease-out">Download CV</button>
                </div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="banner animate-moveInRight">
                    <Image
                        src={banner}
                        alt="banner"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
