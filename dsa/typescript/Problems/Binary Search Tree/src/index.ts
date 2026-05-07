import { BST } from './bst/core/BST';

(() => {
  const tree = new BST();

  // Create BST
  //       22
  //      /  \
  //     12   30
  //     / \
  //    8  20
  //       / \
  //      15  21
  // Insert
  tree.insert(22);
  tree.insert(12);
  tree.insert(30);
  tree.insert(8);
  tree.insert(20);
  tree.insert(15);
  tree.insert(21);

  // Search
  console.log(tree.search(12));
  console.log(tree.search(100));

  // Remove
  console.log(JSON.stringify(tree.remove(8), null, 2));

  // Minimum
  console.log('minimum', tree.minimum());

  // Maximum
  console.log('maximum', tree.maximum());

  // console.log(JSON.stringify(tree.root, null, 2));
})();
