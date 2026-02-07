export const CONFIG = {
  APP_NAME: 'Voice2Ad',
  VERSION: '0.1.0-alpha',
  API_ENDPOINT: process.env.VITE_API_ENDPOINT || 'http://localhost:8000',
  FLAGS: {
    USE_MOCK_DATA: true,
    ENABLE_DEBUG_LOGS: true,
  }
};
