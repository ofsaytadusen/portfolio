"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav className="fixed top-0 w-full z-50 p-6 px-10 backdrop-blur-md bg-black/20 border-b border-white/5 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            fill 
            className="object-contain"
            onError={(e) => {
              // Logo yüklenmezse diye yedek (O harfi yerine şık bir kare)
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <span className="font-black tracking-tighter text-2xl">OFFSIDE</span>
      </div>

      <div className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
        <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-8">
          <button className="text-white">EN</button>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}