// Host primitives for mounting microfrontends, never via <iframe>:
// - RemoteElement — a self-registering ESM bundle defining a custom element, mounted
//   in light DOM (Tailwind v4 @property tokens break inside shadow roots).
// - RemoteDocument — a static HTML doc (whitepaper/blog), isolate toggles shadow-root.
// loadRegistry/findMfe are server-only (node:fs) — import from "./registry" directly.
export { RemoteElement } from "./remote-element";
export type { RemoteElementProps } from "./remote-element";
export { RemoteDocument } from "./remote-document";
export type { RemoteDocumentProps } from "./remote-document";
export type { MfeEntry, MfeKind } from "./types";
