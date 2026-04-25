#!/bin/bash

BASE_DIR='./Problems'

# Step 1: Select Category
echo "Select Category"
select category in $(ls "$BASE_DIR"); do
  [ -n "$category" ] && break
  echo "Invalid Selection"
done

CATEGORY_PATH="$BASE_DIR/$category"

# Step 2: Select Difficulty
echo "Select Difficulty:"
select difficulty in easy medium hard; do
  if [ -d "$CATEGORY_PATH/$difficulty" ]; then
    break
  else
    echo "Invalid selection"
  fi
done

TARGET_PATH="$CATEGORY_PATH/$difficulty"

# Step 3: Enter Problem Name
echo "Enter problem name like:"
ls "$TARGET_PATH"
read -r -p "Problem name: " problem_name

if [ -z "$problem_name" ]; then
  echo "Name cannot be empty"
  exit 1
fi

FOLDER_PATH="$TARGET_PATH/$problem_name"

if [ -d "$FOLDER_PATH" ]; then
  echo "Problem already exists"
  exit 1
fi

# Step 4: Create structure
mkdir -p "$FOLDER_PATH"

# index.ts template
cat <<EOL > "$FOLDER_PATH/index.ts"
class {
	constructor() {}

  /**
   * Problem: ${problem_name}
   * Category: ${category}
   * Difficulty: ${difficulty}
   * -------------------------------------
   * @Description
   * @example
   * @params
   * @returns
   * @timeComplexity
   * @spaceComplexity
   *
   */
}

/**
* Self-inducing Test Block
*/
(() => {
  // Create Instance
  const obj = new

  // Test Block using Object
  console.log(obj);
  console.log(obj);
})()
EOL

# question.md
touch "$FOLDER_PATH/question.md"

echo "Created: $FOLDER_PATH"