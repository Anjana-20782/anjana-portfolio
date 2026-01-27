"use client";
import { FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import profilePic from "../images/profileicon.jpeg";
import BlurText from "./BlurText";
import TextType from "./TextType";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[85vh] px-6 md:px-20 py-10 md:py-20 gap-12 overflow-hidden">
      
      {/* LEFT SIDE: Content */}
      <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
        <BlurText
          text="Hi! I'm Anjana"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-purple-400 mb-4 text-xl md:text-2xl font-bold"
        />

        <BlurText
          text="MERN Stack Developer"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl md:text-7xl font-serif leading-tight mb-8 "
        />

        <div className="text-gray-400 max-w-lg min-h-[80px] mb-8">
          <TextType
            text={[
             "I am a passionate MERN Stack Developer dedicated to building scalable full-stack web applications.Using MongoDB, Express.js, React.js, and Node.js, I transform complex ideas into seamless digital experiences."
            ]}
            typingSpeed={40}
            loop={true}
            className="text-lg md:text-xl leading-relaxed"
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all font-semibold text-lg shadow-lg shadow-purple-500/20">
            Contact me →
          </button>

          <button className="border px-8 py-3 rounded-full hover:bg-white/5 transition-all font-semibold text-lg flex justify-center items-center gap-2">
            My resume <FaArrowDown />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Styled Image */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        {/* Large background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 blur-[100px] rounded-full z-0" />
        
        <div className="relative w-72 h-80 md:w-[400px] md:h-[450px] z-10 group">
          {/* The Border Frame */}
          <div className="absolute inset-0 border-2 border-purple-500/50 rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500" />
          
          {/* The Image Container */}
          <div className="relative w-full h-full bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 border-purple-500/30 -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <Image
              src={profilePic}
              alt="Anjana Profile"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}