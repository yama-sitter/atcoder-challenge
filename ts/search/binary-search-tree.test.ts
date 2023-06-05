import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
	let tree: BinarySearchTree;

	beforeEach(() => {
		tree = new BinarySearchTree();
	});

	describe("insert()", () => {
		beforeEach(() => {
			tree.insert(13);
			tree.insert(3);
			tree.insert(34);
			tree.insert(21);
			tree.insert(2);
			tree.insert(5);
			tree.insert(55);
			tree.insert(1);
		});

		test("succeeds in inserting values", () => {
			expect(tree.rootNode?.value).toStrictEqual(13);
			expect(tree.rootNode?.left?.value).toStrictEqual(3);
			expect(tree.rootNode?.right?.value).toStrictEqual(34);
			expect(tree.rootNode?.right?.left?.value).toStrictEqual(21);
			expect(tree.rootNode?.left?.left?.value).toStrictEqual(2);
			expect(tree.rootNode?.left?.right?.value).toStrictEqual(5);
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(55);
			expect(tree.rootNode?.left?.left?.left?.value).toStrictEqual(1);
			expect(tree.toArrayInOrder()).toStrictEqual([1, 2, 3, 5, 13, 21, 34, 55]);
		});
	});

	describe("search()", () => {
		beforeEach(() => {
			tree.insert(21);
		});

		test("succeeds in searching value", () => {
			expect(tree.search(21)).toBeTruthy();
		});

		test("failed to search value", () => {
			expect(tree.search(55)).toBeFalsy();
		});
	});

	describe("delete()", () => {
		beforeEach(() => {
			tree.insert(13);
			tree.insert(3);
			tree.insert(34);
			tree.insert(21);
			tree.insert(2);
			tree.insert(5);
			tree.insert(55);
			tree.insert(1);
		});

		test("succeeds in deleting a node that has no child nodes ", () => {
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(55);
			tree.delete(55);
			expect(tree.rootNode?.right?.right).toStrictEqual(null);
			expect(tree.rootNode?.right?.right?.value).toBeUndefined();
		});

		test("succeeds in deleting a node that has one child node ", () => {
			expect(tree.rootNode?.left?.left?.value).toStrictEqual(2);
			tree.delete(2);
			expect(tree.rootNode?.left?.left?.value).toStrictEqual(1);
		});

		test("succeeds in deleting a node that has two child nodes ", () => {
			expect(tree.rootNode?.right?.value).toStrictEqual(34);
			expect(tree.rootNode?.right?.left?.value).toStrictEqual(21);
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(55);

			tree.delete(34);

			expect(tree.rootNode?.right?.value).toStrictEqual(55);
			expect(tree.rootNode?.right?.left?.value).toStrictEqual(21);
			expect(tree.rootNode?.right?.right).toStrictEqual(null);
		});

		test("succeeds in deleting a node that has two child nodes ", () => {
			expect(tree.rootNode?.value).toStrictEqual(13);
			expect(tree.rootNode?.left?.value).toStrictEqual(3);
			expect(tree.rootNode?.right?.value).toStrictEqual(34);
			expect(tree.rootNode?.right?.left?.value).toStrictEqual(21);
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(55);

			tree.delete(13);

			expect(tree.rootNode?.value).toStrictEqual(21);
			expect(tree.rootNode?.left?.value).toStrictEqual(3);
			expect(tree.rootNode?.right?.value).toStrictEqual(34);
			expect(tree.rootNode?.right?.left).toStrictEqual(null);
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(55);
		});
	});
});
