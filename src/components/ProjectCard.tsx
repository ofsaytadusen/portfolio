export default function ProjectCard({ repo }: { repo: any }) {
  return (
    <div className="group relative p-8 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2">
      <div className="flex justify-between items-start mb-6">
        <div className="text-3xl group-hover:scale-110 transition-transform">🚀</div>
        <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
          {repo.language || 'Code'}
        </span>
      </div>
      <h3 className="text-xl font-black mb-3 text-white tracking-tight">{repo.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">{repo.description || "Harika bir GitHub projesi."}</p>
      <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
        <span className="flex items-center gap-1">⭐ {repo.stargazers_count.toLocaleString()}</span>
        <div className="ml-auto w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 transition-all">↗</div>
      </div>
    </div>
  );
}