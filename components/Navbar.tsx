"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">
  Anjana<span className="text-[color:var(--accent)]">.</span>
</h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-[color:var(--muted)]">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About me</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">My Work</li>
        <li className="hover:text-white cursor-pointer">Contact me</li>
      </ul>

      {/* Right */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-4 py-2 rounded-full hover:bg-[color:var(--accent)] hover:text-white transition">
  Contact ↗
</button>
      </div>
    </nav>
  );
}
