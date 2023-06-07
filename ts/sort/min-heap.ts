export class MinHeap {
	private constructor(private arr: number[]) {}

	static create(arr: number[]) {
		// 子ノードを持つのはノード総数の半分（切り下げ）のため、処理する回数はlength / 2でOK
		const heaped = [...Array(Math.floor(arr.length / 2))]
			.map((_, i) => i)
			.reverse()
			.reduce((_arr, index) => MinHeap.#heapify(_arr, index), arr);
		return new MinHeap(heaped);
	}

	static #heapify(arr: number[], parentIndex: number): number[] {
		const _arr = arr.slice();

		// 配列構造の完全二分木において、子ノードを指すインデックス
		const left = parentIndex * 2 + 1;
		const right = parentIndex * 2 + 2;

		let min = parentIndex;

		// 親ノード、子ノードの中の最小値を求める
		if (typeof _arr[left] !== "undefined" && _arr[parentIndex] > _arr[left]) {
			min = left;
		}
		if (typeof _arr[right] !== "undefined" && _arr[min] > _arr[right]) {
			min = right;
		}

		// 子ノードが最小値を持っていた場合、親ノードの値とスワップする
		// スワップすると元々子ノードの値が入っていた場所に親ノードの値が入って孫ノードとの整合性が取れなくなる可能性があるため、再帰的に処理する
		if (min !== parentIndex) {
			[_arr[parentIndex], _arr[min]] = [_arr[min], _arr[parentIndex]];
			return MinHeap.#heapify(_arr, min);
		}

		return _arr;
	}

	toArray() {
		return this.arr;
	}

	verify() {
		return this.#verifyRecursive(this.arr, 0);
	}

	#verifyRecursive(arr: number[], parentIndex: number): boolean {
		// リーフノードを指しているので判断不要、trueを返す
		if (parentIndex >= Math.floor((arr.length - 1) / 2)) return true;

		const left = parentIndex * 2 + 1;
		const right = parentIndex * 2 + 2;

		// 子ノードの方が値が大きければtrueを返す
		return (
			arr[parentIndex] < arr[left] &&
			arr[parentIndex] < arr[right] &&
			this.#verifyRecursive(arr, left) &&
			this.#verifyRecursive(arr, right)
		);
	}
}
