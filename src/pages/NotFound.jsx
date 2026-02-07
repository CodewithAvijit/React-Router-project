import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false);

  // Track mouse for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle the "TV Shutdown" exit animation
  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      // Go back to the previous page
      navigate('/');
    }, 800); // Wait for animation to finish
  };

  return (
    <div className={`
      relative min-h-screen flex flex-col items-center justify-center bg-[#030303] text-white overflow-hidden p-6 transition-all duration-700
      ${isExiting ? "scale-y-0 opacity-0 filter blur-xl" : "scale-100 opacity-100"}
    `}>
      
      {/* 1. CRT Scanline Overlay (The Retro Feel) */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%]"></div>

      {/* 2. Interactive Spotlight Background */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{ 
          backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, 
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 100%)`
        }}
      ></div>

      {/* Floating Red Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 text-center space-y-10">
        
        {/* The Glitching 404 */}
        <div className="relative inline-block group">
          <h1 className="relative text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-black select-none">
            404
          </h1>
          
          {/* Ghost Layers for Glitch Effect */}
          <h1 className="absolute top-0 left-0 text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-red-600/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping select-none blur-sm">
            404
          </h1>
          <h1 className="absolute top-0 left-[4px] text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-blue-600/30 opacity-0 group-hover:opacity-50 group-hover:translate-x-2 transition-transform select-none">
            404
          </h1>

          {/* Decorative Lines */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-red-500/50 shadow-[0_0_20px_rgba(239,68,68,1)]"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-gray-200">
            Signal Lost
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto font-mono">
            The coordinates you are attempting to access do not exist in this sector.
          </p>
        </div>

        {/* The "Emergency Return" Button */}
        <div className="pt-8">
          <button
            onClick={handleExit}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-transparent border border-white/10 rounded-none hover:border-red-500/50 overflow-hidden"
          >
            {/* Background Sweep */}
            <span className="absolute inset-0 w-full h-full bg-red-900/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            
            {/* Tech Corners */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-red-500 transition-colors"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-red-500 transition-colors"></span>

            <span className="relative flex items-center gap-3 tracking-widest uppercase text-sm">
              <span className="group-hover:-translate-x-1 transition-transform">◄</span>
              Return Previous
            </span>
          </button>
        </div>
      </div>

      {/* Technical Data Overlay */}
      <div className="absolute bottom-10 left-10 font-mono text-xs text-red-900/50 flex flex-col gap-1 hidden md:flex">
        <span>ERR_CONNECTION_TIMED_OUT</span>
        <span>MEM_DUMP: 0x00045F2A</span>
      </div>

      <div className="absolute top-10 right-10 font-mono text-xs text-red-900/50 flex flex-col gap-1 text-right hidden md:flex">
        <span>SYSTEM_HALTED</span>
        <span>CPU_TEMP: 98°C</span>
      </div>

    </div>
  );
};

export default NotFound;