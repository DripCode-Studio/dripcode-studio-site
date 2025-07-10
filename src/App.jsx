import { ArrowRight, Zap } from "lucide-react";
function App() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">
              Crafting Digital Excellence
            </span>
          </div>
          <h className="text-6xl md:text-9xl font-bold mb-4 text-center text-white font-geist">
            Drip Code Studios
          </h>
          <p className="text-xl md:text-3xl text-gray-600 mb-8 font-geist ">
            Welcome to Drip Code Studios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="mailto:dripcodestudio@gmail.com"
              target="_blank"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/Lil-Code30?tab=repositories"
              target="_blank"
              className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
