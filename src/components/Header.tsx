export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 backdrop-blur-md bg-black/20 border-b border-white/5 flex justify-between items-center">
      <div className="font-bold text-xl tracking-tighter text-white">OFFSIDE</div>
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#home" className="hover:text-cyan-400 transition-colors">Ana Sayfa</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projeler</a>
      </div>
    </nav>
  );
}