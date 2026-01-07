import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, CheckCircle2, Lightbulb } from 'lucide-react';
import { models } from './data';

function App() {
  const [activeId, setActiveId] = useState(models[0].id);

  const activeModel = models.find((m) => m.id === activeId);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-indigo-500/30">
      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        
        {/* Sidebar / Navigation */}
        <aside className="w-full lg:w-80 bg-neutral-900/50 border-r border-neutral-800 flex-shrink-0 flex flex-col backdrop-blur-sm z-20">
          <div className="p-6 border-b border-neutral-800">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Nexus
            </h1>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Research & Applications</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveId(model.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left relative ${
                  activeId === model.id
                    ? 'bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                }`}
              >
                <model.icon className={`w-5 h-5 ${activeId === model.id ? 'text-indigo-400' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                <span className="font-medium text-sm">{model.title}</span>
                {activeId === model.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border border-indigo-500/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
          
          <div className="p-4 border-t border-neutral-800">
            <div className="text-xs text-neutral-600 text-center">
              Updated: Jan 6, 2026
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-neutral-950 to-neutral-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-4xl mx-auto p-6 lg:p-12 space-y-12"
            >
              
              {/* Header Section */}
              <header className="space-y-4">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wide uppercase">Latest Update: {activeModel.updated}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  {activeModel.title}
                </h2>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                  {activeModel.summary}
                </p>
              </header>

              <hr className="border-neutral-800/50" />

              {/* Video Section */}
              {activeModel.video && (
                <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
                  <video 
                    src={activeModel.video} 
                    controls 
                    className="w-full h-auto aspect-video"
                  />
                </div>
              )}

              {/* Image Gallery Section */}
              {activeModel.images && activeModel.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeModel.images.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-neutral-800 shadow-xl bg-black/50">
                      <img 
                        src={img} 
                        alt={`${activeModel.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Latest Research Column */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-200">Key Research Points</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {activeModel.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-neutral-300 text-sm leading-relaxed group">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 group-hover:bg-emerald-400 transition-colors flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModel.sources.map((source, idx) => (
                        <a
                          key={idx}
                          href={source}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 hover:border-indigo-500/30 hover:text-indigo-300 text-xs text-neutral-500 transition-all truncate max-w-xs"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span className="truncate">Source {idx + 1}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Agency Applications Column */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-200">Agency Applications</h3>
                  </div>

                  <div className="grid gap-4">
                    {activeModel.applications.map((app, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 hover:border-amber-500/20 hover:bg-neutral-900/60 transition-all group"
                      >
                        <h4 className="font-semibold text-neutral-200 text-sm mb-1 group-hover:text-amber-400 transition-colors">
                          {app.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {app.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;