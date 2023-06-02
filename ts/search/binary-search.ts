export function binarySearch(key: number, arr: number[]): number | null {
	let [left, right] = [0, arr.length];

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === key) {
			return mid;
		} else if (arr[mid] > key) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return null;
}
