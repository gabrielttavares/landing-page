import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { fadeInUp } from '../../utils/animations';
import { CheckIcon } from '../icons/Icons';

export default function TargetAudience() {
    const { targetAudience } = content;

    return (
        <section className="px-6 py-16 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{targetAudience.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {targetAudience.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

