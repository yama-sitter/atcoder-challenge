class Node {
	value: number;
	left: Node | null = null;
	right: Node | null = null;

	constructor(value: number) {
		this.value = value;
	}
}

export class BinaryTree {
	private constructor(private _rootNode: Node | null = null) {}

	get rootNode() {
		return this._rootNode;
	}

	static create(arr: number[]) {
		const rootNode = BinaryTree.#createNodeTree(arr, 0);
		return new BinaryTree(rootNode);
	}

	static #createNodeTree(arr: number[], index: number) {
		if (index >= arr.length) return null;

		const node = new Node(arr[index]);
		node.left = BinaryTree.#createNodeTree(arr, index * 2 + 1);
		node.right = BinaryTree.#createNodeTree(arr, index * 2 + 2);

		return node;
	}

	dfs() {
		if (this._rootNode === null) return [];

		const stack = [this._rootNode];
		return this.#dfsRecursive(stack, []);
	}

	#dfsRecursive(stack: Node[], arr: number[]): number[] {
		if (stack.length === 0) return arr;

		const node = stack.pop() as Node;
		arr.push(node.value);

		// 行きがけ順なので、左から優先して取り出したい
		// スタックはLIFOなので左を右の後に入れる
		if (node.right !== null) {
			stack.push(node.right);
		}
		if (node.left !== null) {
			stack.push(node.left);
		}

		return [...this.#dfsRecursive(stack, arr)];
	}

	bfs() {
		if (this._rootNode === null) return [];

		const queue = [this._rootNode];
		return this.#bfsRecursive(queue, []);
	}

	#bfsRecursive(queue: Node[], arr: number[]): number[] {
		if (queue.length === 0) return arr;

		const node = queue.shift() as Node;
		arr.push(node.value);

		if (node.left !== null) {
			queue.push(node.left);
		}
		if (node.right !== null) {
			queue.push(node.right);
		}

		return [...this.#bfsRecursive(queue, arr)];
	}
}
