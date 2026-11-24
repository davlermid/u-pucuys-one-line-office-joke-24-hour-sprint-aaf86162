import { writeFileSync, mkdirSync } from "node:fs";

const entry = "I replied-all 'thanks' to 400 people, and now HR officially calls me 'the incident.'";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, entry);
