import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      {/* <Header /> */}
      <Navbar />

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
