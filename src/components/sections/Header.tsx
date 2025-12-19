import React from 'react';

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-lg tracking-tight text-slate-900">Gabriel Tavares</span>
                <nav className="flex items-center gap-4">
                    <a href="#contato" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Fale Comigo
                    </a>
                </nav>
            </div>
        </header>
    );
}

