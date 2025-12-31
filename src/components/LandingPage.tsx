import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeatureBlocks } from './FeatureBlocks';
import { CustomerCare } from './CustomerCare';
import { AboutSection } from './AboutSection';
import { useEffect, useState } from 'react';

export function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative transition-colors duration-500" style={{
      background: 'linear-gradient(135deg, #fff8fa 0%, #ffe9f2 15%, #ffd9e8 35%, #ffe4ed 55%, #fff2f7 75%, #ffffff 100%)'
    }}>
      <style>{`
        /* Dark Mode Background - Pure Black */
        .dark {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 15%, #050505 35%, #0a0a0a 55%, #000000 75%, #000000 100%) !important;
        }
        
        /* White Text for Night Sky Theme - Hero Section Only */
        .dark .text-gray-900 {
          color: #111827 !important;
        }
        .dark .text-gray-800 {
          color: #1f2937 !important;
        }
        .dark .text-gray-700 {
          color: #374151 !important;
        }
        .dark .text-gray-600 {
          color: #4b5563 !important;
        }
        
        /* Keep White Backgrounds for Cards */
        .dark .bg-white {
          background-color: #ffffff !important;
        }
        
        /* Keep Original Border Colors */
        .dark .border-gray-200 {
          border-color: #e5e7eb !important;
        }
        .dark .border-pink-200 {
          border-color: #fbcfe8 !important;
        }
        
        /* Keep Original Shadow System */
        .dark .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1) !important;
        }
        .dark .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        }
        .dark .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        
        /* Keep Gradient Colors */
        .dark .bg-gradient-to-br,
        .dark .bg-gradient-to-r {
          filter: none;
        }
        
        /* Keep Button Styles */
        .dark button {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .dark button:hover {
          transform: translateY(-1px);
        }
        
        /* Keep Radial Gradients */
        .dark [style*="radial-gradient"] {
          opacity: 1 !important;
        }
        
        /* GPU-Accelerated Transforms */
        [class*="hover:scale"] {
          transition: transform 0.3s ease !important;
        }
        
        /* Lightweight Opacity */
        [class*="opacity"] {
          transition: opacity 0.3s ease !important;
        }
        
        /* CSS-Based Drifting Stars with Twinkling */
        .stars {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          background:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 50% 40%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 20% 50%, rgba(255,255,255,0.45), transparent),
            radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.55), transparent),
            radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.5), transparent);
          background-size: 300px 300px;
          animation: starsMove 160s linear infinite;
        }
        
        .stars::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 45% 65%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 25% 90%, rgba(255,255,255,0.65), transparent),
            radial-gradient(1px 1px at 55% 10%, rgba(255,255,255,0.55), transparent),
            radial-gradient(1px 1px at 95% 55%, rgba(255,255,255,0.6), transparent);
          background-size: 400px 400px;
          animation: starTwinkle 6s ease-in-out infinite alternate;
        }
        
        /* Gentle star movement */
        @keyframes starsMove {
          from { transform: translateY(0); }
          to { transform: translateY(-300px); }
        }
        
        /* Smooth twinkling */
        @keyframes starTwinkle {
          0%   { opacity: 0.3; }
          50%  { opacity: 0.6; }
          100% { opacity: 0.4; }
        }
        
        /* CSS-Based Drifting Stars */
        .stars-back {
          background:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.25), transparent),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.25), transparent),
            radial-gradient(1px 1px at 20% 60%, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 60% 90%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 85% 70%, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.25), transparent);
          background-size: 400px 400px;
          animation: driftSlow 180s linear infinite;
        }
        
        .stars-front {
          background:
            radial-gradient(1.5px 1.5px at 30% 60%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 80% 30%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 50% 10%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1.5px 1.5px at 15% 85%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 65% 50%, rgba(255,255,255,0.45), transparent),
            radial-gradient(1.5px 1.5px at 95% 65%, rgba(255,255,255,0.55), transparent);
          background-size: 250px 250px;
          animation: driftFast 120s linear infinite;
        }
        
        @keyframes driftSlow {
          from { transform: translateY(0); }
          to { transform: translateY(-400px); }
        }
        
        @keyframes driftFast {
          from { transform: translateY(0); }
          to { transform: translateY(-250px); }
        }
        
        /* Enhanced Night Sky Stars */
        .star {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(200, 180, 255, 0.6) 30%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: twinkle 3s ease-in-out infinite;
          will-change: opacity;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 15px rgba(200, 180, 255, 0.4);
        }
        
        .dark .star {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(200, 180, 255, 0.7) 30%, transparent 70%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(200, 180, 255, 0.5);
        }
        
        /* Hanging Elements */
        .hanging-element {
          position: absolute;
          pointer-events: none;
          animation: gentle-sway 6s ease-in-out infinite;
          will-change: transform;
        }
        
        @keyframes gentle-sway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(8px) rotate(2deg); }
          75% { transform: translateX(-8px) rotate(-2deg); }
        }
        
        .hanging-thread {
          position: absolute;
          width: 1px;
          background: linear-gradient(to bottom, rgba(200, 180, 255, 0.4), rgba(200, 180, 255, 0.1));
          box-shadow: 0 0 4px rgba(200, 180, 255, 0.3);
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Deep Night Sky Atmospheric Layers */}
        <div 
          className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(75, 0, 130, 0.1) 30%, rgba(72, 61, 139, 0.05) 60%, transparent 100%)',
            filter: 'blur(100px)',
            willChange: 'transform',
            opacity: 0.8
          }}
        />
        <div 
          className="absolute top-1/4 -right-40 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(126, 34, 206, 0.08) 40%, rgba(139, 92, 246, 0.04) 70%, transparent 100%)',
            filter: 'blur(120px)',
            willChange: 'transform',
            opacity: 0.7
          }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-[850px] h-[850px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(79, 70, 229, 0.08) 50%, transparent 100%)',
            filter: 'blur(110px)',
            willChange: 'transform',
            opacity: 0.75
          }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.06) 50%, transparent 100%)',
            filter: 'blur(90px)',
            willChange: 'transform',
            opacity: 0.65
          }}
        />

        <div className="absolute top-20 left-[15%]" style={{ animationDelay: '0s', willChange: 'transform' }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="55" fill="rgba(147, 51, 234, 0.12)" />
            <circle cx="60" cy="60" r="40" fill="rgba(126, 34, 206, 0.18)" />
            <circle cx="60" cy="60" r="25" fill="rgba(168, 85, 247, 0.25)" />
          </svg>
        </div>

        <div className="absolute top-40 right-[20%]" style={{ animationDelay: '3s', willChange: 'transform' }}>
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <path d="M70 20 L120 120 L20 120 Z" fill="rgba(139, 92, 246, 0.15)" />
            <path d="M70 40 L100 100 L40 100 Z" fill="rgba(147, 51, 234, 0.22)" />
          </svg>
        </div>

        <div className="absolute top-[60%] left-[10%]" style={{ animationDelay: '6s', willChange: 'transform' }}>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <rect x="10" y="10" width="90" height="90" rx="20" fill="rgba(99, 102, 241, 0.14)" />
            <rect x="25" y="25" width="60" height="60" rx="15" fill="rgba(129, 140, 248, 0.20)" />
          </svg>
        </div>

        <div className="absolute bottom-32 right-[15%]" style={{ animationDelay: '9s', willChange: 'transform' }}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,80 10,80" fill="rgba(168, 85, 247, 0.16)" />
            <circle cx="50" cy="60" r="20" fill="rgba(147, 51, 234, 0.24)" />
          </svg>
        </div>

        {/* Hanging Social Media Elements */}
        
        {/* Instagram Icon - Left Side */}
        <div className="hanging-element" style={{ top: '5%', left: '12%' }}>
          <div className="hanging-thread" style={{ height: '80px', left: '50%' }} />
          <div style={{ 
            marginTop: '80px',
            filter: 'drop-shadow(0 8px 20px rgba(168, 85, 247, 0.4))',
            animation: 'gentle-sway 7s ease-in-out infinite'
          }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <rect x="5" y="5" width="40" height="40" rx="12" fill="url(#instagramGrad)" opacity="0.85" />
              <circle cx="25" cy="25" r="10" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2.5" fill="none" />
              <circle cx="37" cy="13" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
              <defs>
                <linearGradient id="instagramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.7)" />
                  <stop offset="100%" stopColor="rgba(126, 34, 206, 0.8)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Facebook Icon - Right Side */}
        <div className="hanging-element" style={{ top: '8%', right: '18%' }}>
          <div className="hanging-thread" style={{ height: '100px', left: '50%' }} />
          <div style={{ 
            marginTop: '100px',
            filter: 'drop-shadow(0 8px 20px rgba(99, 102, 241, 0.4))',
            animation: 'gentle-sway 8s ease-in-out infinite',
            animationDelay: '1s'
          }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="20" fill="rgba(99, 102, 241, 0.75)" />
              <path d="M28 16h3v-5h-4c-3.5 0-6 2.5-6 6v3h-3v5h3v12h5V25h4l1-5h-5v-2c0-1 0.5-2 2-2z" fill="rgba(255, 255, 255, 0.95)" />
            </svg>
          </div>
        </div>

        {/* Mobile/Phone Icon - Center Left */}
        <div className="hanging-element" style={{ top: '15%', left: '25%' }}>
          <div className="hanging-thread" style={{ height: '120px', left: '50%' }} />
          <div style={{ 
            marginTop: '120px',
            filter: 'drop-shadow(0 8px 20px rgba(139, 92, 246, 0.4))',
            animation: 'gentle-sway 6.5s ease-in-out infinite',
            animationDelay: '2s'
          }}>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <rect x="10" y="5" width="25" height="35" rx="4" fill="rgba(139, 92, 246, 0.7)" stroke="rgba(200, 180, 255, 0.6)" strokeWidth="1.5" />
              <rect x="13" y="8" width="19" height="25" rx="1" fill="rgba(200, 180, 255, 0.3)" />
              <circle cx="22.5" cy="36" r="2" fill="rgba(255, 255, 255, 0.9)" />
            </svg>
          </div>
        </div>

        {/* Decorative Star - Top Right */}
        <div className="hanging-element" style={{ top: '10%', right: '30%' }}>
          <div className="hanging-thread" style={{ height: '60px', left: '50%' }} />
          <div style={{ 
            marginTop: '60px',
            filter: 'drop-shadow(0 6px 16px rgba(255, 255, 255, 0.5))',
            animation: 'gentle-sway 5.5s ease-in-out infinite',
            animationDelay: '0.5s'
          }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="rgba(255, 255, 255, 0.7)" />
              <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" fill="rgba(200, 180, 255, 0.8)" />
            </svg>
          </div>
        </div>

        {/* Abstract Mobile Icon - Center Right */}
        <div className="hanging-element" style={{ top: '12%', right: '35%' }}>
          <div className="hanging-thread" style={{ height: '90px', left: '50%' }} />
          <div style={{ 
            marginTop: '90px',
            filter: 'drop-shadow(0 8px 20px rgba(147, 51, 234, 0.4))',
            animation: 'gentle-sway 7.5s ease-in-out infinite',
            animationDelay: '3s'
          }}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
              <rect x="8" y="4" width="26" height="34" rx="5" fill="rgba(147, 51, 234, 0.65)" />
              <rect x="11" y="7" width="20" height="24" rx="2" fill="rgba(168, 85, 247, 0.4)" />
              <circle cx="21" cy="35" r="2.5" fill="rgba(255, 255, 255, 0.85)" />
            </svg>
          </div>
        </div>

        {/* Small Decorative Star - Left */}
        <div className="hanging-element" style={{ top: '20%', left: '8%' }}>
          <div className="hanging-thread" style={{ height: '50px', left: '50%' }} />
          <div style={{ 
            marginTop: '50px',
            filter: 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.4))',
            animation: 'gentle-sway 6s ease-in-out infinite',
            animationDelay: '1.5s'
          }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M15 0 L18 12 L30 15 L18 18 L15 30 L12 18 L0 15 L12 12 Z" fill="rgba(255, 255, 255, 0.65)" />
              <path d="M15 3 L17 13 L27 15 L17 17 L15 27 L13 17 L3 15 L13 13 Z" fill="rgba(200, 180, 255, 0.75)" />
            </svg>
          </div>
        </div>

        {/* Glowing Accent Orbs */}
        <div className="absolute top-[25%] left-[25%] w-4 h-4 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0.3) 70%, transparent 100%)',
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)',
          willChange: 'transform'
        }} />
        <div className="absolute top-[35%] right-[30%] w-5 h-5 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(139, 92, 246, 0.25) 70%, transparent 100%)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.5), 0 0 45px rgba(139, 92, 246, 0.25)',
          willChange: 'transform'
        }} />
        <div className="absolute top-[55%] left-[40%] w-3 h-3 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0.3) 70%, transparent 100%)',
          boxShadow: '0 0 22px rgba(99, 102, 241, 0.6), 0 0 35px rgba(99, 102, 241, 0.3)',
          willChange: 'transform'
        }} />
        <div className="absolute bottom-[30%] right-[20%] w-4 h-4 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.75) 0%, rgba(147, 51, 234, 0.28) 70%, transparent 100%)',
          boxShadow: '0 0 28px rgba(147, 51, 234, 0.55), 0 0 42px rgba(147, 51, 234, 0.28)',
          willChange: 'transform'
        }} />
        <div className="absolute bottom-[45%] left-[35%] w-5 h-5 rounded-full" style={{ 
          background: 'radial-gradient(circle, rgba(200, 180, 255, 0.7) 0%, rgba(200, 180, 255, 0.25) 70%, transparent 100%)',
          boxShadow: '0 0 26px rgba(200, 180, 255, 0.5), 0 0 40px rgba(200, 180, 255, 0.25)',
          willChange: 'transform'
        }} />

        <svg className="absolute top-0 left-0 w-full h-full opacity-6" xmlns="http://www.w3.org/2000/svg" style={{ mixBlendMode: 'multiply' }}>
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100" stroke="url(#wave1)" strokeWidth="3" fill="none" opacity="0.6" className="animate-wave" />
          <path d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200" stroke="url(#wave1)" strokeWidth="3" fill="none" opacity="0.5" className="animate-wave" style={{ animationDelay: '2s' }} />
          <path d="M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300" stroke="url(#wave1)" strokeWidth="3" fill="none" opacity="0.4" className="animate-wave" style={{ animationDelay: '4s' }} />
        </svg>

        <div className="absolute top-[15%] right-[25%]" style={{ animationDelay: '0s', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))', willChange: 'transform' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="rgba(255, 255, 255, 0.6)" />
            <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" fill="rgba(200, 180, 255, 0.8)" />
          </svg>
        </div>
        <div className="absolute top-[45%] left-[20%]" style={{ animationDelay: '3s', filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))', willChange: 'transform' }}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M17.5 0 L21 14 L35 17.5 L21 21 L17.5 35 L14 21 L0 17.5 L14 14 Z" fill="rgba(255, 255, 255, 0.55)" />
            <path d="M17.5 3 L20 15 L32 17.5 L20 20 L17.5 32 L15 20 L3 17.5 L15 15 Z" fill="rgba(200, 180, 255, 0.75)" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] right-[35%]" style={{ animationDelay: '6s', filter: 'drop-shadow(0 0 9px rgba(255, 255, 255, 0.65))', willChange: 'transform' }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 0 L18 12 L30 15 L18 18 L15 30 L12 18 L0 15 L12 12 Z" fill="rgba(255, 255, 255, 0.5)" />
            <path d="M15 3 L17 13 L27 15 L17 17 L15 27 L13 17 L3 15 L13 13 Z" fill="rgba(200, 180, 255, 0.7)" />
          </svg>
        </div>
      </div>

      <div className="relative z-20">
        <Header />
        <HeroSection />
        <FeatureBlocks />
        <CustomerCare />
        <AboutSection />
      </div>
    </div>
  );
}
