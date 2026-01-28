"use client";

import React, { useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SpotlightCard from "./SpotlightCard";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Using your updated EmailJS IDs
    emailjs.sendForm(
      'service_nlk22yi', 
      'template_zbh2khr', 
      form.current, 
      'kUaq5gje8U1jlEm4k'
    )
    .then((result) => {
        alert("Message sent directly to Anjana's email!");
        form.current?.reset();
    }, (error) => {
        alert("Send failed... please try again.");
        console.log(error.text);
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "Anjana-20782",
      icon: <FaGithub />,
      link: "https://github.com/Anjana-20782",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      handle: "anjana-sivadasan",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/anjana-sivadasan",
      color: "hover:bg-blue-600",
    },
    {
      name: "Email",
      handle: "anjanasivadasan0305@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:anjanasivadasan0305@gmail.com",
      color: "hover:bg-red-500",
    },
  ];

  // Updated style for better border visibility in Light Mode
  const inputStyle = `
    w-full bg-white/50 dark:bg-transparent 
    border border-gray-400 dark:border-white/20 
    rounded-xl px-4 py-3 outline-none 
    focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    text-[color:var(--foreground)] transition-all
    placeholder:text-gray-500 dark:placeholder:text-gray-400
  `;

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-[color:var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-[color:var(--foreground)]">Get in Touch</h2>
          <p className="text-purple-600 font-medium mt-2 italic">I'm available for freelancing.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Social Grid */}
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border border-purple-100 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm transition-all group ${social.color}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-purple-600 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                  <span className="font-bold text-[color:var(--foreground)] group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </div>
                <span className="text-sm opacity-60 text-[color:var(--foreground)] group-hover:text-white transition-colors">
                  {social.handle}
                </span>
              </a>
            ))}
            
            <div className="mt-4 p-8 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-500/20 text-center">
               <p className="text-emerald-700 dark:text-emerald-400 font-bold">
                 I'd love to hear from you! Reach out and I'll get back to you directly.
               </p>
            </div>
          </div>

          {/* Right Side: Contact Form - Updated background for contrast */}
          <SpotlightCard className="bg-[#f3eeff] dark:bg-[#12071f]/20 border-purple-400 dark:border-white/10 shadow-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="from_name" 
                  placeholder="Enter your name" 
                  required 
                  className={inputStyle} 
                />
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Enter your email" 
                  required 
                  className={inputStyle} 
                />
              </div>
              <textarea 
                name="message" 
                rows={5} 
                placeholder="Enter your message" 
                required 
                className={inputStyle}
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full md:w-auto px-10 py-3 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Submit now <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}