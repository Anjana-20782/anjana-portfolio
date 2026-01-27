"use client";

import React, { useState } from "react";

const experiences = [
  {
    id: "synnefo",
    company: "Synnefo Solutions",
    location: "Kochi, Kerala",
    role: "MERN Stack Developer",
    type: "Internship",
    duration: "Jun 2024 — Feb 2025",
    tech: ["MongoDB", "Express", "React", "Node.js", "Git", "REST APIs"],
    description: [
      "Architected full-stack features using the MERN ecosystem with a focus on modular UI components.",
      "Engineered secure RESTful endpoints in Node.js to bridge client-server data flow.",
      "Optimized MongoDB schema designs for efficient CRUD operations and data validation.",
      "Streamlined frontend performance for mobile responsiveness and cross-browser stability.",
      "Version controlled all production-ready code via Git/GitHub workflows."
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 px-6 md:px-20 relative bg-[color:var(--background)]">
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-purple-500 font-bold tracking-widest uppercase text-2xl mb-2">Experience</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
          
          {/* Sidebar with Animated Scanner Line */}
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible md:w-64">
            
            {/* The Animated Line (Scanning Effect) */}
            <div className="hidden md:block absolute left-0 top-0 w-[2px] h-full bg-purple-500/10">
              <span className="absolute left-0 w-full h-24 bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,1)] animate-scan-line" />
            </div>

            <div className="flex md:flex-col border-l-2 md:border-l border-purple-500/20 w-full">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`text-left px-6 py-4 text-sm font-mono whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -ml-[2px] relative z-10 ${
                    activeTab === exp.id
                      ? "border-purple-500 text-purple-500 bg-purple-500/5"
                      : "border-transparent text-slate-500 hover:bg-purple-500/5 hover:text-purple-400"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="flex-1">
            {experiences.filter(e => e.id === activeTab).map((exp) => (
              <div key={exp.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex flex-col gap-1 mb-6">
                  <h3 className="text-2xl font-bold text-[color:var(--foreground)]">
                    {exp.role} <span className="text-purple-500">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-slate-500 dark:text-slate-400">
                    <span>{exp.duration}</span>
                    <span className="hidden md:block text-purple-500/30">|</span>
                    <span>{exp.location}</span>
                    <span className="hidden md:block text-purple-500/30">|</span>
                    <span className="text-purple-500/80 uppercase tracking-widest text-[10px] font-bold">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="text-purple-500 mt-1.5 font-bold text-xs">➔</span>
                      <p className="text-slate-900 dark:text-slate-500 leading-relaxed group-hover:text-purple-400 transition-colors">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-[11px] font-mono rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}