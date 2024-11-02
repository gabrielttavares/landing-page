// src/components/LandingPage.tsx
import { motion } from 'framer-motion';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export default function LandingPage() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:gabrieltxtavares@gmail.com';
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#000A14] flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[#152D3C] rotate-45 transform origin-top-left"></div>
                <div className="absolute inset-0 bg-[#2A5A70] rotate-45 transform origin-bottom-right"></div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-[#152D3C] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A5A70] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E0D0A8] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6 py-12 bg-[#001F3F]/40 backdrop-blur-sm rounded-lg shadow-xl"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-[#E0D0A8] mb-4 tracking-tight font-['Montserrat']"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Gabriel Tavares
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-3xl text-[#90C0D8] mb-8 tracking-wide font-['Open_Sans']"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Software Developer
                </motion.h2>

                <motion.div
                    className="flex justify-center space-x-6 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.a
                        href="https://www.linkedin.com/in/gabrielttavares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E0D0A8] hover:text-[#5A8AA0] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a
                        href="https://github.com/gabrielttavares"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E0D0A8] hover:text-[#5A8AA0] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <GitHubIcon />
                    </motion.a>

                    <motion.a
                        href="https://wa.link/9hr6b5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E0D0A8] hover:text-[#5A8AA0] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <WhatsAppIcon />
                    </motion.a>
                </motion.div>

                <motion.button
                    onClick={handleEmailClick}
                    className="mt-12 px-8 py-3 bg-[#152D3C] text-[#E0D0A8] rounded-full text-lg font-semibold hover:bg-[#2A5A70] transition-all duration-300 flex items-center justify-center mx-auto space-x-2 group font-['Open_Sans']"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Get In Touch</span>
                    <div className="ml-2 group-hover:translate-x-1 transition-transform">
                        <EmailIcon />
                    </div>
                </motion.button>
            </motion.div>
        </div>
    );
}
