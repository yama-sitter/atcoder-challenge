import { BinaryTree } from "./binary-tree";

describe("BinaryTree", () => {
	describe("dfs()", () => {
		test("search depth first", () => {
			const tree = BinaryTree.create([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
			expect(tree.rootNode?.value).toStrictEqual(1);
			expect(tree.rootNode?.left?.value).toStrictEqual(2);
			expect(tree.rootNode?.left?.left?.value).toStrictEqual(4);
			expect(tree.rootNode?.left?.left?.left?.value).toStrictEqual(8);
			expect(tree.rootNode?.left?.left?.right?.value).toStrictEqual(9);
			expect(tree.rootNode?.left?.right?.value).toStrictEqual(5);
			expect(tree.rootNode?.left?.right?.left?.value).toStrictEqual(10);
			expect(tree.rootNode?.right?.value).toStrictEqual(3);
			expect(tree.rootNode?.right?.left?.value).toStrictEqual(6);
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(7);
			expect(tree.dfs()).toStrictEqual([1, 2, 4, 8, 9, 5, 10, 3, 6, 7]);
		});
	});

	describe("bfs", () => {
		test("search breadth first", () => {
			const tree = BinaryTree.create([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
			expect(tree.rootNode?.value).toStrictEqual(1);
			expect(tree.rootNode?.left?.value).toStrictEqual(2);
			expect(tree.rootNode?.right?.value).toStrictEqual(3);
			expect(tree.rootNode?.left?.left?.value).toStrictEqual(4);
			expect(tree.rootNode?.left?.right?.value).toStrictEqual(5);
			expect(tree.rootNode?.right?.left?.value).toStrictEqual(6);
			expect(tree.rootNode?.right?.right?.value).toStrictEqual(7);
			expect(tree.rootNode?.left?.left?.left?.value).toStrictEqual(8);
			expect(tree.rootNode?.left?.left?.right?.value).toStrictEqual(9);
			expect(tree.rootNode?.left?.right?.left?.value).toStrictEqual(10);
			expect(tree.bfs()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});
	});
});
