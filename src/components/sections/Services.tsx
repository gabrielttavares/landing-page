import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp } from '../../utils/animations';

export default function Services() {
    const { services } = content;

    return (
        <section className="px-6 py-16 max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold text-slate-900 mb-10">{services.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.items.map((item, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                                <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                                {item.title}
                            </h3>
                            <p className="text-slate-600 pl-4 border-l-2 border-slate-100">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

