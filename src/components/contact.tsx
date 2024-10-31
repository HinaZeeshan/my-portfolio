'use client'
import Typewriter from 'typewriter-effect' 

export default function Contact(){

    return(
        <div >
            <div className="container bg-black w-full h-30 border-2 border-slate-400 shadow-2xl rounded-lg items-center justify-center m-2 ml-32">
                <h1 className="text-4xl p-5 font-black tracking-wide uppercase text-center text-sky-700 title-font ">
                <Typewriter
        options={{
            strings: ['Contact us'],
            autoStart: true,
            loop: true,
           }}
          /></h1>
                <p className="leading-relaxed text-center text-white mx-auto text-sm p-4 "> Fill the foam below for any qurries</p>
            </div>
            
           <section className="   text-gray-600 body-font relative">
  <div className="absolute inset-0  justify-center p-12 bg-black">
    <iframe width="50%" height="80%" frameBorder="0" title="map" scrolling="yes" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
  </div>
  <div className="container  bg-black px-5 py-24 mx-auto flex mb-2">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Please fill this foam if u have any qurries or complains or if you have any message for us </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Read our privacy policy for any issue.</p>
     </div>
     
  </div>
  </section>
</div>)}