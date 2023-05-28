import { mergeSort } from "./merge-sort";

describe.each([
	[
		[3, 9, 5, 2, 4, 8, 10, 1, 7, 6],
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	],
	[
		[1000, 10, 10000, 100, 1],
		[1, 10, 100, 1000, 10000],
	],
])("mergeSort(%j)", (args, expected) => {
	test(`expected: [${expected}]`, () => {
		expect(mergeSort(args)).toStrictEqual(expected);
	});
});
