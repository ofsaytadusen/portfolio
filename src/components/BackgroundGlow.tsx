"use client";
import React, { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030303]">
      {/* Sabit Mor Işık */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px]" />
      
      {/* Fareyi Takip Eden Mavi Işık */}
      <div 
        className="absolute w-[40%] h-[40%] rounded-full bg-blue-500/15 blur-[100px] transition-all duration-1000 ease-out pointer-events-none"
        style={{ left: `${mousePos.x}%`, top: `${mousePos.y}%`, transform: 'translate(-50%, -50%)' }}
      />

      {/* Grenli Doku (Grainy Effect) - Premium hava katar */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}