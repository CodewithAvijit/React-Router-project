import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "About",
      description: "Discover the story behind the code.",
      path: "/about",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Contact",
      description: "Let's build something together.",
      path: "/contact",
      gradient: "from-emerald-400 via-green-500 to-teal-500",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "User Profile",
      description: "Access demo profile (ID: 101).",
      path: "/user/101",
      gradient: "from-pink-500 via-purple-500 to-violet-500",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* 1. Background Effects (Grid + Spotlight) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>

      {/* 2. Hero Section */}
      <div className="relative z-10 text-center space-y-4 mb-16 max-w-3xl">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
          React Router v6 Demo
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Design. Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Navigate.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Explore the components of this application using the interactive dashboard below.
        </p>
      </div>

      {/* 3. Navigation Cards (The "Best" Part) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="group relative h-64 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >
            {/* Gradient Border/Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} blur-xl`}></div>
            
            {/* Card Content */}
            <div className="relative h-full bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between items-start text-left group-hover:bg-gray-900/80 transition-colors">
              
              {/* Icon Box */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="absolute top-8 right-8 text-gray-600 group-hover:text-white transition-colors rotate-45 group-hover:rotate-0 duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

            </div>
          </button>
        ))}
      </div>

      {/* Footer / Status */}
      <div className="mt-16 text-gray-500 text-sm font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        System Online
      </div>

    </div>
  );
};

export default Home;