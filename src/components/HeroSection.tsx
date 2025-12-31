import SplitText from './SplitText';

export function HeroSection() {
  return (
    <section className="relative px-8 py-20 max-w-7xl mx-auto">
      <style>{`
        .dark .hero-glow-1 {
          background: radial-gradient(circle, rgba(147, 51, 234, 0.18) 0%, rgba(139, 92, 246, 0.10) 40%, transparent 70%) !important;
          filter: blur(70px) !important;
        }
        .dark .hero-glow-2 {
          background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.09) 40%, transparent 70%) !important;
          filter: blur(80px) !important;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow-1 absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full transition-all duration-700" 
             style={{ 
               background: 'radial-gradient(circle, rgba(147, 51, 234, 0.14) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
               filter: 'blur(70px)',
               willChange: 'transform',
               opacity: 0.8
             }} />
        <div className="hero-glow-2 absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full transition-all duration-700" 
             style={{ 
               background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(147, 51, 234, 0.07) 40%, transparent 70%)',
               filter: 'blur(80px)',
               willChange: 'transform',
               opacity: 0.7
             }} />
        
        <div className="absolute top-10 left-[10%] text-4xl opacity-8" style={{ filter: 'drop-shadow(0 2px 8px rgba(200, 180, 255, 0.4))' }}>✨</div>
        <div className="absolute top-32 right-[15%] text-5xl opacity-8" 
             style={{ filter: 'drop-shadow(0 2px 10px rgba(168, 85, 247, 0.4))' }}>🚀</div>
        <div className="absolute bottom-20 left-[20%] text-4xl opacity-8" 
             style={{ filter: 'drop-shadow(0 2px 8px rgba(139, 92, 246, 0.4))' }}>💫</div>
        <div className="absolute bottom-40 right-[10%] text-3xl opacity-8" 
             style={{ filter: 'drop-shadow(0 2px 6px rgba(200, 180, 255, 0.4))' }}>⚡</div>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6">
          <SplitText
            text="Stop the Grind."
            tag="h2"
            className="text-8xl text-gray-900"
            delay={40}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, x: -50, y: 20 }}
            to={{ opacity: 1, x: 0, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        <div className="mb-6">
          <SplitText
            text="Start Creating."
            tag="h2"
            className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 italic"
            style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Satisfy', 'Great Vibes', cursive", fontWeight: 600 }}
            delay={40}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, x: 50, y: 20 }}
            to={{ opacity: 1, x: 0, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        <div className="max-w-3xl mb-12 mt-6">
          <SplitText
            text="AI-powered automation that handles the boring stuff, so you can focus on what you love: creating amazing content."
            tag="p"
            className="text-2xl text-gray-800"
            delay={20}
            duration={0.8}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        <div 
          className="transform translate-y-1 relative group"
          style={{
            filter: 'drop-shadow(0 10px 25px rgba(147, 51, 234, 0.35))'
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500" />
          <button className="relative px-12 py-5 rounded-full text-xl text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:scale-105 transition-all duration-300 overflow-hidden" style={{
            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4), 0 10px 30px rgba(147, 51, 234, 0.3)'
          }}>
            <span className="relative z-10">Start Your Journey ✨</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <style>{`
          .dark .transform.translate-y-1 {
            filter: drop-shadow(0 10px 35px rgba(147, 51, 234, 0.45)) !important;
          }
          .dark .transform.translate-y-1 button {
            box-shadow: 0 4px 20px rgba(147, 51, 234, 0.5), 0 10px 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.2) !important;
          }
        `}</style>

        <div className="mt-3 flex items-center gap-2 opacity-60">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(168, 85, 247, 0.4) 70%)',
            boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)'
          }} />
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ 
            animationDelay: '0.3s',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(139, 92, 246, 0.4) 70%)',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.6)'
          }} />
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ 
            animationDelay: '0.6s',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.85) 0%, rgba(147, 51, 234, 0.4) 70%)',
            boxShadow: '0 0 12px rgba(147, 51, 234, 0.5)'
          }} />
        </div>

        <div className="mt-16 flex items-center gap-12">
          <div className="text-center">
            <div className="text-4xl text-gray-900 font-bold">10K+</div>
            <div className="text-gray-700 mt-1">Active Creators</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="text-center">
            <div className="text-4xl text-gray-900 font-bold">5M+</div>
            <div className="text-gray-700 mt-1">Posts Automated</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="text-center">
            <div className="text-4xl text-gray-900 font-bold">24/7</div>
            <div className="text-gray-700 mt-1">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
