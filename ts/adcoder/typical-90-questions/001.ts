function parseInput(input: string): [number, number, number, number[]] {
	const [x, y, z] = input.split("\n");
	const [n, l] = x.split(" ").map((_x) => parseInt(_x), 10);
	const k = parseInt(y, 10);
	const a = z.split(" ").map((_z) => parseInt(_z), 10);
	return [n, l, k, a];
}

function calculateMaxScore(n: number, l: number, k: number, a: number[]) {
	let ok = 0;
	let ng = l;

	while (ng - ok > 1) {
		const mid = ((ng + ok) / 2) | 0;
		if (meetCondition(n, l, k, a, mid)) {
			ok = mid;
		} else {
			ng = mid;
		}
	}

	return ok;
}

function meetCondition(
	n: number,
	length: number,
	k: number,
	a: number[],
	mid: number,
) {
	let pieces = 0;
	let pre = 0;

	for (let i = 0; i < n; i++) {
		const cur = a[i];
		// 切れ目の長さ（cur - pre）が期待値（mid）を超え、且つ残った長さが期待値（mid）以上の場合は切断
		if (cur - pre >= mid && length - cur >= mid) {
			pieces += 1;
			pre = cur;
		}
	}

	return pieces >= k;
}

export function main(input: string) {
	const [n, l, k, a] = parseInput(input);
	const result = calculateMaxScore(n, l, k, a);
	console.log(result);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
