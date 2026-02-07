import React from 'react';

export const Dashboard: React.FC = () => {
    return (
        <div className="bg-slate-900 text-green-400 p-4 font-mono h-full w-full">
            <h2 className="text-xl border-b border-green-800 pb-2 mb-4">MALL OPERATIONS CENTER</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="border border-green-900 p-2">
                    <h3 className="text-sm text-gray-400">STATUS</h3>
                    <p className="text-2xl animate-pulse">LIVE - MONITORING</p>
                </div>
                <div className="border border-green-900 p-2">
                    <h3 className="text-sm text-gray-400">REVENUE (EST)</h3>
                    <p className="text-2xl">$0.00</p>
                </div>
            </div>
        </div>
    );
};
