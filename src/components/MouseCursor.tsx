"use client";
import React, { useEffect, useState } from "react";

export default function MouseCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed w-32 h-32 rounded-full border border-white/10 pointer-events-none transition-all duration-300 ease-out z-[999]"
      style={{ 
        left: `${mousePos.x}px`, 
        top: `${mousePos.y}px`,
        transform: 'translate(-50%, -50%)',
        // Beyaz parlayan ışık efekti:
        boxShadow: '0 0 100px rgba(255, 255, 255, 0.1)', 
        background: 'rgba(255, 255, 255, 0.02)'
      }}
    />
  );
}