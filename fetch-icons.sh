#!/bin/bash

# Script is now used to minify svgs
echo "Optimizing SVGs..."
# Check if svgo is installed, install if not
if ! command -v svgo &>/dev/null; then
  echo "svgo not found, skipping optimization"
  echo "To optimize SVGs, install svgo: npm install -g svgo"
else
  svgo -f public/assets/skills
fi

echo "Check public/assets/skills/ for the downloaded icons"
