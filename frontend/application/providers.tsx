"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "@/features/error-monitoring";
import { Toaster, TooltipProvider } from "@evinvest/uikit";

// Dark-only: theme is forced, not switchable.
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
