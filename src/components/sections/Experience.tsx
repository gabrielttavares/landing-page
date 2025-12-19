import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp } from '../../utils/animations';

export default function Experience() {
    const { experience } = content;

    return (
        <section id="experiencia" className="px-6 py-16 bg-slate-900 text-slate-50">
            <div className="max-w-4xl mx-auto">
                <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 border-b border-slate-700 pb-4">
                    {experience.title}
                </motion.h2>
                
                <div className="space-y-12">
                    {experience.items.map((item, index) => (
                        <motion.div key={index} {...fadeInUp} className="group">
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 mb-4">{item.role}</p>
                            <p className="text-slate-300 leading-relaxed max-w-3xl">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

