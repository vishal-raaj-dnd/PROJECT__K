'use client';

import React from 'react';

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-110" // Scaled to hide watermark/logo
                style={{ filter: 'brightness(0.7)' }} // Slightly darkened for text readability
            >
                <source src="/global-bg-new.mp4" type="video/mp4" />
            </video>

            {/* Gradient Vignette for focus */}
            <div className="absolute inset-0 z-20 bg-radial-gradient(circle, transparent 60%, black 100%) opacity-50 mix-blend-multiply" />
        </div>
    );
}
