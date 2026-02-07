# Voice2Ad - Hackathon Repository

**Current Status:** [Draft / Development]
**Lead Engineer:** [Your Name]

## 🚨 CRITICAL: READ BEFORE CLONING

This repository follows a **STRICT ISOLATION** policy.
To prevent merge conflicts and ensure our demo works on stage, you are restricted to specific directories.

### 📂 Repository Structure

```text
/
├── core/                   # [READ-ONLY] Shared Logic & AI Pipeline
│   ├── ai_pipeline/        # Whisper + LLM processing
│   ├── dedalus_agent/      # State Machine (The "Brain")
│   ├── payments/           # Stripe / Dummy transaction logic
│   └── config/             # Global constants & feature flags
│
├── frontend-shell/         # [READ-ONLY] The React Host App
│   ├── api-client/         # Mock data & Server types
│   └── shared-types.ts     # The JSON contracts we all agree on
│
├── members/                # [YOUR WORKSPACE]
│   ├── member1_threejs/    # 3D Visuals & Shaders
│   ├── member2_dashboard/  # Analytics Charts
│   └── member3_pitch_ui/   # Slides & Landing Page
│
└── docs/                   # Documentation & Logs
    ├── progress/           # DAILY PROGRESS LOGS (Mandatory)
    └── architecture/       # System diagrams
```

### 👥 Your Role & Rules

identify your role below and **READ YOUR SPECIFIC README FIRST**.

| Role | Responsibility | README |
| :--- | :--- | :--- |
| **Lead Engineer** | Architecture, Core API, Merging PRs | [README_LEAD_ENGINEER.md](./README_LEAD_ENGINEER.md) |
| **Member 1** | Three.js Visuals, Shaders, WebGL | [README_MEMBER_1_THREEJS.md](./README_MEMBER_1_THREEJS.md) |
| **Member 2** | Dashboard, Real-time Charts | [README_MEMBER_2_DASHBOARD.md](./README_MEMBER_2_DASHBOARD.md) |
| **Member 3** | Pitch Deck, UI Polish, Script | [README_MEMBER_3_PITCH_UI.md](./README_MEMBER_3_PITCH_UI.md) |

---

## ⚡ Merge Conflict Prevention (NON-NEGOTIABLE)

1.  **Branch Naming:**
    *   `feat/member1-visuals`
    *   `feat/member2-analytics`
    *   `feat/member3-pitch`
    *   *If you do not follow this, your PR will be closed.*

2.  **Folder Ownership:**
    *   Member 1 touches **ONLY** `/members/member1_threejs`
    *   Member 2 touches **ONLY** `/members/member2_dashboard`
    *   Member 3 touches **ONLY** `/members/member3_pitch_ui`
    *   *If you edit `/core` or `/frontend-shell`, your PR will be closed.*

3.  **Prohibited Actions:**
    *   ❌ Changing `package.json` (Ask Lead First)
    *   ❌ Editing `tsconfig.json`
    *   ❌ Formatting the whole codebase (Only format your folder)

4.  **PR Checklist:**
    *   [ ] My code is 100% inside my folder.
    *   [ ] I have updated my `/docs/progress/Member_X_Progress.md` file.
    *   [ ] I have tested my component in isolation.

---

## 🛡️ Safe Development Guarantees

*   **Dependency Locking:** The Lead Engineer owns `pnpm-lock.yaml`. You cannot break the build for others by adding a random conflicting package.
*   **Environment Variables:** All `.env` variables are read-only for members. If you need a key, ask the Lead to add it to the CI/CD pipeline or share it securely.
*   **Mock Data First:** The `/frontend-shell` provides a Mock Mode. You can build your entire feature without the backend running. This prevents "It works on my machine" issues.

---

## 🎨 Style & Quality Bar

*   **Code Quality:**
    *   No `console.log` in production code. Use the provided logger.
    *   No `any` types in TypeScript. Define your interfaces.
*   **Aesthetics:**
    *   **"Wow" Factor:** We are here to win. If it looks standard, it's not good enough.
    *   **Animation:** Everything must transition smoothly. No jarring cuts.

**[End of General Instructions - Go to your specific README now]**
