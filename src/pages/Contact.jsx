import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate network request
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white p-6 overflow-hidden">
      
      {/* 1. Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: The Pitch (2 columns) */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AVAILABLE FOR WORK
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Let's start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">conversation.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
            </p>
          </div>

          {/* Social Proof / Connectors */}
          <div className="flex gap-4 pt-4">
            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-gray-400 rounded-sm"></div> {/* Placeholder for Icon */}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: The Intelligent Form (3 columns) */}
        <div className="lg:col-span-3">
          <div className="relative group perspective-1000">
            {/* Gradient Glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-gray-900 ring-1 ring-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              
              {formState === "success" ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                  <button onClick={() => setFormState("idle")} className="text-indigo-400 hover:text-indigo-300 font-medium mt-4">Send another?</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">First Name</label>
                      <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Elon" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Last Name</label>
                      <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Musk" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="elon@spacex.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea required rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none" placeholder="I want to build a rocket..."></textarea>
                  </div>

                  <button 
                    disabled={formState === "submitting"}
                    className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;