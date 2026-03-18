export default function ProjectCard({ repo }: { repo: any }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 transition-all group">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
        {repo.name}
      </h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
        {repo.description || "Açıklama bulunamadı."}
      </p>
      <div className="flex justify-between items-center text-xs font-mono">
        <span className="text-gray-400 text-yellow-500/80">⭐ {repo.stargazers_count}</span>
        <span className="text-cyan-500 px-2 py-1 bg-cyan-500/10 rounded-full">{repo.language || 'Kod'}</span>
      </div>
    </div>
  );
}