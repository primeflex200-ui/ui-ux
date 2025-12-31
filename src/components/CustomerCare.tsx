import { Heart, MessageCircle } from 'lucide-react';
import SplitText from './SplitText';

export function CustomerCare() {
  return (
    <section className="relative px-8 py-20 max-w-7xl mx-auto">
      <style>{`
        .dark .customer-care-card {
          background-color: #1f1a1f !important;
          box-shadow: 0 20px 70px rgba(236, 72, 153, 0.15), 0 8px 35px rgba(236, 72, 153, 0.1) !important;
        }
        .dark .customer-care-glow {
          background: radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%) !important;
          opacity: 0.25 !important;
        }
        .dark .customer-care-bg-glow {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 63, 94, 0.15) 100%) !important;
          opacity: 0.4 !important;
        }
      `}</style>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="customer-care-bg-glow w-[600px] h-[600px] bg-gradient-to-br from-pink-100 via-rose-100 to-white rounded-full blur-3xl opacity-30 animate-pulse transition-all duration-700" 
             style={{ animationDuration: '10s' }} />
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[5%] w-20 h-20 bg-gradient-to-br from-pink-200/10 to-rose-200/10 rounded-full animate-float" />
        <div className="absolute top-20 right-[8%] w-16 h-16 bg-gradient-to-br from-rose-200/10 to-pink-200/10 rounded-2xl rotate-45 animate-float" 
             style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute bottom-20 left-[10%] w-14 h-14 bg-gradient-to-br from-pink-200/10 to-rose-200/10 rounded-xl -rotate-12 animate-float" 
             style={{ animationDelay: '4s', animationDuration: '8s' }} />
        <div className="absolute bottom-32 right-[12%] w-18 h-18 bg-gradient-to-br from-rose-200/10 to-pink-200/10 rounded-full animate-float" 
             style={{ animationDelay: '1s', animationDuration: '7s' }} />
      </div>

      <div className="customer-care-card relative bg-white rounded-[3rem] p-16 overflow-hidden transition-all duration-700" style={{
        boxShadow: '0 20px 60px rgba(236, 72, 153, 0.08), 0 8px 25px rgba(236, 72, 153, 0.05)'
      }}>
        <div className="customer-care-glow absolute top-8 right-8 w-24 h-24 rounded-full opacity-15 transition-all duration-700" style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }} />
        <div className="customer-care-glow absolute bottom-8 left-8 w-24 h-24 rounded-full opacity-15 transition-all duration-700" style={{
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.3) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }} />

        <div className="text-center mb-8">
          <SplitText
            text="24/7 Creator Support"
            tag="h2"
            className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-6"
            delay={50}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30, x: -10 }}
            to={{ opacity: 1, y: 0, x: 0 }}
            threshold={0.3}
            rootMargin="0px"
            textAlign="center"
          />

          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-2 h-2 rounded-full bg-pink-400 opacity-40" />
            <div className="h-px w-12 bg-gradient-to-r from-pink-400 to-rose-400 opacity-40" />
            <div className="w-2 h-2 rounded-full bg-rose-400 opacity-50" />
            <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-pink-400 opacity-40" />
            <div className="w-2 h-2 rounded-full bg-pink-300 opacity-40" />
          </div>

          <SplitText
            text="Smart Help. Human Touch."
            tag="p"
            className="text-3xl text-gray-900"
            delay={60}
            duration={0.9}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="relative w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:shadow-2xl transition-all duration-300">
              <Heart className="w-7 h-7 text-white relative z-10" />
            </div>
            <div>
              <SplitText
                text="Real Human Support"
                tag="h4"
                className="text-xl text-gray-900 mb-2"
                delay={25}
                duration={0.6}
                ease="power2.out"
                splitType="chars"
                from={{ opacity: 0, x: -10 }}
                to={{ opacity: 1, x: 0 }}
                threshold={0.3}
                rootMargin="0px"
                textAlign="left"
              />
              <SplitText
                text="AI + human experts ready to help anytime you need guidance or troubleshooting."
                tag="p"
                className="text-gray-700"
                delay={15}
                duration={0.6}
                ease="power2.out"
                splitType="words"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.3}
                rootMargin="0px"
                textAlign="left"
              />
            </div>
          </div>

          <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="relative w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:shadow-2xl transition-all duration-300">
              <MessageCircle className="w-7 h-7 text-white relative z-10" />
            </div>
            <div>
              <SplitText
                text="Instant Responses"
                tag="h4"
                className="text-xl text-gray-900 mb-2"
                delay={25}
                duration={0.6}
                ease="power2.out"
                splitType="chars"
                from={{ opacity: 0, x: 10 }}
                to={{ opacity: 1, x: 0 }}
                threshold={0.3}
                rootMargin="0px"
                textAlign="left"
              />
              <SplitText
                text="Get answers in seconds with our AI chatbot, trained on thousands of creator success stories."
                tag="p"
                className="text-gray-700"
                delay={15}
                duration={0.6}
                ease="power2.out"
                splitType="words"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.3}
                rootMargin="0px"
                textAlign="left"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="relative inline-block group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 blur-xl opacity-40 group-hover:opacity-70 transition-all duration-300" />
            <button className="relative px-10 py-4 rounded-full text-lg text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 shadow-xl hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Talk to Us Now</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
