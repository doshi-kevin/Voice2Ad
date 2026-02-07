import React, { useState } from 'react';
import { PitchDeck } from '@members/member3_pitch_ui/PitchDeck';
import { Dashboard } from '@members/member2_dashboard/Dashboard';
import { Canvas } from '@react-three/fiber';
import { MainScene } from '@members/member1_threejs/MainScene';

// Lead: Only I touch this layout.
// Members should call for updates if they need structural changes.

const App: React.FC = () => {
    const [view, setView] = useState<'pitch' | 'demo'>('pitch');

    if (view === 'pitch') {
        return (
            <div className="w-full h-screen" onClick={() => setView('demo')}>
                <PitchDeck />
                <div className="fixed bottom-4 right-4 text-xs text-gray-700 opacity-20">
                    (Click anywhere to start demo)
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen flex bg-black">
            {/* Visual Canvas (Member 1) */}
            <div className="flex-grow h-full relative">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <MainScene />
                </Canvas>

                {/* Overlay UI Layer */}
                <div className="absolute top-4 left-4 z-10 text-white font-mono text-xs opacity-50">
                    VOICE2AD.SYSTEM_ACTIVE
                </div>
            </div>

            {/* Dashboard Panel (Member 2) */}
            <div className="w-1/3 h-full border-l border-zinc-800">
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
