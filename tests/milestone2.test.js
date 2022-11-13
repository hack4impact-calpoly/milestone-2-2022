"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const milestone2_1 = require("../milestone2");
const data_1 = require("./data");
const solutions_1 = require("./solutions");
const testData = [data_1.volunteers, data_1.volunteers2];
(0, globals_1.test)("Question 1: Lambda Functions", () => {
    (0, globals_1.expect)((0, milestone2_1.findAverage)(data_1.volunteers)).toBeCloseTo(38, 0.01);
    (0, globals_1.expect)((0, milestone2_1.findAverage)(data_1.volunteers2)).toBeCloseTo(45.125, 0.01);
});
(0, globals_1.test)("Question 2: Data Handling", () => {
    (0, globals_1.expect)((0, milestone2_1.findIndexAns)(data_1.volunteers)).toBe(4);
    (0, globals_1.expect)((0, milestone2_1.findIndexAns)(data_1.volunteers2)).toBe(-1);
});
(0, globals_1.test)("Question 3: Filtering data", () => {
    // Without age filter
    (0, globals_1.expect)((0, milestone2_1.findCAOverN)(data_1.volunteers, 0)).toEqual(solutions_1.q3allAges);
    (0, globals_1.expect)((0, milestone2_1.findCAOverN)(data_1.volunteers2, 0)).toEqual(solutions_1.q3allAges2);
    // With age filter
    (0, globals_1.expect)((0, milestone2_1.findCAOverN)(data_1.volunteers, 30)).toEqual(solutions_1.q3Over30);
    (0, globals_1.expect)((0, milestone2_1.findCAOverN)(data_1.volunteers2, 75)).toEqual([]);
});
(0, globals_1.test)("Question 4: Searching Data", () => {
    (0, globals_1.expect)((0, milestone2_1.findSBStaff)(data_1.volunteers)).toEqual(data_1.volunteers[2]);
    (0, globals_1.expect)((0, milestone2_1.findSBStaff)(data_1.volunteers2)).toEqual(data_1.volunteers2[7]);
});
(0, globals_1.test)("Question 5: Spread Operator Part 1", () => {
    const volunteer = data_1.volunteers[0];
    (0, globals_1.expect)((0, milestone2_1.copyVolunteer)(volunteer)).toEqual(volunteer); // values should match
    (0, globals_1.expect)((0, milestone2_1.copyVolunteer)(volunteer)).not.toBe(volunteer); // but pointers should not (must be a copy)
});
(0, globals_1.test)("Question 6: Spread Operator Part 2", () => {
    const volunteer = data_1.volunteers[0];
    const update1 = { email: "dboyle@gmail.com" };
    const update2 = { state: "WA", city: "Seattle" };
    (0, globals_1.expect)((0, milestone2_1.updateVolunteer)(volunteer, update1)).toEqual(solutions_1.q6update1);
    (0, globals_1.expect)((0, milestone2_1.updateVolunteer)(volunteer, update2)).toEqual(solutions_1.q6update2);
});
(0, globals_1.test)("Question 7: Object Destructuring", () => {
    const volunteer = data_1.volunteers[0];
    const volunteer2 = data_1.volunteers2[0];
    (0, globals_1.expect)((0, milestone2_1.getVolunteerInfo)(volunteer)).toEqual("Dino is 27 years old and lives in SLO");
    (0, globals_1.expect)((0, milestone2_1.getVolunteerInfo)(volunteer2)).toEqual("Ali is 15 years old and lives in Denver");
});
(0, globals_1.test)("Question 8: Putting it All Together!", () => {
    (0, globals_1.expect)((0, milestone2_1.daBigTest)(data_1.volunteers)).toEqual(solutions_1.q8answer1);
    (0, globals_1.expect)((0, milestone2_1.daBigTest)(data_1.volunteers2)).toEqual(solutions_1.q8answer2);
    (0, globals_1.expect)((0, milestone2_1.daBigTest)([])).toBeUndefined();
});
