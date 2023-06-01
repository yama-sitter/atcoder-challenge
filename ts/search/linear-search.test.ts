import { linearSearch } from "./linear-search";

describe("linear search", () => {
	describe.each([
		{
			key: 4,
			arr: [1, 2, 3, 4, 5],
			expected: 3,
		},
		{
			key: 6,
			arr: [1, 2, 3, 4, 5],
			expected: null,
		},
	])("linearSearch($key, $arr)", ({ key, arr, expected }) => {
		test(`expected: [${expected}]`, () => {
			expect(linearSearch(key, arr)).toStrictEqual(expected);
		});
	});
});
