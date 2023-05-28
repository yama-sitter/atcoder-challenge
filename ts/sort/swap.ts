export function swap(arr: number[], a: number, b: number) {
	const _arr = arr.slice();
	const tmp = _arr[a];
	_arr[a] = _arr[b];
	_arr[b] = tmp;
	return _arr;
}
