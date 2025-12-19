import React from 'react';
import { motion } from 'framer-motion';

const snippets = [
    "{ ...props }",
    "async function()",
    "<Component />",
    "npm install",
    "git push",
    "const [state, setState]",
    "=>",
    "if (loading) return",
    "import { motion }",
    "export default"
];

export default function CodeDeco() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {snippets.map((snippet, index) => (
                <motion.div
                    key={index}
                    className="absolute text-sm md:text-base font-mono font-medium opacity-10"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        color: ['#0d9488', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)],
                        rotate: Math.random() * 20 - 10
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                        opacity: [0.05, 0.15, 0.05],
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 5
                    }}
                >
                    {snippet}
                </motion.div>
            ))}
        </div>
    );
}

