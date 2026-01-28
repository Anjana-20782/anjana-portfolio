"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FaGithub, FaEye } from "react-icons/fa";
import { 
  SiReact, SiTypescript, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiExpress, SiJavascript, SiHtml5, SiCss3 
} from "react-icons/si";

const projects = [
  {
    title: "E-Commerce Application",
    mainIcon: <SiReact className="text-cyan-500" />,
    description: "Developed a full-stack shopping cart application with Google OAuth, cart management, and order history.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Student Management App",
    mainIcon: <SiNodedotjs className="text-green-600" />,
    description: "A robust system for student registration and data management using RESTful APIs and optimized MongoDB schemas.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "AI Agency Frontend",
    mainIcon: <SiTailwindcss className="text-sky-500" />,
    description: "Modern AI Agency UI with reusable components, interactive animations, and optimized performance.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Tic Tac Toe AI",
    mainIcon: <SiJavascript className="text-yellow-500" />,
    description: "Human vs Computer game featuring strategic logic and local storage for persistent score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "#", demo: "#" }
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    if (currentIndex < projects.length - 2) setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };

  const prevProject = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(projects.length - 2);
  };

  /**
   * STYLING LOGIC:
   * 1. bg-[color:var(--background)]: Uses your #ffffff from globals.css light theme.
   * 2. shadow-xl: Provides depth against the white background.
   * 3. text-gray-800: Ensures dark, readable text for light mode.
   */
  const cardStyle = `
    bg-[color:var(--background)] dark:bg-[#12071f]/10 
    border-gray-100 dark:border-white/10 
    shadow-xl dark:shadow-none
    min-w-full md:min-w-[calc(50%-12px)] 
    flex flex-col items-center text-center p-10 h-full
  `;
  
  const spotlightColor = "rgba(168, 85, 247, 0.1)";

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-[color:var(--background)] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-purple-600 font-bold text-3xl uppercase tracking-[0.1em]">
            Recent works
          </h2>
          
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `-${currentIndex * 50}%` }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            {projects.map((project, index) => (
              <SpotlightCard key={index} className={cardStyle} spotlightColor={spotlightColor}>
                {/* Main Brand Icon */}
                <div className="text-7xl mb-6">
                  {project.mainIcon}
                </div>

                <h4 className="text-2xl font-bold mb-2">
                  {project.title}
                </h4>
                
                <div className="px-4 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase mb-6 tracking-widest shadow-md">
                  Public
                </div>

                {/* GitHub & Demo Links */}
                <div className="flex gap-4 mb-8">
                  <a href={project.links.github} className="p-3 rounded-full border border-gray-200 dark:border-white/20  hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.links.demo} className="p-3 rounded-full border border-gray-200 dark:border-white/20  hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                    <FaEye size={20} />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {project.description}
                </p>

                {/* Technology Pills - Now with white background and dark text */}
                <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-gray-100 dark:border-white/5 w-full">
                  {project.tech.map((name, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px]  font-bold shadow-sm">
                      {name}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center gap-8 mt-16">
          <div className="flex gap-3">
            {Array.from({ length: projects.length - 1 }).map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-purple-600" : "w-2 bg-gray-200 dark:bg-white/20"}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevProject}
              className="px-8 py-2 rounded-lg bg-[#10b981] text-white font-bold hover:brightness-110 shadow-lg active:scale-95 transition-all"
            >
              Prev
            </button>
            <button 
              onClick={nextProject}
              className="px-8 py-2 rounded-lg bg-[#10b981] text-white font-bold hover:brightness-110 shadow-lg active:scale-95 transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}