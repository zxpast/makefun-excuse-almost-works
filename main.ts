// The Excuse That Almost Works — one-liner entry.
// Writes the single excuse line to /output/entry.txt.
// Node 22+, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// One line a gamer texts the boss to skip work on GTA 6 launch week.
// Angle: a boring, specific, almost-believable workplace-adjacent detail —
// the landlord booked the annual gas safety check for 9am, so the gamer
// is hostage to it. The laugh is the excuse's own logic: he's stuck in
// until the certificate is signed off — the paperwork traps him, not the check.
const LINE =
  "sorry boss, the landlord booked the gas safety check for 9am and i'm stuck in till it's signed off";

// Hard limits: at most 20 words, gate 1-140 characters.
const words = LINE.trim().split(/\s+/).length;
if (words > 20) throw new Error(`too many words: ${words}`);
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`bad length: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
