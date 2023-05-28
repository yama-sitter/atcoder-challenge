import { swap } from "./swap";

// 1. 先頭の要素'A'と隣り合う次の要素'B'の値を比較する
// 2. 要素'A'が要素'B'より大きいなら、要素'A'と要素'B'の値を交換する
// 3. 先頭の要素を'B'に移し、要素'B'と隣り合う要素'C'の値を比較/交換する
// 4. 先頭の要素を'C','D','E'...と移動しながら比較/交換をリストの終端まで繰り返す
// 5. 最も大きい値を持つ要素がリストの終端へ浮かびあがる
// 6. リストの終端には最も大きな値が入っているので、リストの終端の位置をずらして(要素数をひとつ減らして)手順1〜6を繰り返す
export function bubbleSort(arr: number[]) {
	let _arr = arr.slice();
	const len = arr.length;

	// 比較はlen - 1回
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - i; j++) {
			// 今見ている値が右隣の値より大きい場合はスワップ
			if (_arr[j] > _arr[j + 1]) {
				_arr = swap(_arr, j, j + 1);
			}
		}
	}

	return _arr;
}
