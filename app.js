// We use strict mode
"use strict";

// Creating an array of contacts in a variable called contacts
const contacts = [
  {
    id: 1,
    name: "Janetta Klemke",
    birthdate: new Date("9 / 25 / 1993"),
    children: 3,
    country: "Ivory Coast",
    can_program: false,
  },
  {
    id: 2,
    name: "Abdul Tilbrook",
    birthdate: new Date("12 / 10 / 1998"),
    children: 5,
    country: "Albania",
    can_program: true,
  },
  {
    id: 3,
    name: "Mabelle Bettleson",
    birthdate: new Date("9 / 29 / 1964"),
    children: 4,
    country: "Ukraine",
    can_program: false,
  },
  {
    id: 4,
    name: "Loutitia Headan",
    birthdate: new Date("3 / 3 / 1987"),
    children: 2,
    country: "Czech Republic",
    can_program: false,
  },
  {
    id: 5,
    name: "Kelli Burbudge",
    birthdate: new Date("5 / 13 / 1990"),
    children: 4,
    country: "Saudi Arabia",
    can_program: true,
  },
  {
    id: 6,
    name: "Trudie Luebbert",
    birthdate: new Date("6 / 7 / 1979"),
    children: 4,
    country: "Reunion",
    can_program: true,
  },
  {
    id: 7,
    name: "Reggi Elphey",
    birthdate: new Date("12 / 3 / 1955"),
    children: 4,
    country: "Brazil",
    can_program: true,
  },
  {
    id: 8,
    name: "Doretta Essam",
    birthdate: new Date("4 / 27 / 2001"),
    children: 0,
    country: "France",
    can_program: false,
  },
  {
    id: 9,
    name: "Joye Coy",
    birthdate: new Date("4 / 2 / 1982"),
    children: 2,
    country: "Albania",
    can_program: true,
  },
  {
    id: 10,
    name: "Lavina Dhillon",
    birthdate: new Date("4 / 17 / 1990"),
    children: 0,
    country: "Bulgaria",
    can_program: true,
  },
];

// Outputs how many children all people have
for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i].name + " has " + contacts[i].children + " kids");
}

//Outputs one string per person formatted <Name>: <Age>
let i = 0;
while (i < contacts.length) {
  console.log(contacts[i].name + ": " + calculateAge(contacts[i].birthdate));
  i++;
}
// copy paste from internet
// https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-between-two-dates
function calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

contacts.forEach((contact) => {
  for (let property in contact) {
    console.log(property + " " + contact[property]);
  }
});
