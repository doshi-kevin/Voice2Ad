# Progress Log - Member 2 (Dashboard / Analytics)

**INSTRUCTIONS:**
- Update this file **EVERY PUSH**.
- The Lead Engineer must be able to read this in **2 minutes** to understand what changed.
- Use the template below for each entry.

---

## [Date: YYYY-MM-DD] - [Brief Title of Change]

**Files Touched:**
- `src/members/member2_dashboard/components/RevenueChart.tsx` (Fixed axis scaling)
- `src/members/member2_dashboard/hooks/useMetrics.ts` (Added debounce)

**What Was Added:**
- Implemented real-time chart updating using `recharts`.
- Connected the `useMetrics` hook to the global state store `revenue` slice.

**How It Works:**
- The `RevenueChart` rerenders only when `metrics.totalRevenue` changes in state.
- Added a `throttle` of 500ms to prevent React re-render thrashing.

**Known Bugs / TODOs:**
- The Y-axis flickers when values jump from 100 to 1000.
- Tooltips are overlapping on smaller screens.

**Assumptions Made:**
- Revenue is a positive integer. No negative bidding logic added yet.

**How to Test It:**
1. Run `npm run dev`.
2. Go to `/dashboard`.
3. In console run `window.appState.addRevenue(50)`.
4. Verify the line chart ticks up smoothly.
