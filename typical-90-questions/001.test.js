const { main } = require("./001");

const logSpy = jest.spyOn(console, "log");

describe("Typical 90 Questions - 001", () => {
	describe.each([
		{
			args: "3 34\n\
1\n\
8 13 26\n",
			expected: 13,
		},
		{
			args: "7 45\n\
2\n\
7 11 16 20 28 34 38\n",
			expected: 12,
		},
		{
			args: "3 100\n\
1\n\
28 54 81\n",
			expected: 46,
		},
		{
			args: "20 1000\n\
4\n\
51 69 102 127 233 295 350 388 417 466 469 523 553 587 720 739 801 855 926 954\n",
			expected: 170,
		},
	])("args: \n$args", ({ args, expected }) => {
		test(`returns ${expected}`, () => {
			main(args);
			expect(logSpy).toHaveBeenCalledWith(expected);
		});
	});
});
