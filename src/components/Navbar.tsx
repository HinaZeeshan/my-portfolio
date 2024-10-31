import Link from "next/link"

export default function Navbar(){
    return(
        <header className="text-white body-font bg-gradient-to-tr  from-slate-400 to-sky-700">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center sticky">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTnWVIcfNQ53Fz_p82ynMt0Nw9cwZS4O8o9JTJnnflA68nuiL8mj4AMrHNBlsjdV85fM&usqp=CAU" alt="logohz"
       className="w-16 h-18 text-white p-2 rounded-full bg-sky-700" 
         />
      <span className="ml-3 text-xl ">Hina Zeeshan</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href = "/" className="mr-5 font-semibold hover:text-gray-900">Home</Link>
      <Link href = "http://localhost:3000/About" className="mr-5 font-semibold hover:text-gray-900">About</Link>
      <Link href = "http://localhost:3000/Skills" className="mr-5 font-semibold hover:text-gray-900">Skills</Link>
      <Link href = "http://localhost:3000/Portfolio" className="mr-5 font-semibold hover:text-gray-900">portfolio</Link>
      <Link href = "http://localhost:3000/Contact" className="mr-5 font-semibold hover:text-gray-900">Contact</Link>
    </nav>
    <button className="inline-flex items-center text-slate-800 bg-slate-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
   GitHub
      
      
    </button>
  </div>
</header>
    )
}