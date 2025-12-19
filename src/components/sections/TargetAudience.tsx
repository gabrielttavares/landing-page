import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp } from '../../utils/animations';
import { CheckIcon } from '../icons/Icons';
import CodeDeco from '../decoration/CodeDeco';

export default function TargetAudience() {
    const { targetAudience, methodology } = content;

    return (
        <section className="relative px-6 py-20 max-w-7xl mx-auto overflow-hidden">
            {/* Tech Grid Background with Radial Mask - same as Hero */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
            
            {/* Floating Code Decoration */}
            <CodeDeco />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div 
                    {...fadeInUp} 
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden"
                >
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 opacity-80" />

                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-serif tracking-tight">
                            {targetAudience.title}
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
                            {targetAudience.items.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group">
                                    <div className="mt-1 shrink-0 p-1 rounded bg-slate-100 group-hover:bg-blue-100 transition-colors">
                                        <CheckIcon />
                                    </div>
                                    <span className="text-slate-700 font-medium text-base leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Methodology Section Merged */}
                        <div className="border-t border-slate-100 pt-8">
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {methodology.items.map((item, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center font-mono font-bold text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors text-sm">
                                            0{index + 1}
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-snug">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
