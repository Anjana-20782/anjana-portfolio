"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Anjana-20782" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anjana-sivadasan" },
    { icon: <FaEnvelope />, link: "mailto:anjanasivadasan0305@gmail.com" },
  ];

  return (
    <footer className="relative mt-20 border-t border-black dark:border-white/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Anjana S.
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
              Building modern web experiences with focus on design and performance.
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-purple-50 dark:bg-white/5 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-purple-600 transition-colors"
          >
            <div className="p-3 rounded-xl border border-purple-100 dark:border-white/10 group-hover:border-purple-500 transition-all">
              <FaChevronUp className="animate-bounce" />
            </div>
            Top
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Anjana Sivadasan. All rights reserved.</p>
          <div className="flex gap-4 italic">
            <span>Designed with.</span>
            <span>Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}