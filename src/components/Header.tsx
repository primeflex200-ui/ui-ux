import { Sparkles, MoreHorizontal } from 'lucide-react';
import SplitText from './SplitText';

export function Header() {
  return (
    <header className="relative z-50 px-8 py-6">
      <style>{`
        /* Dark mode header adjustments */
        .dark header button {
          transition: all 0.3s ease;
        }
        .dark header .bg-white {
          background-color: #1f1a1f !important;
          border-color: #3a2f3a !important;
        }
        .dark header .text-gray-900 {
          color: #f5f0f5 !important;
        }
        .dark header button:hover {
          box-shadow: 0 4px 20px rgba(236, 72, 153, 0.25) !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-lg hover:scale-125 hover:shadow-2xl hover:shadow-pink-300/50 transition-all duration-500 cursor-pointer group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
            <div className="absolute -inset-2 rounded-full border-2 border-pink-300 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <MoreHorizontal className="w-6 h-6 text-white relative z-10" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-pink-400/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl blur-md opacity-50 animate-pulse group-hover:opacity-80 group-hover:blur-lg transition-all duration-500" style={{ animationDuration: '2s' }} />
            <div className="absolute -inset-1 rounded-xl border-2 border-pink-300 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            <Sparkles className="w-6 h-6 text-white relative z-10" />
          </div>
          <SplitText
            text="InfluenzAI"
            tag="h1"
            className="text-3xl tracking-tight text-gray-900"
            delay={80}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20, x: -10 }}
            to={{ opacity: 1, y: 0, x: 0 }}
            threshold={0.9}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative px-6 py-3 rounded-full text-gray-900 bg-white border-2 border-gray-200 hover:scale-105 hover:shadow-xl hover:border-pink-300 transition-all duration-300 group" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)' }}>
            <span className="relative z-10">Know More</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 blur-lg opacity-40 group-hover:opacity-70 transition-all duration-300" />
            <button className="relative px-6 py-3 rounded-full text-white bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}