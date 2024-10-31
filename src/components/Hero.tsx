'use client'
import Typewriter from 'typewriter-effect'

import DownloadButton from './downloadbutton'
export default function Hero(){
    return(
    
        <section className=" text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-col px-4 py-18 justify-center items-center">
   
   {/* image */}

    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-8 mt-4 object-cover object-center rounded-full" alt="hero" src="images/myimage2.jpeg"/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      
      
      {/* typewriter effect */}
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-sky-700 font-bold"><Typewriter
  options={{
    strings: ['I am Hina Zeeshan', 'I am FrontEnd Developer'],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <p className='font-semibold text-white'>I am a passionate and dedicated Frontend Developer with expertise in HTML, CSS, and JavaScript, and a deep understanding of TypeScript. Currently, I am exploring advanced frontend technologies, with a strong focus on Next.js to build dynamic, modern web applications.

I am actively pursuing hands-on learning and development in my role as a student at Techforce Pakistan, where I am continuously enhancing my skills in web development. My journey also extends into the exciting realm of AI through the Applied Generative AI Engineering (GenEng) program at GH Cloud, where I am delving into AI technologies to bring innovation into the web development space.</p>
      <div className="flex w-full mt-4 justify-center items-end ">
        <DownloadButton />
        
      </div>
     
    </div>
  </div>
</section>
    )
}