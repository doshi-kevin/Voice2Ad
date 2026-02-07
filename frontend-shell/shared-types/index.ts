export type IntentType = 'EMERGENCY' | 'PROMOTION' | 'ANNOUNCEMENT' | 'AMBIENT';

export interface DedalusState {
    currentIntent: IntentType;
    confidenceScore: number;
    detectedText: string;
    isProcessing: boolean;
    visualMode: 'IDLE' | 'AD' | 'ALERT';
}

export interface AdPayload {
    brandDetails: {
        name: string;
        colors: string[];
    };
    durationMs: number;
    triggerPhrase: string;
}
