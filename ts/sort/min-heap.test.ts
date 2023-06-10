import { MinHeap } from "./min-heap";

describe("MinHeap", () => {
	describe("create", () => {
		test("succeed in creating correct min heap", () => {
			const heap = MinHeap.create([
				17, 11, 12, 5, 14, 9, 6, 16, 4, 10, 1, 19, 13, 15, 0, 2, 3, 18, 7, 8,
			]);
			expect(heap.toArray()).toStrictEqual([
				0, 1, 6, 2, 8, 9, 12, 3, 4, 10, 14, 19, 13, 15, 17, 16, 5, 18, 7, 11,
			]);
			expect(heap.verify()).toBeTruthy();
		});
	});

	describe("toSortedArray", () => {
		test("", () => {
			const heap = MinHeap.create([
				17, 11, 12, 5, 14, 9, 6, 16, 4, 10, 1, 19, 13, 15, 0, 2, 3, 18, 7, 8,
			]);
			expect(heap.toSortedArray()).toStrictEqual([
				0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
			]);
			expect(heap.verify()).toBeTruthy();
		});
	});
});
