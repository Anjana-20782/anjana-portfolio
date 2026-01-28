"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub, FaEye } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "E-Commerce Application",
    mainIcon: <SiReact className="text-cyan-500" />,
    description: "Full-stack shopping cart application with Google OAuth and MongoDB.",
    tech: ["React.js", "Node.js", "MongoDB"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Student Management App",
    mainIcon: <SiNodedotjs className="text-green-600" />,
    description: "System for student registration using RESTful APIs and MongoDB.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "AI Agency Frontend",
    mainIcon: <SiTailwindcss className="text-sky-500" />,
    description: "Modern AI Agency UI with reusable components and animations.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Tic Tac Toe AI",
    mainIcon: <SiJavascript className="text-yellow-500" />,
    description: "Human vs Computer game with strategic logic and score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "#", demo: "#" }
  }
];

const infiniteProjects = [...projects, ...projects];

export default function Projects() {
  const cardStyle = `
    flex-shrink-0 w-[350px] md:w-[450px]
    bg-[color:var(--background)] dark:bg-[#12071f]/10 
    border border-gray-100 dark:border-white/10 
    shadow-xl dark:shadow-none
    flex flex-col items-center text-center p-8 h-full rounded-3xl
  `;

  return (
    <section id="projects" className="py-24 bg-[color:var(--background)] overflow-hidden">
      <div className="mb-16 flex flex-col items-center">
        <h2 className="text-purple-600 font-bold text-3xl uppercase tracking-[0.1em]">
          Recent works
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* We use a custom CSS class defined in the style block below */}
        <div className="flex gap-6 animate-infinite-scroll py-10">
          {infiniteProjects.map((project, index) => (
            <SpotlightCard key={index} className={cardStyle} spotlightColor="rgba(168, 85, 247, 0.1)">
              <div className="text-6xl mb-4">{project.mainIcon}</div>
              <h4 className="text-xl font-bold text-[color:var(--foreground)] mb-2">{project.title}</h4>
              
              <div className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[9px] font-black uppercase mb-4 tracking-widest">
                Public
              </div>

              <div className="flex gap-3 mb-6">
                <a href={project.links.github} className="p-2 rounded-full border border-gray-200 dark:border-white/20 hover:bg-purple-600 hover:text-white transition-all">
                  <FaGithub size={18} />
                </a>
                <a href={project.links.demo} className="p-2 rounded-full border border-gray-200 dark:border-white/20 hover:bg-purple-600 hover:text-white transition-all">
                  <FaEye size={18} />
                </a>
              </div>

              <p className="text-gray-600 dark:text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-gray-100 dark:border-white/5 w-full">
                {project.tech.map((name, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[9px] font-bold text-[color:var(--foreground)]">
                    {name}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Standard CSS injection to avoid 'style jsx' errors */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
}