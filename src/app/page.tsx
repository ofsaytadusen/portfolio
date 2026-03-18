import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Laptop3D from '@/components/Laptop3D';
import ProjectCard from '@/components/ProjectCard';
import BackgroundGlow from '@/components/BackgroundGlow';
import MouseCursor from '@/components/MouseCursor'; 
import { ThemeProvider } from '@/components/ThemeContext';
import { getTrendingRepos } from '@/lib/github';

export default async function Home() {
  const repos = await getTrendingRepos();

  return (
    <ThemeProvider>
      <main className="relative min-h-screen text-white overflow-x-hidden selection:bg-white/20">
        
        {/* Mouse İmleci Parlama Efekti */}
        <MouseCursor />
        
        {/* Arka Plan: Hareketli Işıklar ve Grain Dokusu */}
        <BackgroundGlow />
        
        {/* Navigasyon: Yeni Logo ve Menü */}
        <Header />
        
        {/* Hero: Giriş Bölümü */}
        <section id="home" className="relative z-10 pt-32">
          <Hero />
        </section>

        {/* 3D Obje Alanı */}
        <section className="relative h-[60vh] flex items-center justify-center z-10">
           <div className="w-full max-w-5xl h-full">
              <Laptop3D />
           </div>
        </section>
        
        {/* Projeler: Cam Efektli Kartlar */}
        <section id="projects" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Haftalık <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Trendler</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl opacity-70 italic">
              GitHub ekosisteminde bu haftanın en popüler projeleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo: any) => (
              <ProjectCard key={repo.full_name} repo={repo} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-black/20 backdrop-blur-md">
          <p className="text-[10px] text-gray-600 tracking-[0.5em] uppercase font-bold">
            © 2026 OFFSIDE DIGITAL SOLUTIONS
          </p>
        </footer>

      </main>
    </ThemeProvider>
  );
}