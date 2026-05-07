import { BstNode } from '../core/BstNode';

export function remove(
  this: { root: BstNode | null },
  value: number
): BstNode | null {
  // STEP 1: start deletion from root
  this.root = deleteNode(this.root, value);

  return this.root;
}

// recursive function
function deleteNode(node: BstNode | null, value: number): BstNode | null {
  // STEP 2: base case - node not found
  if (!node) return null;

  // STEP 3: go LEFT (example: 12 < 22)
  if (value < node.data) {
    node.left = deleteNode(node.left, value);
    return node;
  }

  // STEP 4: go RIGHT (example: 12 > 8 etc.)
  if (value > node.data) {
    node.right = deleteNode(node.right, value);
    return node;
  }

  // STEP 5: NODE FOUND (example: node = 12)
  // CASE 1: no children
  if (!node.left && !node.right) return null;

  // CASE 2: one child
  if (!node.left) return node.right;
  if (!node.right) return node.left;

  // CASE 3: two children (example: deleting 12)
  /**
   * TREE EXAMPLE:
   *
   *           22
   *          /  \
   *        12    30
   *       /  \
   *      8   20
   *         /  \
   *        15  21
   */
  // STEP 6: find smallest in right subtree
  // (inorder successor of 12 → 15)
  const min = findMin(node.right);

  // STEP 8: replace 12 with 15
  node.data = min.data;

  // STEP 9: delete duplicate 15 from right subtree
  node.right = deleteNode(node.right, min.data);

  // STEP 10: return fixed subtree
  return node;
}

// helper
function findMin(node: BstNode): BstNode {
  // STEP 8: go to leftmost node
  while (node.left) {
    node = node.left;
  }
  return node;
}
