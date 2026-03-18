"use client";
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-xl bg-[#030303]/70 border-b border-white/[0.05]">
      <div className="flex items-center gap-3">
        {/* Logo Alanı */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="Offside" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">OFFSIDE</span>
      </div>
      
      {/* Menü (Tamamen İngilizce) */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/60">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <div className="h-4 w-[1px] bg-white/10" />
        <span className="text-white">EN</span>
      </div>
    </nav>
  );
}