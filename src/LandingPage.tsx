import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import TargetAudience from './components/sections/TargetAudience';
import Methodology from './components/sections/Methodology';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900">
            <Header />
            <main className="pt-24 pb-12">
                <Hero />
                <About />
                <Services />
                <Experience />
                <TargetAudience />
                <Methodology />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}
