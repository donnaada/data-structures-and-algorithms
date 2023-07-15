const { tree_intersection } = require('.');
const { BinaryTree } = require('../binary-trees');

describe('Testing Tree Intersections', () => {
  test('should intersect two binary trees', ()=>{
    let treeA = new BinaryTree;
    treeA.root = 150;
    treeA.left = 100;
    treeA.right = 250;

    let treeB = new BinaryTree();
    treeB.root = 42;
    treeB.left = 100;
    treeB.right = 250;

    expect(tree_intersection(treeA, treeB)).toEqual([]);
  });
});
