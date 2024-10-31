'use client'
import Typewriter from 'typewriter-effect'
export default function Explore(){
   return(
    <div className="container bg-black w-full h-auto sm:h-60 md:h-80 border-2 border-slate-400 shadow-2xl rounded-lg items-center justify-center m-5 ml-24">
        <h1 className='text-sky-700 font-serif font-semibold text-2xl sm:text-xl md:text-2xl lg:text-2xl text-center p-2 mt-4' >
        <Typewriter
  options={{
    strings: ['Explore My Latest Blog - Insights , Intrests & More'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
<p className=' text-center text-white justify-center w-full sm:w-4/5 md:w-3/4 mx-auto text-sm sm:text-sm md:text-base  items-center p-4 leading-relaxed' >
    Welcome to my Blog hub! Dive into a wide range of article covering everything from the latest trends in technology to in-depth insights.As a beginner in frontend development, I have focused on building a range of projects that not only demonstrate my technical skills but also reflect my passion for learning and innovation. From small interactive apps to more complex web solutions, I have worked on projects that have helped me apply core concepts in real-world scenarios.
</p>

    </div>
   ) 
}