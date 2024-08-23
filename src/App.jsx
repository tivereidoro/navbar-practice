import logo from "./assets/logo.png";

export default function App() {

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400 app_container">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img src={logo} alt="header-logo" srcset="" className="w-52 hover:scale-105 transition-all" />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Products</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Explore</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">

        </div>
      </header>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
