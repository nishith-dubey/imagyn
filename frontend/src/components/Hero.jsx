import { Sparkles, StarOff, WandSparkles } from "lucide-react";
import React, { useContext } from "react";
import { motion } from "motion/react"
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Hero() {
  const {user} = useContext(AppContext)
  const {setShowLoginDialog} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandller = () => {
    if(user){
      navigate('/result')
    }
    else {
      setShowLoginDialog(true)
    }
  }

  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img2.jpg",
    "img3.jpg",
    "img1.jpg",
  ];

  return (
    <motion.main className="flex flex-col justify-center items-center my-8 md:my-10 md:gap-8 gap-6 transition-all duration-500"
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 0.5}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    >
      <motion.div className="flex items-center justify-center gap-2 bg-white border border-stone-500 px-4 sm:px-6 py-2 rounded-3xl "
      initial={{opacity: 0.2, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8, delay: 0.2}}
      >
        <p className="text-stone-500">Best text to image generator</p>
        <div>
          <Sparkles className="text-yellow-400 rounded-full p-1 flex justify-center items-center" />
        </div>
      </motion.div>

      <motion.div className="md:max-w-[630px] max-w-[420px] -mb-1"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.4, delay: 0.8}}
      >
        <h1 className="text-5xl md:text-7xl text-center font-semibold transition-all duration-500">
          Turn text to{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-indigo-800 rounded-3xl bg-clip-text ">
            image
          </span>
          , in seconds.
        </h1>
      </motion.div>

      <div>
        <h1 className="text-slate-600 text-md text-center md:text-lg md:max-w-[670px] max-w-[420px]">
          Imagine it. Type it. Watch AI turn your vision into vibrant
          art—instantly.
        </h1>
      </div>

      <button 
      onClick={onClickHandller}
      className="flex py-2 px-4 sm:py-4 sm:px-6 sm:gap-4 gap-2 text-white bg-zinc-800 rounded-full text-lg sm:text-xl justify-center items-center transition-all duration-500 cursor-pointer">
        Generate images <img src="magic.png" className="w-6 invert" />
      </button>

      <div className="flex flex-col gap-2">
        <div className=" grid grid-cols-6 gap-4 transition-all duration-500">
          {images.map((image, idx) => {
            return (
              <div>
                <img
                  src={`${image}`}
                  alt="img"
                  key={idx}
                  className="md:w-20 w-14 transition-all duration-300 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm text-gray-700">Images generated using imagyn</p>
      </div>
    </motion.main>
  );
}

export default Hero;
