import { Sparkles, Zap, Brain, Rocket, Clock, Heart } from 'lucide-react';

export function InstagramPost() {
  return (
    <div 
      className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-pink-500 overflow-hidden"
      style={{ width: '1080px', height: '1080px' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-between p-16">
        
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
          <div className="text-white">
            <h1 className="text-4xl tracking-tight">InfluenzAI</h1>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl">
          
          <h2 className="text-white text-8xl leading-tight mb-8">
            Stop Grinding.
            <br />
            Start <span className="italic text-yellow-300">Creating</span>.
          </h2>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="col-start-2 row-start-2 w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500" />
            </div>
            
            <div className="w-24 h-24 bg-yellow-300 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6">
              <Zap className="w-12 h-12 text-pink-600" />
            </div>
            <div className="w-24 h-24 bg-blue-400 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div className="w-24 h-24 bg-pink-400 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-3">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <div className="w-24 h-24 bg-pink-400 rounded-2xl flex items-center justify-center shadow-xl transform rotate-6">
              <Clock className="w-12 h-12 text-white" />
            </div>
            <div className="w-24 h-24 bg-rose-400 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          <p className="text-white text-3xl max-w-3xl mb-6 opacity-95">
            AI handles the boring stuff. You focus on <span className="text-yellow-300">what you love</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-white text-2xl border-2 border-white/30">
              ✨ Auto-schedule posts
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-white text-2xl border-2 border-white/30">
              📊 Smart analytics
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-white text-2xl border-2 border-white/30">
              🚀 Grow faster
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-white px-16 py-6 rounded-full shadow-2xl mb-4">
            <p className="text-pink-600 text-5xl tracking-tight">
              Create More. Stress Less.
            </p>
          </div>
          <p className="text-white/80 text-2xl">
            Join 10k+ creators automating smarter ✨
          </p>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}
