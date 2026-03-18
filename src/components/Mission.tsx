"use client";
export default function Mission() {
  return (
    <div className="group relative w-full max-w-4xl mx-auto p-[1px] rounded-[40px] overflow-hidden transition-all duration-700">
      {/* Hover Parlama Efekti */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-white/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Cam Kutu */}
      <div className="relative bg-white/[0.03] backdrop-blur-[40px] border border-white/10 p-12 rounded-[40px] text-center">
        <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Mission</span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Crafting the Future of Digital Experience
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          We combine cutting-edge technology with high-end design to build products that don't just work, but inspire. High performance, zero compromise. 🚀
        </p>
      </div>
    </div>
  );
}