import { BstNode } from './BstNode';
import { insert } from '../methods/insert';
import { IBST } from '../types/IBST';
import { search } from '../methods/search';
import { remove } from '../methods/delete';
import { IBstNode } from '../types/IBstNode';
import { minimum } from '../methods/minimum';
import { maximum } from '../methods/maximum';

export class BST implements IBST {
  public root: BstNode | null = null;

  constructor() {
    this.insert = insert.bind(this);
    this.search = search.bind(this);
    this.remove = remove.bind(this);
    this.minimum = minimum.bind(this);
    this.maximum = maximum.bind(this);
  }

  public insert: (value: number) => void;
  public search: (value: number) => boolean;
  public remove: (value: number) => IBstNode | null;
  public minimum: () => number | null;
  public maximum: () => number | null;
}
