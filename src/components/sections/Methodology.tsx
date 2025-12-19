import React from 'react';
import { content } from '../../data/content';

export default function Methodology() {
    const { methodology } = content;

    return (
        <section className="px-6 py-16 max-w-4xl mx-auto border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {methodology.items.map((item, index) => (
                    <div key={index}>
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-slate-900 font-bold">{index + 1}</div>
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

