import { IBstNode } from '../types/IBstNode';

export function maximum(this: { root: IBstNode | null }): number | null {
  if (!this.root) return null;

  const max = maxValue(this.root);

  return max.data;
}

function maxValue(node: IBstNode): IBstNode {
  while (node.right) {
    node = node.right;
  }
  return node;
}
