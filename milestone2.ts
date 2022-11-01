// This is the data we'll be working with!

interface Volunteer {
  name: string;
  age: number;
  email: string;
  position: "volunteer" | "staff";
  city: string;
  state: string;
}

const userData: Volunteer[] = [
  {
    name: "Joe",
    age: 30,
    email: "joe@email.com",
    position: "volunteer",
    city: "LA",
    state: "CA",
  },
  {
    name: "Jenny",
    age: 24,
    email: "jenny@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Jeff",
    age: 40,
    email: "jeff@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
  {
    name: "Julie",
    age: 34,
    email: "julie@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Lucy",
    age: 21,
    email: "lucy@email.com",
    position: "volunteer",
    city: "SB",
    state: "CA",
  },
  {
    name: "Lee",
    age: 27,
    email: "lee@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Leander",
    age: 29,
    email: "leander@email.com",
    position: "staff",
    city: "SB",
    state: "CA",
  },
  {
    name: "Luna",
    age: 66,
    email: "luna@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
];

// Questions Start Here

// Question 1: Lambda Functions
/* Define a new lambda function that finds the average age of the users in the data. 
  Hint: user data is stored in the userData object above. 
*/
type GetNumber = (data: Volunteer[]) => number;
let findAverage: GetNumber = (data) => {
  const ages = data.filter(datas => datas.age)
  const average = ages.reduce((total, next) => total + next.age, 0) / ages.length;
  return average
}
    

//console.log(findAverage(userData));

// Question 2: Data Handling
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
let findIndexAns: GetNumber = (data) => {
  const ind = data.findIndex(x => x.city === "SF")
  return ind
}

//console.log(findIndexAns(userData));

// Question 3: Filtering data
/* Use data handling function(s) to find all of the volunteers from California (CA) over an age threshold n
 */
type GetVolunteers = (data: Volunteer[], minAge: number) => Volunteer[];
let findCAOverN: GetVolunteers = (data, minAge) => {
  const city = data.filter(x => x.state === "CA")
  const ages = city.filter(y => y.age > minAge)
  return ages
}

//console.log(findCAOverN(userData, 25));

// Question 4: Searching Data
/* Use data handling function(s) to find the first staff member from Santa Barbara (SB)
 */
type GetVolunteer = (data: Volunteer[]) => Volunteer | undefined;
let findSBStaff: GetVolunteer = (data) => {
  const cit = data.find(x => x.city === "SB")
  return cit
}

//console.log(findSBStaff(userData));

// Question 5: Spread Operator Part 1
let kyle: Volunteer = {
  name: "Kyle",
  age: 18,
  email: "kyle@email.com",
  position: "volunteer",
  city: "SD",
  state: "CA",
};

/* Lets make a clone of Kyle above using the spread operator and assign it to kyleClone
 */
type CopyVolunteer = (vol: Volunteer) => Volunteer;
let copyVolunteer: CopyVolunteer = (data) => {
  let cop = {...data}
  return cop
}

let kyleClone: Volunteer = copyVolunteer(kyle);
//console.log(kyleClone);

// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
let updatedLocation = { city: "Seattle", state: "WA" };
var kyleNew: Volunteer;
type UpdateVolunteer = (
  vol: Volunteer,
  updates: Partial<Volunteer>
) => Volunteer;
let updateVolunteer: UpdateVolunteer = (data, updatedLocation) => {
  let copy = {...data, ...updatedLocation}
  return copy
}

var kyleNew = updateVolunteer(kyleClone, updatedLocation);
//console.log(kyleNew);

// Question 7: Object Destructuring
/* Now that we have our updated kyle, lets use object destructuring to get his name, age, and city
 */

type GetVolunteerInfo = (vol: Volunteer) => String;
let getVolunteerInfo: GetVolunteerInfo = (vol) => {
  let [name, age, city] = [vol.name, vol.age, vol.city];
  return `${name} is ${age} years old and lives in ${city}`;
};

let kyleInfo = getVolunteerInfo(kyleNew);
//console.log(kyleInfo);

// Question 8: Putting it All Together!
/* Use all the skills we've covered today to get the first user from 
/* San Luis Obispo (SLO) over the age of 40, and return an updated
/* version of them with their position set to staff. If no one meets
/* these criteria, return undefined
 */

let updatedPosition:{position: "staff" | "volunteer"} = {position: "staff"}
let daBigTest: GetVolunteer = (data) => {
  const city = [data.find(x => x.city == "SLO")]
  const age = city.find(y => y.age > 40)
  return age
}

//console.log(daBigTest(userData));

export {
  Volunteer,
  findAverage,
  findIndexAns,
  findCAOverN,
  findSBStaff,
  copyVolunteer,
  updateVolunteer,
  getVolunteerInfo,
  daBigTest,
};
