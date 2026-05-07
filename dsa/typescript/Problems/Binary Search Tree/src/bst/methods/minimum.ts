import { IBstNode } from '../types/IBstNode';

export function minimum(this: { root: IBstNode | null }): number | null {
  if (!this.root) return null;

  const min = minValue(this.root);
  return min.data;
}

function minValue(node: IBstNode): IBstNode {
  while (node.left) {
    node = node.left;
  }
  return node;
}
