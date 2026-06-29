import { RemoteElement } from "@/shared/mfe";
import { findMfe } from "@/shared/mfe/registry";
import { Portfolio as PortfolioFallback } from "../../portfolio_fallback";

// Renders the REA microfrontend, degrading to the in-repo section if the registry
// entry is missing or the remote fails to load. Both carry id="portfolio" (only one
// renders at a time), so the hero CTA's scroll always lands — no extra id wrapper.
export async function Portfolio() {
  const entry = await findMfe("real-estate.overview");
  if (!entry) return <PortfolioFallback />;
  return (
    <RemoteElement
      tag={entry.tag}
      scriptUrl={entry.scriptUrl}
      fallback={<PortfolioFallback />}
    />
  );
}
