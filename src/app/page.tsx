import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Laptop3D from '@/components/Laptop3D';
import ProjectCard from '@/components/ProjectCard';
import { ThemeProvider } from '@/components/ThemeContext';
import { getTrendingRepos } from '@/lib/github';
import tr from '@/dictionaries/tr.json'; 

export default async function Home() {
  const repos = await getTrendingRepos();
  const dict = tr; // Şu an varsayılan olarak Türkçe dosyanı kullanıyor

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
        {/* Navigasyon Barı */}
        <Header />
        
        {/* Giriş Bölümü (Hero) */}
        <section id="home">
          <Hero />
        </section>

        {/* 3D Laptop Animasyon Bölümü */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
           <Laptop3D />
        </section>
        
        {/* GitHub Trend Projeler Grid */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              {dict["projects.title"].split(' ').slice(0, 2).join(' ')} 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-3">
                {dict["projects.title"].split(' ').slice(2).join(' ')}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto opacity-70">
              {dict["projects.subtitle"]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo: any) => (
              <ProjectCard key={repo.full_name} repo={repo} />
            ))}
          </div>
        </section>

        {/* Footer (Alt Bilgi) */}
        <footer className="py-20 text-center border-t border-white/5 bg-white/[0.02] backdrop-blur-md">
          <div className="mb-4 font-bold tracking-[0.2em] text-[10px] uppercase opacity-40">
            {dict["footer.built"]}
          </div>
          <p className="text-sm text-gray-500">
            © 2026 {dict["hero.name"]}. {dict["footer.rights"]}
          </p>
        </footer>
      </main>
    </ThemeProvider>
  );
}