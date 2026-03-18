"use client";
import { MouseEvent, useState } from "react";

export default function ProjectCard({ repo }: { repo: any }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 transition-all hover:border-white/20"
    >
      {/* Fareyi Takip Eden Işık (BaseDash Efekti) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* İçerik (Işığın üzerinde kalır) */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg">
            {repo.language === 'TypeScript' ? '🔷' : 
             repo.language === 'JavaScript' ? '🟨' : 
             repo.language === 'Python' ? '🐍' : '💻'}
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
            {repo.language || 'Source'}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{repo.name}</h3>
        
        <p className="text-sm text-white/50 leading-relaxed mb-8 line-clamp-3">
          {repo.description || "An impressive open-source project building the future of software."}
        </p>
        
        <div className="mt-auto flex items-center justify-between text-xs font-mono text-white/40 border-t border-white/5 pt-4">
          <span>⭐ {repo.stargazers_count?.toLocaleString() || '0'}</span>
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            VIEW REPO <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}