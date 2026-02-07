# README - MEMBER 2 (Dashboards & Analytics)

**Role:** The Quant (MallOps Dashboard)
**Access Level:** `/members/member2_dashboard` ONLY (read/write), `/frontend-shell` (read-only)

## What You Build

You are building the **Truth Center**. When the Mall Manager looks at the screen, they need to see:
-   **Live Logs:** "Triggered at 14:02: Sale - Nike"
-   **Revenue Ticker:** "Daily Revenue: $4,512" (Fake, but plausible)
-   **Audio Levels:** A visualizer showing noise/occupancy.
-   **Emergency Status:** Green/Yellow/Red indicator.

## Exact Folder You Can Touch

You work **exclusively** here:
`/members/member2_dashboard`

You may create subfolders:
-   `/components`
-   `/charts`
-   `/styles`

## What NOT to Change (Explicit List)

-   `/core` (Never touch the AI pipeline)
-   `package.json` (Request dependencies from the Lead)
-   `tsconfig.json`
-   `/frontend-shell/shared-types` (If you need types, ask the Lead to update the contract)

## Metrics to Visualize

1.  **"Impressions":** Number of times the screen has changed.
2.  **"Conversion Intent":** Dedalus classifier confidence (0-100%).
3.  **"Revenue per Second":** Simulated auction value.
4.  **"Latency":** Time from microphone word to screen update (ms).

## Fake vs Real Data Flags

Your dashboard must support a `useMockData` prop.
-   **If `true`:** Generate random but realistic spikes (e.g. sales during lunch hour).
-   **If `false`:** Subscribe to the `DedalusState` store.

## Chart Libraries Allowed

Since we are using Three.js elsewhere, do **NOT** use heavy D3 wrappers unless necessary to keep bundle size down.
Suggested:
-   **Recharts:** Lightweight, React-native.
-   **Visx:** Low-level, customizable.

## Update Frequency Rules

The dashboard should update at:
-   **Real-time:** For status indicators (Emergency/Ad Mode).
-   **Every 5s:** For aggregated revenue stats.
-   **Every 100ms:** For the audio waveform if present.

## Styling Expectations

It must look like a **Command Center** (Cyberpunk/SCIFI aesthetic).
-   Dark Mode by default.
-   Neon accents (Green/Cyan/Amber).
-   Monospace fonts for data (e.g., recursive, jetbrains mono).

## Error Handling Expectations

If the backend disconnects:
-   Show a "CONNECTION LOST - RETRYING..." overlay.
-   Do **NOT** crash the app. The visualization must continue running on cached data.
