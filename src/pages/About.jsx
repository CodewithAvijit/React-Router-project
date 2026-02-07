import { useState } from "react";
import profilePic from "../assets/PROFILEPIC.jpg";

<img
  src={profilePic}
  alt="Profile"
  className="w-full h-[600px] object-cover"
/>

const About = () => {
  const [activeTab, setActiveTab] = useState("skills"); // 'skills' or 'experience'

  const skills = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Tailwind", level: 95, icon: "🎨" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "TypeScript", level: 80, icon: "TS" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "GraphQL", level: 75, icon: "◈" },
  ];

  const experience = [
    { year: "2024 - Present", role: "Senior Frontend Dev", company: "TechCorp" },
    { year: "2021 - 2024", role: "Full Stack Engineer", company: "StartupX" },
    { year: "2019 - 2021", role: "UI/UX Designer", company: "CreativeAgency" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white p-6 overflow-hidden">
      
      {/* 1. Background Texture & Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: The Visual Hook */}
        <div className="relative group">
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          
          {/* Main Image Card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img 
              src={profilePic} 
              alt="Profile" 
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-black bg-white rounded-full uppercase">
                Open for Work
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">Alex Morgan</h2>
              <p className="text-gray-300 font-mono text-sm">Full Stack Engineer • San Francisco</p>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -right-8 top-20 bg-gray-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl transform translate-x-4 group-hover:translate-x-6 transition-transform duration-500 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🚀</div>
              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Narrative */}
        <div className="space-y-10">
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-blue-500"></span>
              <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">About Me</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">digital experiences</span> that matter.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              I am a developer who bridges the gap between design and engineering. I don't just write code; I craft interfaces that feel natural, responsive, and human. 
            </p>
          </div>

          {/* Interactive Tabs (Skills vs Experience) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex gap-8 border-b border-white/10 pb-4 mb-6">
              <button 
                onClick={() => setActiveTab("skills")}
                className={`text-sm font-bold uppercase tracking-widest pb-4 -mb-4 transition-colors ${activeTab === 'skills' ? 'text-white border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Tech Stack
              </button>
              <button 
                onClick={() => setActiveTab("experience")}
                className={`text-sm font-bold uppercase tracking-widest pb-4 -mb-4 transition-colors ${activeTab === 'experience' ? 'text-white border-b-2 border-purple-500' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Timeline
              </button>
            </div>

            <div className="min-h-[200px]">
              {activeTab === "skills" ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-default">
                      <span className="text-xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-gray-200">{skill.name}</p>
                        <div className="w-full bg-gray-700 h-1 mt-1 rounded-full overflow-hidden w-16">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 animate-fadeIn">
                  {experience.map((job, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-white/10">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <p className="text-gray-400 text-sm">{job.company}</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">{job.year}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
            Download Resume
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default About;