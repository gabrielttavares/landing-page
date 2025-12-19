import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Experience() {
    const { experience } = content;

    return (
        <section id="experiencia" className="px-6 py-24 bg-slate-900 text-slate-50 overflow-hidden relative">
             {/* Tech Grid Background (Light Opacity) */}
             <div className="absolute inset-0 bg-grid-slate-100 opacity-5 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2 
                    {...fadeInUp} 
                    className="text-4xl md:text-5xl font-bold mb-20 text-center font-serif tracking-tight"
                >
                    {experience.title}
                </motion.h2>
                
                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent"
                >
                    {experience.items.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={fadeInUp} 
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                             {/* Timeline Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 group-hover:bg-teal-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                                <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-white transition-colors" />
                            </div>

                             {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-teal-500/30 transition-all duration-300 hover:bg-slate-800/80">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-serif">{item.title}</h3>
                                <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-teal-300 bg-teal-500/10 rounded-full border border-teal-500/20">
                                    {item.role}
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
