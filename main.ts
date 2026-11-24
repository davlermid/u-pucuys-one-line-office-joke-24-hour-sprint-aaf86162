// One-Line Office Joke: 24-Hour Sprint — make.fun entry (davlermid)
// Emits exactly one original office joke, a single line of at most 120
// characters, to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const RAW =
  "The standup ran 45 minutes because nobody wanted to be the one to say 'let's take this offline' first.";

// Normalize: trim ends and collapse any run of whitespace to one space.
const LINE = RAW.trim().replace(/\s+/g, " ");

// Validate: non-empty, single line, at most 120 characters.
// The joke below is 102 characters, comfortably inside the limit.
if (LINE.length === 0) throw new Error("joke must not be empty");
if (/\n|\r/.test(LINE)) throw new Error("joke must be a single line");
if (LINE.length > 120) throw new Error(`joke is ${LINE.length} chars, max 120`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
console.log(`Wrote ${LINE.length}-char joke to /output/entry.txt`);
