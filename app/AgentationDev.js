"use client";

import { Agentation } from "agentation";

// Visual-feedback toolbar for AI coding agents (agentation.com).
// Rendered only in development so it never ships to portfolio visitors.
export default function AgentationDev() {
  if (process.env.NODE_ENV !== "development") return null;
  return <Agentation />;
}
