"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">
        Anjana<span className="text-[color:var(--accent)]">.</span>
      </h1>

      {/* Updated Menu Sections */}
      <ul className="hidden md:flex gap-8 text-[color:var(--muted)] text-sm font-medium">
        <li className="hover:text-white cursor-pointer transition">
          <a href="#about">About</a>
          </li>
      <li className="hover:text-white cursor-pointer transition">
    <a href="#services">Services</a>
  </li>
        <li className="hover:text-white cursor-pointer transition">Experience</li>
        <li className="hover:text-white cursor-pointer transition">Skills</li>
        <li className="hover:text-white cursor-pointer transition">Projects</li>
        <li className="hover:text-white cursor-pointer transition">Contact</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-5 py-2 rounded-full hover:bg-white hover:text-black transition text-sm font-semibold">
          Hire Me ↗
        </button>
      </div>
    </nav>
  );
}