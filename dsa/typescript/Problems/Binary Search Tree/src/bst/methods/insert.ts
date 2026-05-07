import { BstNode } from '../core/BstNode';

export function insert(this: { root: BstNode | null }, value: number): void {
  const newNode = new BstNode(value);

  if (!this.root) {
    this.root = newNode;
    return;
  }

  let current: BstNode | null = this.root;

  while (true) {
    if (value < current.data) {
      if (!current.left) {
        current.left = newNode;
        return;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = newNode;
        return;
      }
      current = current.right;
    }
  }
}
