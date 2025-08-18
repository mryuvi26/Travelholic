import React, { useState } from "react";
import "../../node_modules/tailwindcss/tailwind.css";
import './Navbar.css';
import IMAGES from "../script.js";
import { FaPaperPlane } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

// const User = {
//   name: "Yuvi",
//   age: 25,
//   city: "Delhi"
// };


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const Image = {
    image1 :IMAGES.image1,
    image2 : IMAGES.image2,
    image3 : IMAGES.image3,
    image4 : IMAGES.image4,
    image5 : IMAGES.image5,
    image6 : IMAGES.image6,
    image7 : IMAGES.image7

  }

  return (
    <>
      {/* <span className="text-blue-400 text-2xl"></span> */}

      <nav className=" bg-gray-800 p-4 flex justify-between items-center ">
        <div className=" flex items-center flex">
          <img src={Image[0]} className="text-2xl mr-[-5px]" style={{ marginTop: '-10px', rotate: '-10deg', height: '60px', color: '#ffffffff', fontSize: '23px', marginLeft: '20px' }} />
          <h1 className="text-sky-600 font-bold text-xl" style={{ marginTop: '10px' }}> TRAVELHOLIC</h1>
        </div>
        <div className="hidden input md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition duration-300">
            Search
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-sky-400">Home</a>
          <a href="#about" className="text-white hover:text-sky-400">Blog</a>
          <a href="#services" className="text-white hover:text-sky-400">Places</a>
          <a href="#contact" className="text-white hover:text-sky-400">Contact</a>
          <a href="#blog" className="text-white hover:text-sky-400">About</a>
        </div>

        <div className="sm:hidden ">
          <button
            className="duration-0 md:duration-700 text-white focus:outline-none transition duration-750 ease-in-out  bg-gray-700 hover:bg-gray-600 rounded-md p-2 "
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ transition: 'ease-in-out' }}  >
            <FaBarsStaggered className="text-2xl" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="sm:hidden bg-gray-500 px-4 py-2 space-y-2 flex flex-col justify-center items-center z-index-50 duration-700" style={{
          height: ' 300px', position: 'absolute', top: '90px', right: '0', width: '100%', backgroundColor: '#1f2937', zIndex: '2', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px'
        }}>
          <a href="#home" className="block text-white hover:text-sky-400">Home</a>
          <a href="#about" className="block text-white hover:text-sky-400">Blog</a>
          <a href="#services" className="block text-white hover:text-sky-400">Places</a>
          <a href="#contact" className="block text-white hover:text-sky-400">Contact</a>
          <a href="#blog" className="block text-white hover:text-sky-400">About</a>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition duration-300">
            Search
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
