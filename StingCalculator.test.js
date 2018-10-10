const add = require('./StringCalculator');
test("returns empty string if no input", () => {
	expect(add()).toBe("0");
});
