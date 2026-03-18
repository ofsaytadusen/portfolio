import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import ProjectCard from '@/components/ProjectCard';
import { ThemeProvider } from '@/components/ThemeContext';
import { getTrendingRepos } from '@/lib/github';

export default async function Home() {
  const repos = await getTrendingRepos();

  return (
    <ThemeProvider>
      <main className="relative min-h-screen text-white">
        
        {/* BaseDash Style Background Glows */}
        <div className="bg-glow-container">
          <div className="glow-1" />
          <div className="glow-2" />
        </div>
        
        <Header />
        
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20">
          <Hero />
        </section>

        {/* Mission Section (Replaced 3D) */}
        <section className="py-20 px-6">
           <Mission />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Trends</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl opacity-70">
              The most influential open-source projects from the GitHub ecosystem this week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {repos.map((repo: any) => (
              <ProjectCard key={repo.full_name} repo={repo} />
            ))}
          </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5">
          <p className="text-[10px] text-gray-600 tracking-[0.6em] uppercase font-bold">
            © 2026 OFFSIDE DIGITAL SOLUTIONS • ALL RIGHTS RESERVED
          </p>
        </footer>

      </main>
    </ThemeProvider>
  );
}