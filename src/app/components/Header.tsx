"use client"
import Image from "next/image";
import logo from "../../../public/logo-removebg-preview.png";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useState } from "react";


const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId) as HTMLElement;

        if (element && window.innerWidth > 912) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            })
        }

        else {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            })
            handleSidebarVisibility();
        }
    }
    const [visibility, setVisibility] = useState<boolean>(false);

    const handleSidebarVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <div className="sm:px-[2vw] sm:py-[1vh] flex justify-between items-center w-full h-[14vh] bg-[#170550] lg:px-[7vw] text-white overflow-hidden ">
            <div className="image-container animate-moveInLeft">
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt="LOGO" />
            </div>
            <div className="sm:hidden md:hidden lg:flex justify-evenly items-center sm:w-[100%] lg:w-[50%] text-xl animate-navbarLoading">
                <Link href={"/"} className="text-[#F86F03]">Home</Link>
                <Link href={"/"} className=" link" onClick={() => scrollToSection(".about-container")}>About Me</Link>
                <Link href={"/"} className="link" onClick={() => scrollToSection(".contact-container")}>Contact</Link>
                <Link href={"/"} className="link">Service</Link>
                <Link href={"/"} className="link">Skills</Link>
                <Link href={"/"} className="link">Portfolio</Link>
            </div>
            <div className={`w-[70%] h-screen overflow-hidden z-[999] backdrop-blur-[10px] bg-white/[0.151] fixed top-0 right-0 flex flex-col px-[4vw] py-[2vh] text-xl ${visibility ? "block" : "hidden"}`}>
                <div className="cross-button">
                    <FontAwesomeIcon icon={faXmark} onClick={handleSidebarVisibility} className="text-4xl cursor-pointer" />
                </div>
                <Link href={"/"} className="my-2" onClick={() => scrollToSection(".hero-container")}>Home</Link>
                <Link href={"/"} className="my-2" onClick={() => scrollToSection(".about-container")}>About Me</Link>
                <Link href={"/"} className="my-2" onClick={() => scrollToSection(".contact-container")}>Contact</Link>
                <Link href={"/"} className="my-2">Service</Link>
                <Link href={"/"} className="my-2">Skills</Link>
                <Link href={"/"} className="my-2">Portfolio</Link>
                <Link href={"/"} className="my-2">Hire Me</Link>
            </div>
           
            <div className="flex justify-center items-center text-xl text-black">
                <button className="bg-white px-[3vw] py-[1vh] rounded-[20px] hover:bg-[#F86F03] transition-all duration-1000 ease-out sm:hidden md:hidden lg:block animate-moveInRight">Hire Me</button>
            </div>
            <div className="lg:hidden md:block text-4xl">
                <FontAwesomeIcon icon={faBars} className="" onClick={handleSidebarVisibility} />

            </div> 
        </div>
    )
}

export default Header;