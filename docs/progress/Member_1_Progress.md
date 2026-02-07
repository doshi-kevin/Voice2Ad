# Progress Log - Member 1 (Three.js / Visualization)

**INSTRUCTIONS:**
- Update this file **EVERY PUSH**.
- The Lead Engineer must be able to read this in **2 minutes** to understand what changed.
- Use the template below for each entry.

---

## [Date: YYYY-MM-DD] - [Brief Title of Change]

**Files Touched:**
- `src/members/member1_threejs/components/MainScene.tsx` (Added ripple shader)
- `src/members/member1_threejs/shaders/Distortion.glsl` (new file)

**What Was Added:**
- Implemented a vertex displacement shader that triggers when `adState === 'transition'`.
- Added a fallback texture for when the GLB model fails to load.

**How It Works:**
- The `MainScene` subscribes to the global store via `useStore(state => state.visualMode)`.
- When mode shifts, `uTime` uniform starts incrementing in the shader loop.

**Known Bugs / TODOs:**
- Shadow mapping is flickering on mobile viewports.
- Needs optimization: currently drawing 20k polys, target is <10k.

**Assumptions Made:**
- The backend sends a valid URL for the texture. If it sends null, I default to a placeholder.

**How to Test It:**
1. Run `npm run dev`.
2. Open `http://localhost:5173`.
3. Click "Simulate Ad" in the debug panel.
4. Watch the center screen warp and change texture.
