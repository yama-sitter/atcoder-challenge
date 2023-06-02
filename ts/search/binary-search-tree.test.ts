import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
	describe("insert()", () => {
		test("inserted result is intended tree structure", () => {
			const tree = new BinarySearchTree();
			tree.insert(13);
			tree.insert(3);
			tree.insert(34);

			expect(tree.rootNode?.value).toEqual(13);
			expect(tree.rootNode?.left?.value).toEqual(3);
			expect(tree.rootNode?.right?.value).toEqual(34);
		});
	});
});
