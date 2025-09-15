import avatar from "../assets/avatar.jpg";
import { navItems } from "../constants";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav 
            className={`sticky top-4 z-50 py-3 backdrop-blur-lg border border-neutral-700/80 transition-all duration-300 ease-in-out
                ${mobileOpen ? 'rounded-[12px]' : 'rounded-[9999px]'}`}
        >
            <div className="container px-4 mx-auto relative text-sm">
                {/* Top row */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="h-10 w-10 mr-2 rounded-full"
                        />
                        <span className="text-xl tracking-tight">Ethan Ngwa</span>
                    </div>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-blue-400 transition-colors">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${
                        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                >
                    <ul className="flex flex-col items-center space-y-3 py-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="block px-4 py-2 text-center hover:bg-neutral-800 rounded-md transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;