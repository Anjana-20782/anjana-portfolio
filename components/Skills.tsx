"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiMysql,
  SiNextdotjs, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiGit, SiGithub, SiPostman, SiLinux 
} from "react-icons/si";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, url: "https://www.typescriptlang.org/" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, url: "https://nextjs.org/" },
      { name: "React.js", icon: <SiReact className="text-cyan-400" />, url: "https://react.dev/" },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: <SiCss3 className="text-blue-600" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, url: "https://tailwindcss.com/" },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, url: "https://getbootstrap.com/" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, url: "https://nodejs.org/" },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" />, url: "https://expressjs.com/" },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, url: "https://www.mongodb.com/" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, url: "https://www.postgresql.org/" },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" />, url: "https://www.mysql.com/" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-600" />, url: "https://git-scm.com/" },
      { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" />, url: "https://github.com/" },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, url: "https://www.postman.com/" },
      { name: "Linux", icon: <SiLinux className="text-yellow-500" />, url: "https://www.linux.org/" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-[color:var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-purple-500 font-bold tracking-widest uppercase text-3xl mb-2">My Skills</h2>
          <h3 className="text-md md:text-md font-serif text-[color:var(--foreground)]">Technical Proficiency</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <SpotlightCard 
              key={idx} 
              className="border-purple-500/10 bg-white/40 dark:bg-white/5 backdrop-blur-md"
              spotlightColor="rgba(168, 85, 247, 0.15)"
            >
              <h4 className="text-lg font-bold mb-6 text-[color:var(--foreground)] border-b border-purple-500/10 pb-2">
                {group.category}
              </h4>
              <div className="grid grid-cols-3 gap-6">
                {group.skills.map((skill, i) => (
                  <a 
                    key={i} 
                    href={skill.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-center">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </SpotlightCard>
          ))}

          <SpotlightCard 
            className="border-purple-500/10 bg-purple-500/5 backdrop-blur-md flex flex-col justify-center items-center"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <h4 className="text-lg font-bold mb-6 text-purple-500 uppercase tracking-widest">Concepts</h4>
            <div className="flex flex-wrap justify-center gap-2">
               {["REST APIs", "CRUD", "JWT", "MVC", "Responsive"].map((concept, i) => (
                 <span key={i} className="px-3 py-1 rounded-full border border-purple-500/20 text-[10px] font-mono text-[color:var(--foreground)]">
                   {concept}
                 </span>
               ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}