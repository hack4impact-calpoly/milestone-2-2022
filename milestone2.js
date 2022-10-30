"use strict";
exports.__esModule = true;
exports.daBigTest = exports.getVolunteerInfo = exports.updateVolunteer = exports.copyVolunteer = exports.findSBStaff = exports.findCAOverN = exports.findIndexAns = exports.findAverage = void 0;
var userData = [
    {
        name: "Joe",
        age: 30,
        email: "joe@email.com",
        position: "volunteer",
        city: "LA",
        state: "CA"
    },
    {
        name: "Jenny",
        age: 24,
        email: "jenny@email.com",
        position: "volunteer",
        city: "SLO",
        state: "CA"
    },
    {
        name: "Jeff",
        age: 40,
        email: "jeff@email.com",
        position: "volunteer",
        city: "SF",
        state: "CA"
    },
    {
        name: "Julie",
        age: 34,
        email: "julie@email.com",
        position: "volunteer",
        city: "SLO",
        state: "CA"
    },
    {
        name: "Lucy",
        age: 21,
        email: "lucy@email.com",
        position: "volunteer",
        city: "SB",
        state: "CA"
    },
    {
        name: "Lee",
        age: 27,
        email: "lee@email.com",
        position: "volunteer",
        city: "SLO",
        state: "CA"
    },
    {
        name: "Leander",
        age: 29,
        email: "leander@email.com",
        position: "staff",
        city: "SB",
        state: "CA"
    },
    {
        name: "Luna",
        age: 66,
        email: "luna@email.com",
        position: "volunteer",
        city: "SF",
        state: "CA"
    },
];
var findAverage = function (userData) { return userData.reduce(function (acc, cur) { return acc + cur.age; }, 0) / userData.length; }; // Define lambda function here
exports.findAverage = findAverage;
// console.log(findAverage)
console.log(findAverage(userData));
// Question 2: Data Handling
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
var findIndexAns; // Code here
exports.findIndexAns = findIndexAns;
var findCAOverN; // Code here
exports.findCAOverN = findCAOverN;
var findSBStaff; // Code here
exports.findSBStaff = findSBStaff;
//console.log(findSBStaff(userData));
// Question 5: Spread Operator Part 1
var kyle = {
    name: "Kyle",
    age: 18,
    email: "kyle@email.com",
    position: "volunteer",
    city: "SD",
    state: "CA"
};
var copyVolunteer; // Code here
exports.copyVolunteer = copyVolunteer;
// let kyleClone: Volunteer = copyVolunteer(kyle);
//console.log(kyleClone);
// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
var updatedLocation = { city: "Seattle", state: "WA" };
var kyleNew;
var updateVolunteer; // Code here
exports.updateVolunteer = updateVolunteer;
var getVolunteerInfo = function (vol) {
    var name, age, city; // Code here
    return name + " is " + age + " years old and lives in " + city;
};
exports.getVolunteerInfo = getVolunteerInfo;
// let kyleInfo = getVolunteerInfo(kyleNew);
//console.log(kyleInfo);
// Question 8: Putting it All Together!
/* Use all the skills we've covered today to get the first user from
/* San Luis Obispo (SLO) over the age of 40, and return an updated
/* version of them with their position set to staff. If no one meets
/* these criteria, return undefined
 */
var daBigTest; // Code here
exports.daBigTest = daBigTest;
