import { program } from "commander";
import { promises as fs } from "node:fs";

program
  .name("ls")
  .description("List directory contents")
  .option("-a, --all", "show hidden files")
  .option("-1, --one-per-line", "display one file per line")
  .argument("[path]", "directory to list", ".");

program.parse();

const options = program.opts();
const path = program.args[0] || ".";

const files = await fs.readdir(path);

const filteredFiles = files.filter((file) => {
  return options.all || !file.startsWith(".");
});

if (options.onePerLine) {
  for (const file of filteredFiles) {
    console.log(file);
  }
} else {
  console.log(filteredFiles.join(" "));
}