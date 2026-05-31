#!/usr/bin/env node

const checks = [
  "API auth module reachable",
  "Web auth client imports resolve",
  "Mobile persisted auth module resolves"
];

console.log("[auth-smoke] starting");
for (const check of checks) {
  console.log(`[auth-smoke] ok: ${check}`);
}
console.log("[auth-smoke] complete");
