import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My keys don't work nights. At 3 AM I'm a paperweight with opinions — come back when the sun can vouch for you.";

// Gate: one line, 1-200 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error(`entry line fails the gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
