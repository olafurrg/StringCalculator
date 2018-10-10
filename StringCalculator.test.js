const Add = require('./StringCalculator');
test("returns empty string if no input", () => {
	expect(Add("")).toBe("0");
});

