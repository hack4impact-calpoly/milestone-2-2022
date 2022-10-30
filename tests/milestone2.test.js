"use strict";
exports.__esModule = true;
var globals_1 = require("@jest/globals");
var milestone2_1 = require("../milestone2");
var data_1 = require("./data");
var solutions_1 = require("./solutions");
var testData = [data_1.volunteers, data_1.volunteers2];
globals_1.test("Question 1: Lambda Functions", function () {
    globals_1.expect(milestone2_1.findAverage(data_1.volunteers)).toBeCloseTo(38, 0.01);
    globals_1.expect(milestone2_1.findAverage(data_1.volunteers2)).toBeCloseTo(45.125, 0.01);
});
globals_1.test("Question 2: Data Handling", function () {
    globals_1.expect(milestone2_1.findIndexAns(data_1.volunteers)).toBe(4);
    globals_1.expect(milestone2_1.findIndexAns(data_1.volunteers2)).toBe(-1);
});
globals_1.test("Question 3: Filtering data", function () {
    // Without age filter
    globals_1.expect(milestone2_1.findCAOverN(data_1.volunteers, 0)).toEqual(solutions_1.q3allAges);
    globals_1.expect(milestone2_1.findCAOverN(data_1.volunteers2, 0)).toEqual(solutions_1.q3allAges2);
    // With age filter
    globals_1.expect(milestone2_1.findCAOverN(data_1.volunteers, 30)).toEqual(solutions_1.q3Over30);
    globals_1.expect(milestone2_1.findCAOverN(data_1.volunteers2, 75)).toEqual([]);
});
globals_1.test("Question 4: Searching Data", function () {
    globals_1.expect(milestone2_1.findSBStaff(data_1.volunteers)).toEqual(data_1.volunteers[2]);
    globals_1.expect(milestone2_1.findSBStaff(data_1.volunteers2)).toEqual(data_1.volunteers2[7]);
});
globals_1.test("Question 5: Spread Operator Part 1", function () {
    var volunteer = data_1.volunteers[0];
    globals_1.expect(milestone2_1.copyVolunteer(volunteer)).toEqual(volunteer); // values should match
    globals_1.expect(milestone2_1.copyVolunteer(volunteer)).not.toBe(volunteer); // but pointers should not (must be a copy)
});
globals_1.test("Question 6: Spread Operator Part 2", function () {
    var volunteer = data_1.volunteers[0];
    var update1 = { email: "dboyle@gmail.com" };
    var update2 = { state: "WA", city: "Seattle" };
    globals_1.expect(milestone2_1.updateVolunteer(volunteer, update1)).toEqual(solutions_1.q6update1);
    globals_1.expect(milestone2_1.updateVolunteer(volunteer, update2)).toEqual(solutions_1.q6update2);
});
globals_1.test("Question 7: Object Destructuring", function () {
    var volunteer = data_1.volunteers[0];
    var volunteer2 = data_1.volunteers2[0];
    globals_1.expect(milestone2_1.getVolunteerInfo(volunteer)).toEqual("Dino is 27 years old and lives in SLO");
    globals_1.expect(milestone2_1.getVolunteerInfo(volunteer2)).toEqual("Ali is 15 years old and lives in Denver");
});
globals_1.test("Question 8: Putting it All Together!", function () {
    globals_1.expect(milestone2_1.daBigTest(data_1.volunteers)).toEqual(solutions_1.q8answer1);
    globals_1.expect(milestone2_1.daBigTest(data_1.volunteers2)).toEqual(solutions_1.q8answer2);
    globals_1.expect(milestone2_1.daBigTest([])).toBeUndefined();
});
