import React from 'react';
import { content } from '../../data/content';

export default function Header() {
    const { contact } = content;

    return (
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-lg tracking-tight text-slate-900">Gabriel Tavares</span>
                <nav className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                        <span>available_for_hire</span>
                    </div>
                    <a 
                        href={contact.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        Fale Diretamente Comigo
                    </a>
                </nav>
            </div>
        </header>
    );
}

