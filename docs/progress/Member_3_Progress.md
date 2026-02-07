# Progress Log - Member 3 (Pitch / UI Polish)

**INSTRUCTIONS:**
- Update this file **EVERY PUSH**.
- The Lead Engineer must be able to read this in **2 minutes** to understand what changed.
- Use the template below for each entry.

---

## [Date: YYYY-MM-DD] - [Brief Title of Change]

**Files Touched:**
- `src/members/member3_pitch_ui/components/LandingHero.tsx` (New animated title)
- `src/members/member3_pitch_ui/styles/fonts.css` (Added Google Font: Manrope)

**What Was Added:**
- Created the main "Start Demo" landing page with a fade-in animation.
- Restyled all `<h1>` tags to use the new Manrope bold font.

**How It Works:**
- The LandingHero uses `framer-motion` for sequence entrance animations.
- The button calls `useAppFlow(state => state.startDemo())`.

**Known Bugs / TODOs:**
- The background gradient on dark mode looks slightly banded on retina screens.
- Need to align the "Powered by OpenAI" logo properly on mobile.

**Assumptions Made:**
- The demo starts in `IDLE` mode. If it starts in `AD_PLAYING`, the landing page flash might be jarring.

**How to Test It:**
1. Run `npm run dev`.
2. Visit `/` root route.
3. Verify the "Start" button pulses every 2 seconds.
4. Click it and confirm it navigates to `/app`.
