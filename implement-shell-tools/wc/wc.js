import process from "node:process";
import { promises as fs } from "node:fs";

const args = process.argv.slice(2);

let countLines = false;
let countWords = false;
let countChars = false;
const paths = [];

// parse args
for (const arg of args) {
  if (arg === "-l") countLines = true;
  else if (arg === "-w") countWords = true;
  else if (arg === "-c") countChars = true;
  else paths.push(arg);
}

if (paths.length === 0) {
  console.error("Please provide at least one file");
  process.exit(1);
}

for (const path of paths) {
  const content = await fs.readFile(path, "utf-8");

  const lines = content.split("\n").length;
  const words = content.trim().split(/\s+/).length;
  const chars = content.length;

  // if no flags → show all
  if (!countLines && !countWords && !countChars) {
    console.log(lines, words, chars, path);
    continue;
  }

  const output = [];

  if (countLines) output.push(lines);
  if (countWords) output.push(words);
  if (countChars) output.push(chars);

  console.log(...output, path);
}