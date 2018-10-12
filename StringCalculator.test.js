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
it("Returns the some of more thab two inputs", () => {
	expect(Add("1,2,3")).toBe("6");
});
it("Retrun the sum of iputs with new line", () => {
	expect(Add("1,2\n3")).toBe("6");
}); 
it("Throw Error if numbers includes a nagetive number", () => {
		expect(function(){Add("1,2,-3,\n4")}).toThrow(new Error("Negatives not allowed:-3,"));
});


