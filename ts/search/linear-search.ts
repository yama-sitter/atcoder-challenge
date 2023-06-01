export function linearSearch(key: number, arr: number[]): number | null {
	for (let i = 0; i < arr.length; i++) {
		if (key === arr[i]) return i;
	}
	return null;
}
