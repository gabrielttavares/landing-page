import React from 'react';
import { content } from '../../data/content';
import { LinkedInIcon, GitHubIcon, WhatsAppIcon, EmailIcon } from '../icons/Icons';
import CodeDeco from '../decoration/CodeDeco';

export default function Contact() {
    const { contact } = content;

    return (
        <section id="contato" className="relative px-6 py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
             {/* Tech Grid Background (Light Opacity) */}
             <div className="absolute inset-0 bg-grid-slate-100 opacity-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
             
             {/* Floating Code Decoration */}
             <CodeDeco />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif tracking-tight">{contact.title}</h2>
                <p className="text-slate-600 mb-12 text-lg">
                    {contact.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <a 
                        href={contact.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
                    >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                    </a>
                    <a 
                        href={contact.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all shadow-sm"
                    >
                        <GitHubIcon />
                        <span>GitHub</span>
                    </a>
                    <a 
                        href={contact.social.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-green-600 hover:text-green-600 transition-all shadow-sm"
                    >
                        <WhatsAppIcon />
                        <span>WhatsApp</span>
                    </a>
                </div>

                <a 
                    href={`mailto:${contact.social.email}`}
                    className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-600 transition-colors text-lg"
                >
                    <EmailIcon />
                    {contact.social.email}
                </a>
            </div>
        </section>
    );
}

