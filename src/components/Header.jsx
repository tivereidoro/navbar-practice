import React, { useState } from 'react';
import logo from "../assets/logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-gray-400 drop-shadow-md">
                <a href="#">
                    <img src={logo} alt="header-logo" className="w-52 hover:scale-100 transition-all" />
                </a>

                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Products</li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Explore</li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
                </ul>

                <div className="relative invisible md:flex items-center justify-center gap-3">
                    <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
                    <input type="text" className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" placeholder="Search .." />
                </div>

                <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

                <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                    <ul>
                        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</li>
                        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Products</li>
                        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Explore</li>
                        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
