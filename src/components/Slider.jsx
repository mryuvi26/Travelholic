import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "./slide.css";
import "./video";

import { FaWhatsappSquare } from "react-icons/fa";
// const {video} = document.getElementById("background-video");
import "../../public/Rhythms of India _ Cinematic video _ 4K.mp4";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from 'react';


const Slider = () => {
  const slides = [
    <img src={`${import.meta.env.BASE_URL} ladakh-7545887_1920.jpg`} alt="" />,
    <img src={`${import.meta.env.BASE_URL} pexels-souvenirpixels-417074.jpg`} alt="" />,
    <img src={`${import.meta.env.BASE_URL} waterfall.jpg`} alt="" />

  ]
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
      
    <>
      <section className='hello w-full  flex max-sm:flex-col carousel-section md:shrink-0' style={{ height: "900px", overflow: "hidden", alignItems: "center", justifyContent: "center" }}>

        <div className=' lg:w-[590px] lg:h-[400px] max-sm:mt-[20px] max-sm:w-[400px] max-sm:shrink-0 overflow-hidden carousel-container bg-sky-400 shadow rounded-2xl relative'>
          <div className=' flex transition-transform ease-out duration-500 ' style={{ height: "100%", width: "100%" }}>
            {slides[curr]}
          </div>
          <div className=' absolute top-50 max-sm:top-[100px] flex items-center justify-between px-4' > 
            <button onClick={prev} className=' btn rounded-full p-2 shadow-lg  transition-colors' style={{ marginRight: "500px" }}>
              <IoIosArrowDropleftCircle size={30}  className='text-sky-600' />
            </button>
            <button onClick={next} className='btn ml-[-40px] rounded-full p-2 shadow-lg transition-colors max-sm:ml-[-230px]'>
              <IoIosArrowDroprightCircle size={30} className='text-sky-600' />
            </button>
          </div>
        </div>

        <div className="flex flex-col ml-[100px] mt-[150] max-sm:mt-[10px] rounded-[-20px] w-[600px] h-[450px] max-sm:w-[400px] max-sm:h-[450px] max-sm:ml-[0px]  "  style={{
           borderRadius: "20px", backgroundColor:'#ffffff86'
        }}>
          <div className='heading  max-sm:w-[500px]  max-sm:ml-[-50px] max-sm:text-center'>
            <h1 className='text-white bg-primary w-[350px] max-sm:w-[300px] fs-3 max-sm:h-[70px] mx-auto text-center py-3 rounded-4 mt-3 max-sm:text-[25px]' >
              Read The Information
            </h1>
            <p className='text-black text-center text-[20px] max-sm:text-[18px]' style={{ marginTop: "20px" }} >Explore The Worlds Beautiful Places With Us</p>
          </div>
          <div className='trip text-black text-center fs-4'>
            <p className='mx-4 text-dark' style={{ fontFamily: 'cursive', padding: "10px", backgroundColor: "#45454571", borderRadius: "20px", fontWeight: 'bold'  }}>
              Kal Pe Sawal hain Jeena Filhaal Hain. Kahin Pahuchne Ke Liye, Kahin Se NIkalna Jaruri Hota Hain. Isliye Bag Pack Karo Aur Nikal Pado Apne Sapno Ki Yatra Par.  
     
            </p>
          </div>
        </div>
      </section>
      {/* Removed stray </section> tag */}


    </>
  );
}

// export { carousel };
export default Slider;