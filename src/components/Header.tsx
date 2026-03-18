"use client";
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-8 flex justify-between items-center bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
          <Image src="/logo.png" alt="OFFSIDE" fill className="object-contain" />
        </div>
        <span className="text-xl font-bold tracking-tighter">OFFSIDE</span>
      </div>
      
      <div className="flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <div className="h-4 w-[1px] bg-white/10" />
        <span className="text-white">EN</span>
      </div>
    </nav>
  );
}