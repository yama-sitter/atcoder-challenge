class Node {
	value: number;
	left: Node | null = null;
	right: Node | null = null;

	constructor(value: number) {
		this.value = value;
	}
}

export class BinarySearchTree {
	constructor(private _rootNode: Node | null = null) {}

	get rootNode() {
		return this._rootNode;
	}

	insert(value: number) {
		if (this._rootNode === null) {
			this._rootNode = new Node(value);
			return;
		}

		let current = this._rootNode;

		while (true) {
			if (value < current.value) {
				if (current.left === null) {
					current.left = new Node(value);
					return;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = new Node(value);
					return;
				}
				current = current.right;
			}
		}
	}

	search(value: number): boolean {
		return this.#searchRecursive(value, this._rootNode);
	}

	#searchRecursive(value: number, node: Node | null): boolean {
		if (node === null) {
			return false;
		} else if (node.value === value) {
			return true;
		}

		if (value < node.value) {
			return this.#searchRecursive(value, node.left);
		}
		return this.#searchRecursive(value, node.right);
	}

	toArrayInOrder(node: Node | null = this.rootNode): number[] {
		if (node === null) return [];

		return [
			...this.toArrayInOrder(node.left),
			node.value,
			...this.toArrayInOrder(node.right),
		];
	}
}
