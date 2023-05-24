function generatePatterns(n: number) {
	return [...Array(2 ** (n - 1)).keys()]
		.filter((x) => x % 2 === 1)
		.map((x) =>
			[...("0".repeat(n) + x.toString(2)).slice(-n)].map((y) => parseInt(y, 2)),
		);
}

function isValidPattern(pattern: number[]) {
	let checker = 0;
	for (let i = 0; i < pattern.length; i++) {
		checker = pattern[i] === 0 ? checker + 1 : checker - 1;
		if (checker < 0) return false;
	}
	return checker === 0;
}

function patternToParentheses(pattern: number[]) {
	return pattern.map((p) => (p === 0 ? "(" : ")")).join("");
}

function generateValidParentheses(n: number) {
	if (n % 2 === 1) return "";

	const patterns = generatePatterns(n);
	const validPatterns = patterns.filter(isValidPattern);
	return validPatterns.map(patternToParentheses).join("\n");
}

export function main(input: string) {
	const n = parseInt(input);
	const parentheses = generateValidParentheses(n);
	console.log(parentheses);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
