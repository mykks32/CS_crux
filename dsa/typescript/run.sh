#!/bin/bash

# Ask for folder name
read -r -p "Enter the folder name you want to run: " folder_name

# Check if folder exists
if [ ! -d "$folder_name" ]; then
  echo "Folder not found: $folder_name"
  exit 1
fi

# Check if index.ts exists
if [ ! -f "$folder_name/index.ts" ]; then
  echo "index.ts not found in $folder_name"
  exit 1
fi

# Compile TypeScript
tsc "$folder_name/index.ts" --outDir "$folder_name/dist" --ignoreConfig
#  --declaration \
#  --sourceMap \
#  --declarationMap \


# Check if compilation succeeded
if [ $? -ne 0 ]; then
  echo "TypeScript compilation failed"
  exit 1
fi

# Run the compiled file
node "$folder_name/dist/index.js"