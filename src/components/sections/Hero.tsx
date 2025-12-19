import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp } from '../../utils/animations';
import CodeDeco from '../decoration/CodeDeco';

export default function Hero() {
    const { hero } = content;
    
    return (
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
             {/* Tech Grid Background with Radial Mask */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
            
            {/* Floating Code Decoration */}
            <CodeDeco />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div {...fadeInUp}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1] font-serif">
                        {hero.title} <span className="text-slate-500 italic font-serif">{hero.highlight}</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        {hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contato" 
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:scale-105 hover:shadow-lg"
                        >
                            {hero.cta}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
