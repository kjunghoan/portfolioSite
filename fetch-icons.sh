#!/bin/bash

# This script is meant to install svgs

# Create the destination directory
mkdir -p public/assets/skills

# Define the list of skills to fetch
icons=(
  # Languages
  "typescript"
  "javascript"
  "python"
  "java"
  "lua"

  # Frameworks
  "react"
  "nextjs"
  "spring"
  "express"
  "tailwindcss:tailwind" # source name : destination name
  "sass"

  # Databases
  "postgresql"
  "mongodb"
  "mysql"
  "prisma"

  # Cloud
  "amazonwebservices:aws"
  "firebase"

  # Tools
  "docker"
  "git"
  "vim:nvim"
  "vitejs:vite"
  "threejs"

  # Misc
  "yarn"
)

# Create a directory for alternate sources (icons not available on devicon)
mkdir -p temp_icons

# Download pinecone and others from their websites
echo "Downloading icons not available on devicon..."
curl -s -o temp_icons/pinecone.svg "https://www.vectorlogo.zone/logos/pineconeio/pineconeio-icon.svg" || echo "Failed to download pinecone icon"
curl -s -o temp_icons/ceph.svg "https://www.vectorlogo.zone/logos/ceph/ceph-icon.svg" || echo "Failed to download ceph icon"
curl -s -o temp_icons/zmk.svg "https://raw.githubusercontent.com/zmkfirmware/zmk-web/main/static/img/zmk-logo.svg" || echo "Failed to download zmk icon"
curl -s -o temp_icons/lazy.svg "https://raw.githubusercontent.com/folke/lazy.nvim/main/neovim.svg" || echo "Failed to download lazy.nvim icon"
curl -s -o temp_icons/proxmox.svg "https://www.vectorlogo.zone/logos/proxmox/proxmox-icon.svg" || echo "Failed to download proxmox icon"

# Loop through and download icons from devicon
echo "Downloading icons from devicon..."
for icon in "${icons[@]}"; do
  # Check if the icon name contains a colon (source:destination)
  if [[ $icon == *":"* ]]; then
    source_name=${icon%%:*}
    dest_name=${icon##*:}
  else
    source_name=$icon
    dest_name=$icon
  fi

  echo "Fetching $source_name as $dest_name.svg"

  # Try several common icon formats
  if curl -s -f -o "public/assets/skills/$dest_name.svg" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/$source_name/$source_name-original.svg"; then
    echo "  Downloaded $dest_name.svg (original)"
  elif curl -s -f -o "public/assets/skills/$dest_name.svg" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/$source_name/$source_name-plain.svg"; then
    echo "  Downloaded $dest_name.svg (plain)"
  elif curl -s -f -o "public/assets/skills/$dest_name.svg" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/$source_name/$source_name-line.svg"; then
    echo "  Downloaded $dest_name.svg (line)"
  else
    echo "  Failed to download $dest_name.svg from devicon"
  fi
done

# Copy the custom icons from temp directory
echo "Copying custom icons..."
cp temp_icons/*.svg public/assets/skills/
rm -rf temp_icons

echo "Optimizing SVGs..."
# Check if svgo is installed, install if not
if ! command -v svgo &>/dev/null; then
  echo "svgo not found, skipping optimization"
  echo "To optimize SVGs, install svgo: npm install -g svgo"
else
  svgo -f public/assets/skills
fi

echo "Icon fetching complete!"
echo "Check public/assets/skills/ for the downloaded icons"

# List the downloaded icons
ls -la public/assets/skills/
