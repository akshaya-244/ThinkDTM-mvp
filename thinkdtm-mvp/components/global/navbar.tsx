import Link from "next/link";
import React from "react";
import { ModeToggle } from "./light-dark";


const Navbar = async () =>{
    return (
        <header className="fixed right-0 left-0 top-0 py-10 px-4 bg-black/50 backdrop-blur-lg z-[100] flex items-center border-b-[2px] border-white-800 justify-between">
            <aside className="flex items-center gap-[2px] hover:text-gray-400">
                <Link  href="#home" className="text-3xl font-bold">ThinkDTM</Link>

            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block" >
                <ul className="text-xl flex items-center gap-4 list-none">
                    <li className="hover:text-gray-400">
                        <Link href="#services"> Services</Link>
                    </li>
                    <li className="hover:text-gray-400">
                        <Link href="#values"> Values</Link>
                    </li>
                    <li className="hover:text-gray-400">
                        <Link href="#about"> About Us</Link>
                    </li>
                    <li className="hover:text-gray-400">
                        <Link href="#contact"> Contact us</Link>
                    </li>
                </ul>

            </nav>
            <aside className="flex items-center gap-[2px]">
                <p className="text-3xl font-bold"><ModeToggle /></p>

            </aside>
        </header>
    )
}

export default Navbar