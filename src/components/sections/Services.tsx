import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Services() {
    const { services } = content;

    return (
        <section className="px-6 py-24 max-w-7xl mx-auto">
            <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center font-serif tracking-tight">
                    {services.title}
                </motion.h2>

                {/* Technical Grid / Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                    {services.items.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={fadeInUp}
                            className="relative bg-white p-8 md:p-12 hover:bg-slate-50 transition-colors duration-300 group"
                        >
                            {/* Tech Corner Accent */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                <div className="absolute top-4 right-4 text-xs font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                            </div>

                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 font-serif">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <span className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                                        Saiba mais <span className="ml-2">→</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
