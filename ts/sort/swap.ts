export function swap(arr: number[], a: number, b: number) {
	const _arr = arr.slice();
	[_arr[a], _arr[b]] = [_arr[b], _arr[a]];
	return _arr;
}
