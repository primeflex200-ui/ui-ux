import { Sparkles, Target, Zap, TrendingUp } from 'lucide-react';
import SplitText from './SplitText';

export function AboutSection() {
  return (
    <section className="relative px-8 py-20 max-w-7xl mx-auto">
      <style>{`
        .dark .about-bg-glow-1 {
          background: rgba(236, 72, 153, 0.25) !important;
          opacity: 0.3 !important;
        }
        .dark .about-bg-glow-2 {
          background: rgba(244, 63, 94, 0.25) !important;
          opacity: 0.3 !important;
        }
        .dark .about-card {
          background-color: #1f1a1f !important;
          box-shadow: 0 20px 70px rgba(236, 72, 153, 0.12), 0 8px 35px rgba(236, 72, 153, 0.08) !important;
        }
        .dark .about-service-card {
          background-color: #1f1a1f !important;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.1) !important;
        }
        .dark .about-service-card:hover {
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.18) !important;
        }
        .dark .about-services-bg {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 63, 94, 0.08) 50%, rgba(236, 72, 153, 0.05) 100%) !important;
        }
        .dark .about-quote-card {
          background-color: #1f1a1f !important;
          box-shadow: 0 25px 80px rgba(236, 72, 153, 0.2) !important;
        }
        .dark .text-gray-600 {
          color: #b8a8b8 !important;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="about-bg-glow-1 absolute top-1/4 left-[10%] w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse transition-all duration-700" 
             style={{ animationDuration: '8s' }} />
        <div className="about-bg-glow-2 absolute bottom-1/4 right-[10%] w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-20 animate-pulse transition-all duration-700" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="relative">
        <div className="text-center mb-16">
          <SplitText
            text="About InfluenzAI"
            tag="h2"
            className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-6"
            delay={50}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="0px"
            textAlign="center"
          />
          <SplitText
            text="Smart Automation for Modern Creators"
            tag="p"
            className="text-2xl text-gray-700 max-w-3xl mx-auto"
            delay={30}
            duration={0.8}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        <div className="about-card bg-white rounded-[3rem] p-16 shadow-xl mb-12 transition-all duration-700">
          <div className="max-w-4xl mx-auto">
            <SplitText
              text="InfluenzAI is a Gen Z-focused influencer platform designed to help creators stay consistent, grow faster, and focus more on creativity rather than repetitive manual tasks."
              tag="p"
              className="text-xl text-gray-800 leading-relaxed mb-8"
              delay={20}
              duration={0.8}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
            
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="w-2 h-2 rounded-full bg-pink-400 opacity-40" />
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-rose-400 opacity-40" />
              <div className="w-2 h-2 rounded-full bg-rose-400 opacity-50" />
              <div className="h-px w-16 bg-gradient-to-r from-rose-400 to-pink-400 opacity-40" />
              <div className="w-2 h-2 rounded-full bg-pink-300 opacity-40" />
            </div>

            <SplitText
              text="We empower Gen Z creators, aspiring influencers, and micro-creators to automate smarter and create freely, helping them reach the right audience with AI-optimized strategies tailored to their unique niche."
              tag="p"
              className="text-lg text-gray-700 leading-relaxed"
              delay={20}
              duration={0.8}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-12">
            <SplitText
              text="How InfluenzAI Works"
              tag="h3"
              className="text-4xl text-gray-900 mb-4"
              delay={40}
              duration={0.8}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="about-card group bg-white rounded-3xl p-10 shadow-lg hover:scale-110 hover:shadow-3xl transition-all duration-500 cursor-pointer">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-pink-200 to-rose-200 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              <div className="absolute -inset-0.5 rounded-3xl border-2 border-pink-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pink-300/50 transition-all duration-500">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-300 to-rose-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
                <Target className="w-8 h-8 text-white relative z-10" />
              </div>
              <h4 className="text-2xl text-gray-900 mb-3">Smart Targeting</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our AI analyzes your content and audience to identify the perfect posting times, hashtags, and strategies that maximize engagement and reach.
              </p>
            </div>

            <div className="about-card group bg-white rounded-3xl p-10 shadow-lg hover:scale-110 hover:shadow-3xl transition-all duration-500 cursor-pointer">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-rose-200 to-pink-200 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              <div className="absolute -inset-0.5 rounded-3xl border-2 border-rose-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-rose-300/50 transition-all duration-500">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-rose-300 to-pink-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
                <Zap className="w-8 h-8 text-white relative z-10" />
              </div>
              <h4 className="text-2xl text-gray-900 mb-3">Automation Power</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Automate repetitive tasks like scheduling posts, responding to comments, and tracking analytics. Reclaim hours every week to focus on what matters most.
              </p>
            </div>

            <div className="about-card group bg-white rounded-3xl p-10 shadow-lg hover:scale-110 hover:shadow-3xl transition-all duration-500 cursor-pointer">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-pink-200 to-rose-200 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              <div className="absolute -inset-0.5 rounded-3xl border-2 border-pink-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pink-300/50 transition-all duration-500">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-300 to-rose-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
                <Sparkles className="w-8 h-8 text-white relative z-10" />
              </div>
              <h4 className="text-2xl text-gray-900 mb-3">Creative Freedom</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                With the boring stuff handled, you can focus entirely on creating amazing content that truly resonates with your audience and showcases your unique voice.
              </p>
            </div>

            <div className="about-card group bg-white rounded-3xl p-10 shadow-lg hover:scale-110 hover:shadow-3xl transition-all duration-500 cursor-pointer">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-rose-200 to-pink-200 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              <div className="absolute -inset-0.5 rounded-3xl border-2 border-rose-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-rose-300/50 transition-all duration-500">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-rose-300 to-pink-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
                <TrendingUp className="w-8 h-8 text-white relative z-10" />
              </div>
              <h4 className="text-2xl text-gray-900 mb-3">Consistent Growth</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Stay consistent with your posting schedule and watch your audience grow. Our platform helps you maintain momentum and build lasting connections.
              </p>
            </div>
          </div>
        </div>

        <div className="about-services-bg bg-gradient-to-br from-pink-50 via-rose-50 to-white rounded-[3rem] p-16 shadow-xl transition-all duration-700">
          <div className="text-center mb-12">
            <SplitText
              text="Our Services"
              tag="h3"
              className="text-4xl text-gray-900 mb-4"
              delay={40}
              duration={0.8}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
            <p className="text-xl text-gray-700">Everything you need to succeed as a creator</p>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="about-service-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
              <div>
                <h5 className="text-lg text-gray-900 mb-1">Auto-Schedule Posts</h5>
                <p className="text-gray-600">Plan your content calendar weeks ahead with AI-powered optimal timing</p>
              </div>
            </div>

            <div className="about-service-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
              <div>
                <h5 className="text-lg text-gray-900 mb-1">Smart Analytics</h5>
                <p className="text-gray-600">Get AI-powered insights on what works and track growth in real-time</p>
              </div>
            </div>

            <div className="about-service-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
              <div>
                <h5 className="text-lg text-gray-900 mb-1">AI-Optimized Hashtags</h5>
                <p className="text-gray-600">Reach the right audience with intelligent hashtag recommendations</p>
              </div>
            </div>

            <div className="about-service-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
              <div>
                <h5 className="text-lg text-gray-900 mb-1">Caption Generation</h5>
                <p className="text-gray-600">Create engaging captions tailored to your brand voice and audience</p>
              </div>
            </div>

            <div className="about-service-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
              <div>
                <h5 className="text-lg text-gray-900 mb-1">Audience Insights</h5>
                <p className="text-gray-600">Understand your followers' behavior and preferences with deep analytics</p>
              </div>
            </div>

            <div className="about-service-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
              <div>
                <h5 className="text-lg text-gray-900 mb-1">24/7 Support</h5>
                <p className="text-gray-600">AI + human experts ready to help you succeed at any time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="about-quote-card inline-block bg-white px-12 py-8 rounded-full shadow-2xl transition-all duration-700">
            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 italic">
              "Create More. Stress Less."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
