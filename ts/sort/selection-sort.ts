// 1. 1番目の値から最後の値までの中の最小値を見つけ出す
// 2. 最小値を1番目の要素と交換する
// 3. 1で交換した最小値を確定する
// 4. 2番目以降にも1~3を繰り返し、未確定が残り1つになったら終了
export function selectionSort(arr: number[]) {
	const _arr = arr.slice();
	const len = arr.length;

	// 未確定が1つになったら終了するため、len - 1まででOK
	for (let i = 0; i < len - 1; i++) {
		let minIndex = i;

		// i番目の要素を交換対象とし、i番目以降（i + 1）から探索する
		for (let j = i + 1; j < len; j++) {
			minIndex = _arr[j] < _arr[minIndex] ? j : minIndex;
		}

		// 交換対象と最小値を交換する
		const tmp = _arr[i];
		_arr[i] = _arr[minIndex];
		_arr[minIndex] = tmp;
	}

	return _arr;
}
