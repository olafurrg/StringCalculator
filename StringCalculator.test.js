const Add = require('./StringCalculator');
test("returns empty string if no input", () => {
	expect(Add("")).toBe("0");
});
it("returns input if only one parameter", () => {
	expect(Add("8")).toBe("8");
});
it("Retruns the sum of two inputs", () => {
	expect(Add("1,2")).toBe("3");
});

