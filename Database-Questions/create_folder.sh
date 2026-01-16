#!/bin/bash

# Ask for folder name
read -p "Enter the folder name you want to create: " folder_name

# Create the main folder
mkdir -p "$folder_name"

# Create subfolders
mkdir -p "$folder_name/sql"
mkdir -p "$folder_name/nosql"

# Create empty files inside the folders
touch "$folder_name/sql/create.sql"
touch "$folder_name/sql/insert.sql"
touch "$folder_name/sql/solution.sql"

touch "$folder_name/nosql/insert.json"
touch "$folder_name/nosql/solution.json"

touch "$folder_name/question.md"

echo "Folder structure created successfully under '$folder_name'."