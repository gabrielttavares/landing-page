import React from 'react';
import { content } from '../../data/content';

export default function About() {
    const { about } = content;

    return (
        <section className="px-6 py-12 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
                <span className="font-mono text-6xl font-bold text-slate-900">{`{ }`}</span>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:items-center text-center md:text-left relative z-10">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden relative border-2 border-white shadow-sm">
                     <img 
                        src={about.image} 
                        alt="Gabriel Tavares" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                     />
                </div>
                <div className="flex-1">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono text-teal-600">&lt;Sobre Mim /&gt;</h2>
                    <p className="text-lg text-slate-800 leading-relaxed">
                        Sou um <span className="px-1 py-0.5 rounded bg-slate-200 text-slate-900 font-mono text-base">desenvolvedor de software</span> com experiência em grandes players do mercado financeiro e governamental. 
                        Minha abordagem é técnica e orientada a negócios: escrevo <span className="px-1 py-0.5 rounded bg-slate-200 text-teal-700 font-mono text-base">código</span> que é fácil de manter, <span className="px-1 py-0.5 rounded bg-slate-200 text-purple-700 font-mono text-base">escalável</span> e que resolve problemas reais.
                    </p>
                </div>
            </div>
        </section>
    );
}

