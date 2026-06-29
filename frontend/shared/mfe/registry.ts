// Server-only reader for the microfrontend registry (node:fs). Served openly via
// /api/mfe-registry, so its scriptUrls are public — treat registry edits as code.

import { promises as fs } from "node:fs";
import path from "node:path";

import type { MfeEntry } from "./types";

export async function loadRegistry(): Promise<MfeEntry[]> {
  const file = path.join(process.cwd(), "mfe-registry.json");
  const raw = await fs.readFile(file, "utf8");
  return JSON.parse(raw) as MfeEntry[];
}

export async function findMfe(name: string): Promise<MfeEntry | undefined> {
  const registry = await loadRegistry();
  return registry.find((entry) => entry.name === name);
}
