import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400 app-container">
      <Navbar>
        <h1 className="text-xl font-bold my-20">
          Hello world!
        </h1>
      </Navbar>
    </div>
  )
}
