import { BstNode } from '../core/BstNode';

export function search(this: { root: BstNode | null }, value: number): boolean {
  let current = this.root;

  while (current) {
    if (value === current.data) return true;

    current = value < current.data ? current.left : current.right;
  }

  return false;
}
