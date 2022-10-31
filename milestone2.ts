// This is the data we'll be working with!

interface Volunteer {
  name: string;
  age: number;
  email: string;
  position: "volunteer" | "staff";
  city: string;
  state: string;
}
const volunteers: Volunteer[] = [
  {
    name: "Dino",
    age: 27,
    email: "Dino_Boyle@hotmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Elyse",
    age: 36,
    email: "Elyse_Abernathy70@yahoo.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Cicero",
    age: 45,
    email: "Cicero_Monahan90@yahoo.com",
    position: "volunteer",
    city: "SB",
    state: "CA",
  },
  {
    name: "Harmony",
    age: 27,
    email: "Harmony68@gmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Melody",
    age: 32,
    email: "Melody.Abbott@yahoo.com",
    position: "staff",
    city: "SF",
    state: "CA",
  },
  {
    name: "Damian",
    age: 63,
    email: "Damian.Herzog@gmail.com",
    position: "volunteer",
    city: "Denver",
    state: "CO",
  },
  {
    name: "Florence",
    age: 20,
    email: "Florence87@gmail.com",
    position: "staff",
    city: "SD",
    state: "CA",
  },
  {
    name: "Grayson",
    age: 59,
    email: "Grayson41@hotmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Alexzander",
    age: 31,
    email: "Alexzander23@hotmail.com",
    position: "staff",
    city: "LA",
    state: "CA",
  },
  {
    name: "Brycen",
    age: 14,
    email: "Brycen.Cormier26@hotmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Pearl",
    age: 34,
    email: "Pearl_Sporer@yahoo.com",
    position: "volunteer",
    city: "Denver",
    state: "CO",
  },
  {
    name: "Vern",
    age: 57,
    email: "Vern57@gmail.com",
    position: "staff",
    city: "LA",
    state: "CA",
  },
  {
    name: "Annetta",
    age: 49,
    email: "Annetta.Wilkinson93@gmail.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
  {
    name: "Delaney",
    age: 30,
    email: "Delaney.Kris41@gmail.com",
    position: "volunteer",
    city: "Denver",
    state: "CO",
  },
  {
    name: "Clint",
    age: 46,
    email: "Clint.Lemke@hotmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
];

const volunteers2: Volunteer[] = [
  {
    name: "Ali",
    age: 15,
    email: "Ali_Romaguera@hotmail.com",
    position: "staff",
    city: "Denver",
    state: "CO",
  },
  {
    name: "Patsy",
    age: 42,
    email: "Patsy_Hansen@hotmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Skye",
    age: 47,
    email: "Skye.Hudson80@gmail.com",
    position: "volunteer",
    city: "Seattle",
    state: "WA",
  },
  {
    name: "Kenya",
    age: 35,
    email: "Kenya_Johns8@yahoo.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Rossie",
    age: 63,
    email: "Rossie.Purdy@hotmail.com",
    position: "staff",
    city: "Seattle",
    state: "WA",
  },
  {
    name: "Liliane",
    age: 34,
    email: "Liliane_Cronin@gmail.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Alden",
    age: 55,
    email: "Alden.Emmerich@yahoo.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Milton",
    age: 70,
    email: "Milton_Kiehn7@yahoo.com",
    position: "volunteer",
    city: "SB",
    state: "CA",
  },
];
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
  let avg = 0; 
  for(let i = 0; i < data.length; i++){
    avg = avg + data[i].age;
  }
  return avg/data.length; 
}; // Define lambda function here

//console.log(findAverage(userData));

// Question 2: Data Handling
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
//type GetCity = (data: Volunteer[]) => string;

let findIndexAns: GetNumber = (data) => {
  let i = 0;
  let j = data[i].city;
  
  while((j !== "SF" && i !== data.length -1)){
    i++; 
    j = data[i].city;
  }
  if(j === "SF"){
    return i; 
  }else{
    return -1; 
  }
}; // Code here

//console.log(findIndexAns(userData));

// Question 3: Filtering data
/* Use data handling function(s) to find all of the volunteers from California (CA) over an age threshold n
 */
type GetVolunteers = (data: Volunteer[], minAge: number) => Volunteer[];
let findCAOverN: GetVolunteers = (data, n) =>{
  //console.log(minAge);
    data = data.filter(x => ((x.position === "volunteer" || x.position === "staff") && (x.age > n) && (x.state === "CA")));
    return data; 
}; // Code here

//console.log(findCAOverN(volunteers, 0));

// Question 4: Searching Data
/* Use data handling function(s) to find the first staff member from Santa Barbara (SB)
 */
type GetVolunteer = (data: Volunteer[]) => Volunteer | undefined;
let findSBStaff: GetVolunteer = (data) =>{
  const find = data.find(data => data.city === "SB");
  return find; 
}; // Code here

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
let copyVolunteer: CopyVolunteer = (kyle) =>{ 
  const ret = {...kyle};
  return ret;
}; // Code here

let kyleClone: Volunteer = copyVolunteer(kyle);
//console.log(kyleClone);

// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
let updatedLocation = { city: "Seattle", state: "WA" };
let kyleNew: Volunteer;
type UpdateVolunteer = (
  vol: Volunteer,
  updates: Partial<Volunteer>
) => Volunteer;
let updateVolunteer: UpdateVolunteer = (vol, updates) =>{
  //const ret = {...vol, email: updates.email, city:updates.city, state: updates.state};
  const myName = "name";
  let volr;
  if(myName in updates){
    volr = {name: updates.name, ...vol};
    return volr;
  }
  const myAge = "age";
  if(myAge in updates){
    volr = {...vol, age: updates.age};
    return volr;
  }
  const myEmail = "email";
  if(myEmail in updates){
    volr =  {...vol, email: updates.email};
    return volr;
  }
  const myPosition = "position";
  if(myPosition in updates){
    volr = {...vol, position: updates.position};
    return volr;
  }

  const myCity = "city";
  const myState = "state";

  volr = {...vol, city: updates.city, state: updates.state};
  return volr; 

}; // Code here

//kyleNew = updateVolunteer(kyleClone, updatedLocation);
//console.log(kyleNew);

// Question 7: Object Destructuring
/* Now that we have our updated kyle, lets use object destructuring to get his name, age, and city
 */

type GetVolunteerInfo = (vol: Volunteer) => String;
let getVolunteerInfo: GetVolunteerInfo = (vol) => {
  let name, age, city; // Code here
  name = vol.name;
  age = vol.age;
  city = vol.city;
  return `${name} is ${age} years old and lives in ${city}`;
};

// let kyleInfo = getVolunteerInfo(kyleNew);
//console.log(kyleInfo);

// Question 8: Putting it All Together!
/* Use all the skills we've covered today to get the first user from 
/* San Luis Obispo (SLO) over the age of 40, and return an updated
/* version of them with their position set to staff. If no one meets
/* these criteria, return undefined
 */

let daBigTest: GetVolunteer = (vol) => {

  let data = vol.find(x => x.age > 40 && x.city === "SLO");
  if(data === undefined){
    return undefined;
  }
  data.position = "staff";
  return data; 

}; // Code here

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
