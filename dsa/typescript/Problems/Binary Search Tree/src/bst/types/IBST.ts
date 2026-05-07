import { IBstNode } from './IBstNode';

export interface IBST {
  root: IBstNode | null;
  insert(value: number): void;
  search(value: number): boolean;
  remove(value: number): IBstNode | null;
  minimum(): number | null;
  maximum(): number | null;
}
