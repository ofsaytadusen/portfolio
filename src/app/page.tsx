"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import SpotlightCard from '@/components/SpotlightCard';
import { getTrendingRepos } from '@/lib/github';

export default function Home() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    getTrendingRepos().then(setRepos).catch(console.error);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-52 pb-24 px-10 text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
          OFFSIDE <span className="text-white/20">DIGITAL</span>
        </h1>
        <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Crafting high-performance digital systems and next-generation software architectures.
        </p>
      </section>

      {/* Mission Section (Basedash Style) */}
      <section className="px-10 py-20 max-w-5xl mx-auto">
        <SpotlightCard className="p-16 md:p-24 text-center">
          <span className="text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase mb-8 block">Our Mission</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">High performance, <br/><span className="text-white/30">zero compromise.</span></h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto">
            We merge cutting-edge engineering with refined aesthetics to build products that redefine the digital landscape.
          </p>
        </SpotlightCard>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-32 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black tracking-tighter mb-20">Weekly <span className="text-white/20">Trends</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.length > 0 ? repos.map((repo: any) => (
            <SpotlightCard key={repo.id || repo.full_name} className="p-8 h-[320px] flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">🚀</div>
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{repo.language || 'Code'}</span>
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-tight">{repo.name}</h3>
              <p className="text-sm text-white/30 leading-relaxed line-clamp-3 mb-auto">{repo.description || "Building the future of software development."}</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/20">
                <span>⭐ {repo.stargazers_count?.toLocaleString()}</span>
                <a href={repo.html_url} target="_blank" className="hover:text-white transition-colors tracking-tighter">SOURCE ↗</a>
              </div>
            </SpotlightCard>
          )) : (
            <div className="col-span-full py-20 text-center text-white/10 tracking-[1em] uppercase">Initializing...</div>
          )}
        </div>
      </section>

      <footer className="py-24 text-center border-t border-white/5">
        <p className="text-[9px] font-bold tracking-[0.8em] text-white/10 uppercase">
          © 2026 OFFSIDE DIGITAL SOLUTIONS
        </p>
      </footer>
    </main>
  );
}