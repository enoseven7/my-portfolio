import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa"; // optional icons

export default function Contact() {
    return (
        <section className="py-16" id="contact">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl sm:6xl lg:text-7xl text-center tracking-wide">
                    <span className='text-right bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text animate-gradient [animation-duration:_2s]'>
                        Contact
                    </span>
                </h1>
                <p className='relative mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
                    Feel free to contact me via any of the methods below for any inquiries or opportunities.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    <div className="block backdrop-blur-sm border border-neutral-700/80 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-2">Email</h2>
                        <a href="mailto:ngwaethan0@gmail.com" className="text-gray-600 hover:underline flex items-center justify-center gap-3 mt-2">
                            <FaEnvelope className="mr-2" />
                            <span>ngwaethan0@gmail.com</span>
                        </a>
                    </div>
                    <div className="block backdrop-blur-sm border border-neutral-700/80 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-2">Phone Number</h2>
                        <a href="tel:+447421003742" className="text-gray-600 hover:underline flex items-center justify-center gap-3 mt-2">
                            <FaPhone className="mr-2" />
                            <span>+44 7421 003742</span>
                        </a>
                    </div>
                    <div className="block backdrop-blur-sm border border-neutral-700/80 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold mb-2">Linkedin</h2>
                        <a href="https://uk.linkedin.com/in/ethan-ngwa-a13776358" className="text-gray-600 hover:underline flex items-center justify-center gap-3 mt-2">
                            <FaLinkedin className="mr-2" />
                            <span>My Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
