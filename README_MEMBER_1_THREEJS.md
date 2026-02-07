# README - MEMBER 1 (Dynamic Visualization)

**Role:** The Visualizer (Three.js / WebGL / R3F)
**Access Level:** `/members/member1_threejs` ONLY (read/write), `/frontend-shell` (read-only)

## What You Build

You are responsible for the **Visual Act**. When the core AI decides what to show, YOU make it look incredible.
-   **Scene Graph**: The primary 3D canvas and its objects.
-   **Shaders**: Custom GLSL effects for transitions (ripple, dissolve, pixelate).
-   **Animations**: The "morph" from idle state to ad state.
-   **Performance**: Ensuring the GPU doesn't crash the browser.

## Exact Folder You Can Touch

You work **exclusively** here:
`/members/member1_threejs`

You may create subfolders:
-   `/components`
-   `/shaders`
-   `/assets` (GLB models, textures)

## What NOT to Change (Explicit List)

-   `/core` (Never touch the AI pipeline)
-   `package.json` (Request dependencies from the Lead)
-   `tsconfig.json`
-   `/frontend-shell/shared-types` (If you need types, ask the Lead to update the contract)

## Data Format You Receive

The Lead will pass data to your main component via props or a Zustand store subscription.

**Contract (Example):**
```typescript
interface VisualState {
  mode: 'IDLE' | 'AD' | 'EMERGENCY';
  adDetails?: {
    brand: string;      // e.g. "Nike"
    color: string;      // e.g. "#FF0000"
    textureUrl: string; // "https://..."
  };
  urgencyLevel: number; // 0-10
}
```

## How to Preview Your Work Locally

You do not need the full backend running.
1.  Use the provided **Mock Harness** in `/frontend-shell/api-client/mock-visual-state.ts`.
2.  Import your `MainScene.tsx` into a simple CRA/Vite sandbox if necessary, or use the project's dev server which mocks the backend by default.

## How to Submit Updates Without Conflicts

1.  **Work:** Commit frequently to your own branch `feat/member1-visuals`.
2.  **Verify:** Ensure your component exports correctly and renders without errors.
3.  **PR:** Open a Pull Request merging YOUR branch into `develop`.
4.  **Description:** List exactly which files changed.
5.  **Review:** Wait for the Lead to merge. DO NOT MERGE YOURSELF.
