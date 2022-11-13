"use strict";
// This is the data we'll be working with!
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
var findAverage = function (data) {
    var running_age_sum = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var volunteer = data_1[_i];
        running_age_sum += volunteer.age;
    }
    return running_age_sum / data.length;
}; // Define lambda function here
exports.findAverage = findAverage;
//console.log(findAverage(userData));
// Question 2: Data Handling
// Please AVOID USING FOR LOOPS for questions 2 through 4
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
var findIndexAns = function (data) {
    var cities = data.map(function (volunteer) { return volunteer.city; });
    // Note to self: if brackets are present in body of lambda method, a return statement 
    // is necessary.
    return cities.findIndex(function (city) { return city === "SF"; });
}; // Code here
exports.findIndexAns = findIndexAns;
var findCAOverN = function (data, minAge) {
    return data.filter(function (v) { return v.age > minAge && v.state == "CA"; });
};
exports.findCAOverN = findCAOverN;
console.log(findCAOverN(userData, 25));
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
var updateVolunteer; // Code here
exports.updateVolunteer = updateVolunteer;
var getVolunteerInfo = function (vol) {
    var name, age, city; // Code here
    return "".concat(name, " is ").concat(age, " years old and lives in ").concat(city);
};
exports.getVolunteerInfo = getVolunteerInfo;
// let kyleInfo = getVolunteerInfo(kyleNew);
//console.log(kyleInfo);
// Question 8: Putting it All Together!
/* Use all the skills we've covered today to get the *first* person from
/* San Luis Obispo (SLO) over the age of 40, and return an updated
/* version of them with their position set to staff. If no one meets
/* these criteria, return undefined
 */
var daBigTest; // Code here
exports.daBigTest = daBigTest;
