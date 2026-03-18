"use client";
import React, { MouseEvent, useState } from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { getTrendingRepos } from '@/lib/github';

// Sayfa yüklenirken datayı çekmek için asenkron yapı yerine React'in standart yapısını kullanıyoruz
export default function Home() {
  const [repos, setRepos] = React.useState<any[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Verileri yükleme
  React.useEffect(() => {
    getTrendingRepos().then(data => setRepos(data)).catch(console.error);
  }, []);

  // Mission bölümü için BaseDash fare efekti
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <main className="min-h-screen selection:bg-white/20">
      <Header />
      
      {/* HERO SECTION */}
      <section id="home" className="pt-48 pb-20 px-6 flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white">
          Code. <span className="text-white/30">Create.</span> Inspire.
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-2xl font-medium">
          Building high-performance digital experiences and shaping the future of the web with modern architecture.
        </p>
      </section>

      {/* MISSION SECTION (3D'nin yerine gelen, BaseDash efektli alan) */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div 
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] p-12 md:p-20 text-center transition-all hover:border-white/20"
        >
          {/* Işık Efekti */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity,
              background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
            }}
          />
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-6 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
              High performance, <br className="hidden md:block" />
              <span className="text-white/40">zero compromise.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We combine cutting-edge technology with high-end design to build products that don't just work, but inspire the next generation of digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">
            Weekly <span className="text-white/30">Trends</span>
          </h2>
          <p className="text-white/50 font-medium">
            The most influential open-source projects from the GitHub ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? repos.map((repo: any) => (
            <ProjectCard key={repo.id || repo.full_name} repo={repo} />
          )) : (
            <div className="col-span-full text-center py-20 text-white/30 animate-pulse">
              Loading projects...
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase">
          © 2026 OFFSIDE DIGITAL SOLUTIONS
        </p>
      </footer>
    </main>
  );
}