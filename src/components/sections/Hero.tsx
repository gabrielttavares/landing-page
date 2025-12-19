import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp } from '../../utils/animations';

export default function Hero() {
    const { hero } = content;
    
    return (
        <section className="px-6 py-12 md:py-24 max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight font-serif">
                    {hero.title} <span className="text-slate-500">{hero.highlight}</span>.
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                    {hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="#contato" 
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    >
                        {hero.cta}
                    </a>
                    <a 
                        href="#experiencia" 
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all"
                    >
                        {hero.secondaryCta}
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

