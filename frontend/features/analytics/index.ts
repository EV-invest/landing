/**
 * @module features/analytics
 *
 * Product instrumentation — thin app wiring over `@evinvest/analytics`.
 *
 * **Public API** (re-exported from `@evinvest/analytics/react`)
 * - `PostHogProvider` — mount once in the root layout; boots the SDK (lazy,
 *   no-op without `NEXT_PUBLIC_POSTHOG_KEY`) and provides the event sink.
 * - `useCapture()` — strict: returns `capture(event, props)`; throws if no
 *   provider is mounted (use in app code where the provider is guaranteed).
 * - `useAnalytics()` — lenient: same, but no-ops when no provider is mounted
 *   (use in shared islands that may render without one — e.g. `ExperimentTracker`).
 *
 * **For A/B exposure + section CTA tracking**, use `ExperimentTracker` and
 * `useExperimentEvent` from `features/ab-variant`; they route through `capture`
 * and scope the event name and variant automatically.
 *
 * **Rules**
 * - Never import `posthog-js` outside `@evinvest/analytics` — init/consent live there.
 * - Analytics records; it never decides what to render (bucketing = `proxy.ts`).
 * - Client Components only — do not import from Server Components or `next/headers`.
 */
export {
  PostHogProvider,
  useCapture,
  useAnalytics,
} from "@evinvest/analytics/react";
