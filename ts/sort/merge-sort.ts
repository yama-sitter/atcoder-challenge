// 1. n個の要素を含む配列を、それぞれn/2個の要素を含む2つの部分配列に分割する
// 2. その2つの部分配列をそれぞれmergeSortでソートする
// 3. 得られた2つのソート済み部分配列をmergeで結合する
export function mergeSort(arr: number[]): number[] {
	const len = arr.length;
	if (len === 1) return arr;

	// 配列を分割し、それぞれをマージソートする
	const divisionIndex = Math.round(len / 2);
	const left = mergeSort(arr.slice(0, divisionIndex));
	const right = mergeSort(arr.slice(divisionIndex, len));

	// 分割された配列を結合する
	return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
	let arr: number[] = [];
	let [i, j] = [0, 0];

	// 左右のインデックスは均等に増加しないため、左右でズレることになる。どちらかのインデックスが無効な値を指したら終了
	while (typeof left[i] !== "undefined" && typeof right[j] !== "undefined") {
		if (left[i] < right[j]) {
			arr.push(left[i]);
			i += 1;
		} else {
			arr.push(right[j]);
			j += 1;
		}
	}

	// 左右でズレた場合の残りをarrに足し合わせる
	arr = arr.concat(left.slice(i));
	arr = arr.concat(right.slice(j));

	return arr;
}
