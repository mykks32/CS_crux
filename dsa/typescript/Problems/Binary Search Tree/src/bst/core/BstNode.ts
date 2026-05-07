import { IBstNode } from '../types/IBstNode';

export class BstNode implements IBstNode {
  constructor(
    public data: number,
    public left: BstNode | null = null,
    public right: BstNode | null = null
  ) {}
}
