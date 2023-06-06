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

	delete(value: number) {
		this._rootNode = this.#deleteRecursive(value, this._rootNode);
	}

	#deleteRecursive(value: number, node: Node | null) {
		if (node === null) return null;

		if (value === node.value) {
			// 削除対象ノードが子ノードを持たない or 右の子ノードだけを持つ場合
			// 子ノードを持たない場合でも、node.rightがnullなので同様に処理できる
			if (node.left === null) {
				return node.right;
			}
			// 削除対象ノードが左の子ノードだけを持つ場合
			else if (node.right === null) {
				return node.left;
			}

			// 削除対象ノードが2つの子ノードを持つ場合
			// 子ノードの最小値を探し、値を入れ替える
			const min = this.#findMin(node.right);
			node.value = min.value;
			// 子ノードの最小値（= 右の部分木の最小値 = 右の部分木の左を辿った末端）を削除する
			node.right = this.#deleteRecursive(min.value, node.right);
		}

		// 探索
		if (value < node.value) {
			node.left = this.#deleteRecursive(value, node.left);
		} else if (value > node.value) {
			node.right = this.#deleteRecursive(value, node.right);
		}

		return node;
	}

	#findMin(node: Node): Node {
		return node.left === null ? node : this.#findMin(node.left);
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
