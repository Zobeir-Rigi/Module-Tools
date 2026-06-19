import sys
import os

args = sys.argv[1:]

show_all = False
one_per_line = False
path = "."

for arg in args:
    if arg == "-a":
        show_all = True
    elif arg == "-1":
        one_per_line = True
    else:
        path = arg

files = sorted(os.listdir(path))

for file in files:
    if not show_all and file.startswith("."):
        continue

    print(file)