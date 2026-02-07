import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  // Trigger a subtle entrance animation
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* 1. Dynamic Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. Main Profile Container */}
      <div className={`
        relative z-10 w-full max-w-md transform transition-all duration-1000 ease-out
        ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}>
        
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header / Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative">
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono tracking-wider">
              PRO MEMBER
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            
            {/* Floating Avatar */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 rounded-3xl bg-gray-900 p-1 mx-auto shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${id}`} 
                  alt="User Avatar" 
                  className="w-full h-full rounded-2xl bg-gray-800 object-cover"
                />
              </div>
            </div>

            {/* User Details */}
            <div className="text-center space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-white">
                User Profile
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 font-mono text-sm">
                <span>ID:</span>
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                  #{id}
                </span>
              </div>
            </div>

            {/* Stats Grid (Simulated) */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Projects', val: '12' },
                { label: 'Views', val: '4.5k' },
                { label: 'Rating', val: '4.9' }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-xl font-bold text-white">{stat.val}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                onClick={() => alert(`Connecting with User ${id}...`)}
              >
                Connect Now
              </button>
              
              <button 
                onClick={() => navigate("/")}
                className="w-full py-3.5 bg-transparent border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Return Home
              </button>
            </div>

          </div>
        </div>

        {/* Floating Data Card (Decorative) */}
        <div className="absolute -right-16 top-32 -z-10 bg-gray-800/80 backdrop-blur-md p-4 rounded-xl border border-white/10 w-48 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="space-y-2">
            <div className="h-2 w-12 bg-gray-600 rounded"></div>
            <div className="h-2 w-24 bg-gray-700 rounded"></div>
            <div className="h-2 w-20 bg-gray-700 rounded"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default User;