// Server/edge Sentry bootstrap. Stays on @sentry/nextjs directly (not the
// vendor-neutral lib) so withSentryConfig's source-map frame rewriting and
// Next-aware request tracing survive.
import * as Sentry from "@sentry/nextjs";
import { defaultTracesSampleRate } from "@evinvest/error-monitoring";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.APP_ENV ?? "development",
      tracesSampleRate: defaultTracesSampleRate(process.env.NODE_ENV),
    });
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.APP_ENV ?? "development",
      tracesSampleRate: 0,
    });
  }
}

export const onRequestError = Sentry.captureRequestError;
