// 1. ソート対象の配列をピボットを基準に2つの部分配列に分割する
// 2. 前方の部分配列に対してquickSortを行う
// 3. 後方の部分配列に対してquickSortを行う
// 4. 整列済み部分配列とピボットを連結して返す
export function quickSort(arr: number[]): number[] {
	if (arr.length <= 1) return arr;

	const [pivot, ..._arr] = arr;
	const [less, greater] = divide(_arr, pivot);

	return quickSort(less).concat(pivot, quickSort(greater));
}

function divide(arr: number[], pivot: number) {
	const less = [];
	const greater = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	return [less, greater];
}
