import React from 'react';
import { content } from '../../data/content';

export default function Footer() {
    const { footer } = content;

    return (
        <footer className="py-8 text-center text-slate-400 text-sm bg-white border-t border-slate-100">
            <p>{footer.copyright}</p>
        </footer>
    );
}



