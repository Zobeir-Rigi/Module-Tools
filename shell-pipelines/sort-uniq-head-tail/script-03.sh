#!/bin/bash

set -euo pipefail

# The input for this script is the scores-table.txt file.
# TODO: Write a command to output scores-table.txt, with shows the lines for the three players with the highest first score, in descending order.
# Your output should be:
# Basia London 22 9 6
# Piotr Glasgow 15 2 25 11 8
# Chandra Birmingham 12 6

sort -k3,3nr scores-table.txt | head -3
  # sort by column 3 numerically (highest first) and show top 3 lines.
#    n(numerically) r(reverse) -k3,3 → sort by column 3 only, not the whole line, and head -3 → show the first 3 lines of the sorted output
