import { Zap, Brain, Rocket, Clock } from 'lucide-react';
import SplitText from './SplitText';

export function FeatureBlocks() {
  return (
    <section className="relative px-8 py-20 max-w-7xl mx-auto">
      <style>{`
        .dark .feature-card {
          background-color: #1f1a1f !important;
          box-shadow: 8px 0 30px rgba(236, 72, 153, 0.18), 0 10px 50px rgba(236, 72, 153, 0.12) !important;
        }
        .dark .feature-card:hover {
          box-shadow: 8px 0 40px rgba(236, 72, 153, 0.25), 0 10px 60px rgba(236, 72, 153, 0.18), 0 0 80px rgba(236, 72, 153, 0.1) !important;
        }
        .dark .feature-card-2 {
          box-shadow: -8px 0 30px rgba(236, 72, 153, 0.18), 0 10px 50px rgba(236, 72, 153, 0.12) !important;
        }
        .dark .feature-card-2:hover {
          box-shadow: -8px 0 40px rgba(236, 72, 153, 0.25), 0 10px 60px rgba(236, 72, 153, 0.18), 0 0 80px rgba(236, 72, 153, 0.1) !important;
        }
        .dark .feature-card-3 {
          box-shadow: 0 8px 30px rgba(251, 113, 133, 0.18), 0 15px 55px rgba(251, 113, 133, 0.12) !important;
        }
        .dark .feature-card-3:hover {
          box-shadow: 0 8px 40px rgba(251, 113, 133, 0.25), 0 15px 65px rgba(251, 113, 133, 0.18), 0 0 80px rgba(251, 113, 133, 0.1) !important;
        }
        .dark .feature-card-4 {
          box-shadow: 0 -8px 30px rgba(236, 72, 153, 0.18), 0 -15px 55px rgba(236, 72, 153, 0.12) !important;
        }
        .dark .feature-card-4:hover {
          box-shadow: 0 -8px 40px rgba(236, 72, 153, 0.25), 0 -15px 65px rgba(236, 72, 153, 0.18), 0 0 80px rgba(236, 72, 153, 0.1) !important;
        }
      `}</style>
      <div className="grid grid-cols-2 gap-8">
        
        <div 
          className="feature-card group relative bg-white rounded-3xl p-10 hover:scale-105 transition-all duration-300 transform -translate-x-1 cursor-pointer"
          style={{
            boxShadow: '8px 0 25px rgba(236, 72, 153, 0.12), 0 10px 40px rgba(236, 72, 153, 0.06)'
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 mb-6" style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 1) 0%, rgba(244, 63, 94, 1) 100%)',
            boxShadow: '0 8px 25px rgba(236, 72, 153, 0.35), 0 0 20px rgba(236, 72, 153, 0.15)'
          }}>
            <Zap className="w-8 h-8 text-white relative z-10" />
          </div>
          <SplitText
            text="Auto-Schedule Posts"
            tag="h3"
            className="text-3xl text-gray-900 mb-3"
            delay={30}
            duration={0.8}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, x: -30 }}
            to={{ opacity: 1, x: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <SplitText
            text="Plan your content calendar weeks ahead. Our AI picks the perfect times to post for maximum engagement."
            tag="p"
            className="text-gray-700 text-lg"
            delay={15}
            duration={0.6}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
        </div>

        <div 
          className="feature-card-2 group relative bg-white rounded-3xl p-10 hover:scale-105 transition-all duration-300 transform translate-x-1 cursor-pointer"
          style={{
            boxShadow: '-8px 0 25px rgba(236, 72, 153, 0.12), 0 10px 40px rgba(236, 72, 153, 0.06)'
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 mb-6" style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 1) 0%, rgba(244, 63, 94, 1) 100%)',
            boxShadow: '0 8px 25px rgba(236, 72, 153, 0.35), 0 0 20px rgba(236, 72, 153, 0.15)'
          }}>
            <Brain className="w-8 h-8 text-white relative z-10" />
          </div>
          <SplitText
            text="Smart Analytics"
            tag="h3"
            className="text-3xl text-gray-900 mb-3"
            delay={30}
            duration={0.8}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, x: 30 }}
            to={{ opacity: 1, x: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <SplitText
            text="Get AI-powered insights on what works. Track growth, engagement, and audience behavior in real-time."
            tag="p"
            className="text-gray-700 text-lg"
            delay={15}
            duration={0.6}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
        </div>

        <div 
          className="feature-card-3 group relative bg-white rounded-3xl p-10 hover:scale-105 transition-all duration-300 transform -translate-y-1 cursor-pointer"
          style={{
            boxShadow: '0 8px 25px rgba(251, 113, 133, 0.12), 0 15px 45px rgba(251, 113, 133, 0.06)'
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 mb-6" style={{
            background: 'linear-gradient(135deg, rgba(244, 63, 94, 1) 0%, rgba(236, 72, 153, 1) 100%)',
            boxShadow: '0 8px 25px rgba(244, 63, 94, 0.35), 0 0 20px rgba(244, 63, 94, 0.15)'
          }}>
            <Rocket className="w-8 h-8 text-white relative z-10" />
          </div>
          <SplitText
            text="Grow Faster"
            tag="h3"
            className="text-3xl text-gray-900 mb-3"
            delay={30}
            duration={0.8}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: -30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <SplitText
            text="Reach the right audience with AI-optimized hashtags, captions, and posting strategies tailored to your niche."
            tag="p"
            className="text-gray-700 text-lg"
            delay={15}
            duration={0.6}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
        </div>

        <div 
          className="feature-card-4 group relative bg-white rounded-3xl p-10 hover:scale-105 transition-all duration-300 transform translate-y-1 cursor-pointer"
          style={{
            boxShadow: '0 -8px 25px rgba(236, 72, 153, 0.12), 0 -15px 45px rgba(236, 72, 153, 0.06)'
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 mb-6" style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 1) 0%, rgba(244, 63, 94, 1) 100%)',
            boxShadow: '0 8px 25px rgba(236, 72, 153, 0.35), 0 0 20px rgba(236, 72, 153, 0.15)'
          }}>
            <Clock className="w-8 h-8 text-white relative z-10" />
          </div>
          <SplitText
            text="Save Time"
            tag="h3"
            className="text-3xl text-gray-900 mb-3"
            delay={30}
            duration={0.8}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <SplitText
            text="Reclaim hours every week. Automate repetitive tasks and focus on creating content that truly resonates."
            tag="p"
            className="text-gray-700 text-lg"
            delay={15}
            duration={0.6}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
        </div>

      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="url(#gradient1)" strokeWidth="2" />
          <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="url(#gradient2)" strokeWidth="2" />
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#gradient3)" strokeWidth="2" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
