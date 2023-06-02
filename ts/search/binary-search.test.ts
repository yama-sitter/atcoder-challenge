import { binarySearch } from "./binary-search";

describe("binary search", () => {
	describe.each([
		{
			key: 21,
			arr: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
			expected: 6,
		},
		{
			key: 144,
			arr: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
			expected: null,
		},
	])("binarySearch($key, $arr)", ({ key, arr, expected }) => {
		test(`expected: [${expected}]`, () => {
			expect(binarySearch(key, arr)).toStrictEqual(expected);
		});
	});
});
