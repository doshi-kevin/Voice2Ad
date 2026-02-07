# README - LEAD ENGINEER

**Role:** Guardian of the Core / System Architect
**Access Level:** Full Access (Root, `/core`, `/config`)

## Ownership Boundaries

You are the **ONLY** person allowed to modify anything in the `/core` directory. This includes:
-   Actual AI logic (Whisper, LLM chains)
-   The central `Dedalus` agent state machine
-   Payment processing logic (Stripe wrappers)
-   Global configuration files (`.env`, `constants.ts`)

**Why?**
The hackathon deadline is tight. If member code breaks the core loop, the entire demo fails. You provide a stable API that they consume.

## Dependency Control Rules

1.  **Package Managers:** We use `pnpm` exclusively. No `npm` or `yarn`.
2.  **Lockfile:** The `pnpm-lock.yaml` is **YOUR** responsibility. If a conflict arises, **YOU** resolve it.
3.  **New Packages:** Members must request new packages via the GitHub Issue tracker or a dedicated Slack channel. You vet them for size and compatibility.

## Version Locking Strategy

*   **Node:** `20.x` (LTS)
*   **React:** `18.2.0`
*   **Three.js:** `0.150.0` (Strictly enforced to prevent shader breaks)

## How to Safely Integrate Member Code

The `/members` directory is a sandbox.
1.  **Review:** Check their PRs for *logic* errors, not just style.
2.  **Import:** You are the one who imports their finished components into the main `App.tsx` or `Layout.tsx`.
3.  **Wrappers:** Wrap their components in `ErrorBoundary` blocks. If their visualization crashes, the rest of the app must stay alive.

## Emergency Rollback Plan

If the demo breaks 15 minutes before the presentation:
1.  **Checkout:** `git checkout main-stable` (Tag this branch 1 hour before demo).
2.  **Mock Data:** Toggle `USE_MOCK_DATA = true` in `/core/config/flags.ts`. This bypasses the live AI and uses a pre-recorded JSON sequence.
3.  **Hard Refresh:** Clear browser cache.

## Demo-Day Checklist

-   [ ] **Server:** Ensure the Python backend (if used for AI) is running and accessible.
-   [ ] **API Keys:** Verify OpenAI/Anthropic/Stripe keys are loaded and have credits.
-   [ ] **Audio:** Test the microphone input levels in the actual demo environment.
-   [ ] **Screen:** Verify the projector/screen resolution matches the Three.js canvas aspect ratio.
-   [ ] **Backup:** Have a video recording of the working demo ready to play if live code fails.
