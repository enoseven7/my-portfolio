import React, { useEffect, useState } from "react";
import aboutImg from "../assets/aboutDev.png";
import cspImg from "../assets/CSP.png";
import flImg from "../assets/flstudio.png";
import blenderImg from "../assets/blender.webp";
import aeImg from "../assets/aeImg.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
    AOS.init({
         duration: 500,
         mirror: true,
        once: false, });
  }, []);
    return (
        <div className="relative flex flex-col items-center mt-85 lg:mt-20" id="about">
            <h1 className="text-3xl sm:6xl lg:text-7xl text-center tracking-wide">
                <span className='bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text'>
                    About Me
                </span>
            </h1>
            <h2 data-aos="fade-up" className='mt-10 text-2xl text-center text-neutral-300 max-w-4xl'>
                How did it start?
            </h2>
            <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
                <img src={aboutImg} alt="Me developing this page" className="w-xl rounded-2xl mt-10 px-3" />
                <p className='mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
                    In around 2020, after being shut inside due to COVID-19, I decided to pick up new hobbies to
                    keep myself occupied. Roblox, was a game I played and enjoyed in my free time, and decided to pursue
                    learning how to make my own games on the platform. I started learning Lua, the programming language used for Roblox development,
                    and began creating simple games. As I delved deeper into game development, I discovered a love for coding and problem-solving, and the
                    creativity that can be expressed with it.
                    This initial experience sparked my interest in programming, leading me to explore other languages and technologies over the years.
                    I found a way to program no matter what resources I had available, such as in Year 7-8, when all I had was a school Chromebook,
                    I picked up HTML, CSS and Javascript, as it was the only language I could use and see visually on it. I have an application called
                    PC Usage Tracker available on the Microsoft Store, which you can check out in the projects section.
                </p>
            </div>

            <h2 className='mt-10 text-2xl text-center text-neutral-300 max-w-4xl' data-aos="fade-up">
                But what else do I do?
            </h2>
            <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center gap-8" data-aos="fade-left">
                
                <p className='mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
                    Although I am very passionate about coding, I have a variety of other hobbies which I've
                    experimented with and still do on a regular basis. Something I love more than anything is expressing
                    myself through different art forms, which is why I've been drawing ever since a kid. I've much since advanced
                    past that, using my laptop to create digital art using Clip Studio Paint, and I have dedicated lots of my time
                    to improving and creating work that I'm proud of.
                </p>
                <img src={cspImg} alt="Clip Studio Paint" className="w-xl rounded-2xl mt-10 px-3" />
            </div>
            <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
                <img src={flImg} alt="FL Studio" className="w-xl rounded-2xl mt-10 px-3" />
                <p className='mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
                    I also have quite an obsession for music, which mostly spiked
                    around 2023, when I discovered a few "underground" artists with a unique sound, which truly captivated me
                    and inspired me to start music production, using FL Studio. I started simple, using youtube tutorials to guide me, and when I
                    felt I had a good enough understanding of the software and music theory, I began experimenting on my own to make something unique
                    which I could be proud of - using synths and glitchy sounds and eventually finding my own sound.
                </p>
            </div>
            <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center gap-8" data-aos="fade-left">
                
                <p className='mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
                    But wait, it doesn't stop there! Following my love for game development,
                    came a love for 3D modelling, which I started learning using Blender. This advanced from simple game models to instead
                    scene-building, and eventually rendering my scenes out as art pieces, learning about a multitude of techniques, like
                    perfecting lighting, texturing and composition to create visually stunning images.
                </p>
                <img src={blenderImg} alt="Blender" className="w-xl rounded-2xl mt-10 px-3" />
            </div>
            <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
                <img src={aeImg} alt="After Effects" className="w-xl rounded-2xl mt-10 px-3" />
                <p className='mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
                    And finally, my last hobby (for now at least) is
                    video editing, which I began learning in 2022, using Adobe After Effects combined with a multitude of plugins to create
                    mesmerising edits of my favourite media, like animating manga scenes or editing experimental music videos. I love the creativity
                    and freedom that comes with video editing, and I deeply enjoy the process of bringing my ideas to life through this medium.
                </p>
            </div>
        </div>
    )
}
