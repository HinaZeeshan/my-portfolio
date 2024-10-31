export default function Card(){
    
    return(
        <div className="bg-black max-w-full mx-auto grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">


        <div className="justify-evenly bg-white shadow-[0_4px_25px_ -5px_rgba(0,0,0,4)] border p-2 w-60 max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
            <div className="min-h-[245px] ">
            <img src="https://i.ytimg.com/vi/vWqWl3Zm0ro/maxresdefault.jpg" 
            alt="imageof countdowntimer"
            className="w-full h-60 rounded-lg hover:scale-110" />
         </div>
         {/* text and button alignment */}
          <div className="p-b text-center">
              <h3 className="text-xl font-black">Project 01 :Countdown Timer</h3>
             <p className="mt-3 text-sm text-grey-500 leading-relaxed">Description: A dynamic and fully functional countdown timer built
                 using Next.js, 
 showcasing my ability to manage states, handle events, and create interactive components and delivering seamless user experiences.
             </p>
                
                <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none
                 bg-sky-700 hover:bg-sky-300 "> <a href="https://countdown-timer-lemon.vercel.app" rel="noopener noreferrer" target="_blank">Explore</a></button>
         </div>
          
        </div>
        {/* 2nd card */}
        <div className="bg-white shadow-[0_4px_25px_ -5px_rgba(0,0,0,4)] border p-2 w-60 max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
            <div className="min-h-[245px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVcEZ-PhoId4FFNy1CNsr4xvl72FSSDvY4w&s" 
            alt="imageof calculator"
            className="w-full h-60 rounded-lg hover:scale-110" />
         </div>
         {/* text and button alignment */}
          <div className="p-b text-center">
              <h3 className="text-xl font-black">Project 02 :calculator</h3>
             <p className="mt-3 text-sm text-grey-500 leading-relaxed">Description: fully functional calculator using JavaScript,
                 enabling basic arithmetic operations division multiplication addition subtraction with a clean and responsive user interface. 
                 strengthened of event handling and DOM manipulation in JavaScript.
             </p>
                
                <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-sky-700 hover:bg-sky-300 "> 
                    <a href="https://github.com/HinaZeeshan?tab=repositories" rel="noopener noreferrer" target="_blank">Explore</a></button>
         </div>
          
        </div>

        {/* 3rd card */}
        <div className="bg-white shadow-[0_4px_25px_ -5px_rgba(0,0,0,4)] border p-2 w-60 max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
            <div className="min-h-[245px]">
            <img src="https://www.firstnationalatm.com/wp-content/uploads/2018/09/ATM_keypad_fb-1024x535.jpg" 
            alt="imageof calculator"
            className="w-full h-60  rounded-lg hover:scale-110" />
         </div>
         {/* text and button alignment */}
          <div className="p-b text-center">
              <h3 className="text-xl font-black">Project 03 :ATM</h3>
             <p className="mt-3 text-sm text-grey-500 leading-relaxed">Description:  CLI-based ATM machine using TypeScript, 
                simulating essential banking operations like balance inquiry, deposits, and withdrawals. 
                 enhanced  TypeScript’s type safety and control flow in real-world applications.</p>
                
                <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-sky-700 hover:bg-sky-300 ">
                <a href="https://github.com/HinaZeeshan?tab=repositories" rel="noopener noreferrer" target="_blank">Explore</a></button>
         </div>
          
        </div>

        {/* 4thcard */}
        <div className="bg-white shadow-[0_4px_25px_ -5px_rgba(0,0,0,4)] border p-2 w-60 max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
            <div className="min-h-[245px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2fPXCoWUfSkc9af9rsU8bKuIXeEPYRDbpQ&s" 
            alt="imageof "
            className="w-full h-60 rounded-lg hover:scale-110" />
         </div>
         {/* text and button alignment */}
          <div className="p-b text-center">
              <h3 className="text-xl font-black">Project 04 :Todo List</h3>
             <p className="mt-3 text-sm text-grey-500 leading-relaxed">Description:This project allowed me to work with 
                task management features, including adding, updating, and removing tasks.
                 It was a great exercise in using JavaScript for DOM manipulation and state management in a Next.js environment.</p>
                
                <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-sky-700 hover:bg-sky-300 ">
                <a href="https://todo-list-sand-psi-69.vercel.app"  rel="noopener noreferrer" target="_blank">Explore</a></button>
         </div>
          
        </div>








        </div>
    )
}