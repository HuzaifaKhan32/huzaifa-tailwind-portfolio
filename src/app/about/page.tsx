import Image from "next/image";
import pic from "../../../public/about-picture.jpg";

const About = () => {
    return(
        <div className="about-container bg-[#170550] w-full sm:h-[auto] lg:h-screen text-white sm:overflow-visible lg:overflow-hidden sm:py-[6vh] lg:py-[5vh] sm:px-[2vw] lg:px-[8vw]">
            <div className="flex justify-center items-center w-full ">
                <h1 className="text-4xl border-b-[1px] border-solid border-white animate-navbarLoading">About <span className="text-[#F86F03]">Me</span></h1>
            </div>
            <div className="flex justify-between items-center w-full sm:pt-[5vh] lg:pt-[10vh] h-full sm:flex-col lg:flex-row">
                <div className="lg:w-[50%] h-full flex sm:justify-center lg:justify-start items-start sm:w-full animate-moveInLeft">
                    <div className="flex sm:justify-center lg:justify-start lg:items-start sm:items-center w-[85%] h-[80%]">
                        <Image
                        src={pic}
                        alt="about pic"
                        className="w-[75%] h-full rounded-[10px] object-cover"/>
                    </div>
                </div>
                <div className="sm:w-full lg:w-[50%] h-[100%] flex animate-moveInRight">
                    <div className="flex flex-col sm:justify-center lg:justify-between sm:items-center lg:items-start h-[80%]">
                        <h1 className="text-[1.9rem] leading-[2.4rem] font-[700] w-[55%] sm:text-center lg:text-left sm:mt-[20px] lg:m-0">Web Developer & Web Designer</h1>
                        <p className="sm:text-center lg:text-left sm:mt-[20px] lg:m-0">I&apos;m a passionate web developer and designer skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS. My focus is on creating responsive and engaging digital experiences that bring ideas to life with seamless design and robust functionality. With a strong foundation in both frontend and backend development, I enjoy tackling diverse projects that help businesses enhance their online presence.</p>
                        <p className="sm:text-center lg:text-left sm:mt-[20px] lg:m-0">Whether it&apos;s building dynamic applications or designing intuitive user interfaces, I am committed to delivering innovative solutions that drive user engagement and support business growth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
