import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import TargetAudience from './components/sections/TargetAudience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 relative">
             {/* Global Tech Grid Background */}
             <div className="fixed inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none z-0 opacity-60" />

            <Header />
            <main className="pt-24 pb-12 relative z-10">
                <Hero />
                <About />
                <Services />
                <Experience />
                <TargetAudience />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}
