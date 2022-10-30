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
  /*
  {
    name: "Bob",
    age: 55,
    email: "bob@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  */
];

// Questions Start Here

// Question 1: Lambda Functions
/* Define a new lambda function that finds the average age of the users in the data. 
  Hint: user data is stored in the userData object above. 
*/
type GetNumber = (data: Volunteer[]) => number;
let findAverage: GetNumber = (volunteers) => {
  return volunteers.map(v => v.age) // get all ages of volunteers
  .reduce((x, y) => x + y) / volunteers.length; //add all ages and divide by number of volunteers
 } 

//console.log(findAverage(userData));

// Question 2: Data Handling
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
let findIndexAns: GetNumber = (volunteers) => {
  return volunteers.findIndex(x => x.city === "SF");
}; 

//console.log(findIndexAns(userData));

// Question 3: Filtering data
/* Use data handling function(s) to find all of the volunteers from California (CA) over an age threshold n
 */
type GetVolunteers = (data: Volunteer[], minAge: number) => Volunteer[];
let findCAOverN: GetVolunteers = (volunteers, age) => {
  return volunteers.filter(x => x.state === "CA" && x.age > age);
};

//console.log(findCAOverN(userData, 25));

// Question 4: Searching Data
/* Use data handling function(s) to find the first staff member from Santa Barbara (SB)
 */
type GetVolunteer = (data: Volunteer[]) => Volunteer | undefined;
let findSBStaff: GetVolunteer = (volunteers) => {
  return volunteers.find(x => x.city === "SB")
}; 

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
let copyVolunteer: CopyVolunteer = (person) => {
  return {...person}
} 

let kyleClone: Volunteer = copyVolunteer(kyle);
//console.log(kyleClone);

// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
let updatedLocation = { city: "Seattle", state: "WA" };

type UpdateVolunteer = (
  vol: Volunteer,
  updates: Partial<Volunteer>
) => Volunteer;
let updateVolunteer: UpdateVolunteer = (person, newinfo) => {
  return {...person, ...newinfo}
}; 

let kyleNew = updateVolunteer(kyleClone, updatedLocation);
//console.log(kyleNew);

// Question 7: Object Destructuring
/* Now that we have our updated kyle, lets use object destructuring to get his name, age, and city
 */

type GetVolunteerInfo = (vol: Volunteer) => String;
let getVolunteerInfo: GetVolunteerInfo = (vol) => {
  let {name, age, city} = vol;
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

let daBigTest: GetVolunteer = (volunteers) => {
  let original: Volunteer | undefined = volunteers.find(x => x.city === "SLO" && x.age > 40);
  return (original === undefined ? undefined : {...original, ...{position: "staff"} });
}

console.log(daBigTest(userData));

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
