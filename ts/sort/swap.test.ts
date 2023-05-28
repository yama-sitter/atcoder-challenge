import { swap } from "./swap";

describe("swap", () => {
	describe.each([
		[[1, 2, 3, 4], 0, 1, [2, 1, 3, 4]],
		[[1, 2, 3, 4], 1, 3, [1, 4, 3, 2]],
	])("swap(%j)", (arr, a, b, expected) => {
		test(`expected: [${expected}]`, () => {
			expect(swap(arr, a, b)).toStrictEqual(expected);
		});
	});
});
