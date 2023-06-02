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

	// データを挿入できるまで以下の処理を繰り返す
	//   挿入すべき範囲に節点がある場合
	//     節点と挿入するデータを比較する
	//       節点の方が大きければ挿入すべき範囲を左に移す
	//       節点の方が小さければ挿入すべき範囲を右に移す
	//   挿入すべき範囲に節点がない場合
	//     挿入したいデータの値を持つ節点を新たに作って完了
	insert(value: number) {
		if (this._rootNode === null) {
			this._rootNode = new Node(value);
			return;
		}

		let current: Node = this._rootNode;

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
}
