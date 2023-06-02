import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
	let tree: BinarySearchTree;

	beforeEach(() => {
		tree = new BinarySearchTree();
		tree.insert(13);
		tree.insert(3);
		tree.insert(34);
		tree.insert(21);
		tree.insert(2);
		tree.insert(5);
		tree.insert(55);
	});

	describe("insert()", () => {
		test("inserted result is intended tree structure", () => {
			expect(tree.rootNode?.value).toEqual(13);
			expect(tree.rootNode?.left?.value).toEqual(3);
			expect(tree.rootNode?.right?.value).toEqual(34);
			expect(tree.rootNode?.right?.left?.value).toEqual(21);
			expect(tree.rootNode?.left?.left?.value).toEqual(2);
			expect(tree.rootNode?.left?.right?.value).toEqual(5);
			expect(tree.rootNode?.right?.right?.value).toEqual(55);
			expect(tree.toArrayInOrder()).toStrictEqual([2, 3, 5, 13, 21, 34, 55]);
		});
	});

	describe("search()", () => {
		test("succeed to search value", () => {
			expect(tree.search(21)).toBeTruthy();
		});

		test.skip("failed to search value", () => {
			expect(tree.search(89)).toBeFalsy();
		});
	});
});
