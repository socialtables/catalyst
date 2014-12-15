jest.dontMock("../merge-objects");

describe("merge-objects", function() {
	var merge,
		object1,
		object2,
		object3;
	beforeEach(function() {
		merge = require("../merge-objects");
		object1 = {
			name: "Mary",
			profession: {
				title: "Engineer",
				months: 39,
				retired: false
			},
			age: 27
		}
		object2 = {
			name: "Larry",
			breed: "Keeshond",
			age: 4,
			favoriteFood: "Kibble",
			chasesRabbits: true
		}
		object3 = {
			red: 155,
			green: 100,
			blue: 12
		}
	});
	it("merges multiple objects", function() {
		var merged = merge(object1, object2, object3);
		expect(merged.breed).toEqual(object2.breed);
		expect(merged.blue).toEqual(object3.blue);
		expect(merged.profession).toEqual(object1.profession);
	});
	it("gives priority to later objects", function() {
		var merged = merge(object1, object2, object3);
		expect(merged.name).toEqual(object2.name);
		expect(merged.age).toEqual(object2.age);
	});
});
