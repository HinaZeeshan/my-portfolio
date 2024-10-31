'use client'
import Typewriter from 'typewriter-effect'  


import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";


export default function Tool(){
    return(
        <section className="bg-black">
            <h1 className="text-5xl text-sky-700 text-center tracking-wide font-serif font-bold p-4">
            <Typewriter
        options={{
            strings: ['My Skills'],
            autoStart: true,
            loop: true,
           }}
          />
            </h1>
            <p className="text-sm text-white text-center">Unlocking My Hidden Talent</p>



           
            <div className="container px-2 py-8 mx-auto flex flex-wrap items-center justify-center space-x-6 text-2xl">
            <h1 className='text-sky-700 font-serif font-semibold text-2xl text-center p-2' >
        <Typewriter
        options={{
            strings: ['Programming Languages'],
            autoStart: true,
            loop: true,
           }}
          />
        </h1>   


                {/* icon */}
                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <FaHtml5 className="text-sky-700 text-6xl" />
                <span className="mt-2 text-lg text-black">HTML5</span>
                </div>

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <TbBrandJavascript className="text-pink-700 text-6xl" />
                <span className="mt-2 text-lg text-black">Javascript</span>
                </div>

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <FaCss3Alt className="text-sky-700 text-6xl" />
                <span className="mt-2 text-lg text-black">CSS3</span>
                </div>

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <SiTypescript className="text-pink-700 text-6xl" />
                <span className="mt-2 text-lg text-black">Typescript</span>
                </div>

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <FaBootstrap className="text-sky-700 text-6xl" />
                <span className="mt-2 text-lg text-black">Bootstrap</span>
                </div>


            </div>

            <div className="container px-2 py-8 mx-auto flex flex-wrap items-center justify-center space-x-6 text-2xl">

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                  <SiVisualstudiocode className="text-sky-700 text-6xl" />
                  <span className="mt-2 text-lg text-black">Visual studio Code </span>
                </div>

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <FaGithub className="text-black text-6xl" />
                <span className="mt-2 text-lg text-black">GitHub </span>
                </div>

                <div className=" flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110" >
                <IoLogoVercel className="text-black text-6xl" />
                <span className="mt-2 text-lg text-black">Vercel </span>
                </div>
                <h1 className='text-sky-700 font-serif font-semibold text-2xl text-center p-2' >
            <Typewriter
            options={{
            strings: ['Developement Tools And Frame Works'],
            autoStart: true,
            loop: true,
           }}
          />
          </h1>



            </div>
        </section>
    ) 
}