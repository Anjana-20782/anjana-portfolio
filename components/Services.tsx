"use client";

import React from "react";
// Changed from Fa6 to Fa to match your imports
import { 
  FaCode, FaLayerGroup, FaServer, FaDatabase, 
  FaLock, FaRocket, FaTerminal, FaPuzzlePiece, FaCloudUploadAlt, FaTools 
} from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Web Apps",
    desc: "End-to-end MERN apps with scalable architecture and JWT security.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Frontend Development",
    desc: "Clean UI/UX using Next.js, React, and Tailwind for high performance.",
    icon: <FaCode />,
  },
  {
    title: "Backend & APIs",
    desc: "Robust REST APIs using Node.js and Express with secure CRUD operations.",
    icon: <FaServer />,
  },
  {
    title: "Database Design",
    desc: "Efficient schema design and performance optimization using MongoDB.",
    icon: <FaDatabase />,
  },
  {
    title: "Auth & Security",
    desc: "Implementing JWT, OAuth, and role-based access control systems.",
    icon: <FaLock />,
  },
  {
    title: "Real-Time Features",
    desc: "Live chats and notifications using Socket.io for instant updates.",
    icon: <FaRocket />,
  },
  {
    title: "Admin Dashboards",
    desc: "Powerful CMS and analytics panels to manage your data easily.",
    icon: <FaTerminal />,
  },
  {
    title: "API Integration",
    desc: "Connecting Stripe, Cloudinary, and Firebase third-party services.",
    icon: <FaPuzzlePiece />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 relative overflow-hidden bg-[color:var(--background)]">
      
      {/* Background Gradient Glow - Matches your Hero section exactly */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/15 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] rounded-full -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-purple-500 font-bold tracking-widest uppercase text-2xl mb-2">My Services</h2>
        <h3 className="text-xl md:text-xl font-serif text-[color:var(--foreground)]">What I Do</h3>
      </div>

      {/* Grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-3xl border border-purple-500/10 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:border-purple-500 transition-all duration-500 shadow-sm hover:shadow-purple-500/10 flex flex-col items-start"
          >
            <div className="text-3xl text-purple-600 dark:text-purple-400 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">
              {service.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}