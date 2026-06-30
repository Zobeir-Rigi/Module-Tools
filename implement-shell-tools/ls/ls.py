import argparse
import os

parser = argparse.ArgumentParser()
parser.add_argument("-a", "--all", action="store_true")
parser.add_argument("-1", dest="one_per_line", action="store_true")
parser.add_argument("path", nargs="?", default=".")

args = parser.parse_args()

files = sorted(os.listdir(args.path))

files = [f for f in files if args.all or not f.startswith(".")]

if args.one_per_line:
    for f in files:
        print(f)
else:
    print(" ".join(files))