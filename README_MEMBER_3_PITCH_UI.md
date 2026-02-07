# README - MEMBER 3 (Pitch, UI Polish & Narration)

**Role:** The Closer / Pitch Master
**Access Level:** `/members/member3_pitch_ui` ONLY (read/write), `/frontend-shell` (read-only)

## What You Build

You are responsible for the **Product Feel**. When the Judges see the UI, they must instantly understand the value.
-   **Slides:** No separate PPT! The slide deck *is* built into the app (e.g., a modal overlay or special route `/pitch`).
-   **Demo Narration:** You write and own the script.
-   **UI Polish:** Ensure fonts, capitalization, and sponsor mentions are perfect.
-   **Control Panel:** Build a simple "Wizard" interface for us to trigger events manually if the live audio fails.

## Exact Folder You Can Touch

You work **exclusively** here:
`/members/member3_pitch_ui`

You may create subfolders:
-   `/slides`
-   `/wizard`
-   `/assets` (Images, logos)

## What NOT to Change (Explicit List)

-   `/core` (Never touch the AI pipeline)
-   `package.json` (Request dependencies from the Lead)
-   `tsconfig.json`
-   `/frontend-shell/shared-types` (If you need types, ask the Lead to update the contract)

## Slides + Demo UI Scope

Your `/pitch` route should contain:
1.  **Welcome Screen:** "Voice2Ad: Listen. Think. Act."
2.  **Problem Slide:** Static image or CSS animation showing "Dead Air = Lost Revenue."
3.  **Solution Slide:** Diagram of the AI pipeline (use the Mermaid one from the report).
4.  **The Demo Button:** A big, beautiful "Start Live Demo" button that transitions to the main app view.

## No Backend Access Rule

You cannot call the backend directly. You only interact with:
-   The `WizardController` component provided by the Lead.
-   The global `AppState` store (read-only).

## Copywriting Tone

-   **Bold & Urgent:** "Instant Revenue," "Zero Latency," "Safety First."
-   **Professional:** No typos. Use Title Case for headers.
-   **Technical but clear:** "Semantic Analysis," not "Reading thoughts."

## Sponsor Mentions Checklist

You **MUST** include logos/shoutouts for:
-   [ ] **MongoDB:** "Powered by Atlas Vector Search"
-   [ ] **OpenAI:** "Intelligence by GPT-4o"
-   [ ] **Stripe:** "Transactions secured by Stripe Connect"
-   [ ] **Auth0:** "Identity Managed by Auth0"

## Demo Narration Script Responsibilities

You will write the script and **rehearse it** with the team.
-   **0:00-0:30:** Intro & Problem.
-   **0:30-1:00:** Tech Architecture (Why it's hard).
-   **1:00-2:30:** The Live Demo (You narrate while Lead operates).
-   **2:30-3:00:** Future & Closing.

**If the demo fails, YOU keep talking while Lead fixes it.**
