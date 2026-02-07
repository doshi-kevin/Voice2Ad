import React from 'react';

export const PitchDeck: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-6xl font-black tracking-tighter mb-4">
                Voice<span className="text-indigo-500">2</span>Ad
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl text-center mb-8">
                Turning "Dead Air" into Revenue with Real-Time AI.
            </p>
            <button className="px-8 py-3 bg-indigo-600 rounded-full font-bold hover:bg-indigo-500 transition-all">
                START LIVE DEMO
            </button>
        </div>
    );
};
