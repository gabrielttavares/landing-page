import React from 'react';
import { content } from '../../data/content';

export default function About() {
    const { about } = content;

    return (
        <section className="px-6 py-12 bg-slate-50 border-y border-slate-100">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8 md:items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden relative border-2 border-white shadow-sm">
                     <img 
                        src={about.image} 
                        alt="Gabriel Tavares" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                     />
                </div>
                <div className="flex-1">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">{about.title}</h2>
                    <p className="text-lg text-slate-800 leading-relaxed">
                        {about.text}
                    </p>
                </div>
            </div>
        </section>
    );
}

