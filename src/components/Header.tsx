"use client";
export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 px-10 backdrop-blur-xl bg-black/10 border-b border-white/5 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">
          O
        </div>
        <span className="font-black tracking-tighter text-xl text-white">OFFSIDE</span>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#home" className="hover:text-white transition-colors">Ana Sayfa</a>
        <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
        <div className="h-4 w-[1px] bg-white/10" />
        <button className="hover:text-purple-400 font-bold transition-colors">TR</button>
        <button className="p-2 hover:bg-white/5 rounded-full transition-all">🌙</button>
      </div>
    </nav>
  );
}