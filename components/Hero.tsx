"use client";

import Image from "next/image";
import profilePic from "../images/profileicon.jpeg";
import BlurText from "./BlurText";
import TextType from "./TextType"; // Import the new component

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-4">
      {/* Profile Image Container */}
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={profilePic}
          alt="Anjana Profile"
          fill
          className="rounded-full object-cover border-2 border-purple-500"
          priority
        />
      </div>

      {/* Animated Intro */}
      <BlurText
        text="Hi! I'm Anjana"
        delay={100}
        animateBy="words"
        direction="bottom"
        className="text-[color:var(--muted)] mb-6 text-lg"
      />

      {/* Animated Main Heading */}
      <BlurText
        text="MERN Stack Developer"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl md:text-6xl font-serif leading-tight"
      />
