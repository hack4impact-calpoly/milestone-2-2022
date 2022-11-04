"use strict";
// This is the data we'll be working with!
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var sum = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var value = data_1[_i];
        sum += value.age;
    }
    return sum / data.length;
};
exports.findAverage = findAverage;
var findIndexAns = function (data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].city);
        if (data[i].city === "SF")
            return i;
    }
    return -1;
};
exports.findIndexAns = findIndexAns;
//console.log(findIndexAns(userData));
// Question 3: Filtering data
/* Use data handling function(s) to find all of the volunteers from California (CA) over an age threshold n
 */
var finalLst = [];
var findCAOverN = function (userData, n) {
    return userData.filter(function (volunteer) { return volunteer.age > n && volunteer.state === "CA"; });
};
exports.findCAOverN = findCAOverN;
var findSBStaff = function (userData) {
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].city === "SB") {
            return userData[i];
        }
    }
};
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
var copyVolunteer = function (vol) {
    var newPerson = __assign({}, vol);
    return newPerson;
};
exports.copyVolunteer = copyVolunteer;
var kyleClone = copyVolunteer(kyle);
//console.log(kyleClone);
// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
var updatedLocation = { city: "Seattle", state: "WA" };
var kyleNew;
var updateVolunteer = function (vol, updates) {
    var kyleNew = __assign(__assign({}, vol), updates);
    return kyleNew;
};
exports.updateVolunteer = updateVolunteer;
kyleNew = updateVolunteer(kyleClone, updatedLocation);
console.log(kyleNew);
var getVolunteerInfo = function (vol) {
    var name = vol.name, age = vol.age, city = vol.city;
    return "".concat(name, " is ").concat(age, " years old and lives in ").concat(city);
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
var updatedPosition = { position: "staff" };
var daBigTest = function (volLst) {
    for (var i = 0; i < volLst.length; i++) {
        if (volLst[i].city === "SLO" && volLst[i].age > 40) {
            var newVol = __assign({}, volLst[i]);
            newVol.position = 'staff';
            return newVol;
        }
    }
};
exports.daBigTest = daBigTest;
console.log(daBigTest(userData));
