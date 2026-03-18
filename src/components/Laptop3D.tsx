export default function Laptop3D() {
  return (
    <div className="w-full max-w-4xl aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl border border-white/10 flex items-center justify-center relative group overflow-hidden">
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
      <span className="text-gray-500 animate-pulse text-sm font-mono z-10">
        [ 3D DENEYİMİ YÜKLENİYOR... ]
      </span>
    </div>
  );
}