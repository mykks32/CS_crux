#!/bin/bash

# Ask for folder name
read -p "Enter the folder name you want to create: " folder_name

# Create the main folder
mkdir -p "$folder_name"

# Create empty files inside the folders
touch "$folder_name/index.ts"

# Create Question Markdown file
touch "$folder_name/question.md"

# Acknowledgement for folder creation
echo "Folder structure created successfully under '$folder_name'"