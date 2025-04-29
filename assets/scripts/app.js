// import { apiKey } from "./util.js";
// import apiKey2 from "./util.js";
import * as utils from "./util.js"; //grouping all variable into an object

// console.log("API_KEY: " + utils.apiKey);
// console.log("ADDRESS: " + utils.address);
// console.log("API_KEY(second): " + utils.default);

//OBJECT

const user = {
  username: "Watanabe",
  age: 28,
  greet() {
    console.log("Heloo " + this.username);
  },
};

// console.log(user);
// user.greet();

//CLASS it used as a blueprint to create an object

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Heloo. My name is " + this.name + " and i'm " + this.age + " years old.");
  }
}

const user1 = new User("Watanabe Toru", 25);
// console.log(user1);
// user1.greet();

//ARRAY

const hobbies = ["Work out", "Reading", "Coding", "Fishing"];

// console.log(hobbies);

//long version of findIndex method
const index = hobbies.findIndex((item) => {
  return item === "Coding";
});

//short version of findIndex method
const index1 = hobbies.findIndex((item) => item === "Reading");

// console.log(index);

//map method in array
// it used to transform any item in array to any other kind of item
// this concept very often used when working with React

//instance

const editedHobbies = hobbies.map((item) => "!" + item);
const convertToObject = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies);
// console.log(convertToObject);

//DESTRUCTURING

//destructuring in array
const [firstName, lastName] = ["Watanabe", "Toru"];

// console.log(firstName);
// console.log(lastName);

//destructuring in object
const { name, age, job } = {
  name: "Watanabe Toru",
  age: 22,
  job: "Student",
};

// console.log("Full Name: " + name + "\nAge: " + age + "\nJob: " + job);

//SPREAD OPERATOR
const jobs = ["student", "lecturer", "president", "class rep."];
const newJobs = ["admin", "assistant"];

const mergedJobs = [...jobs, ...newJobs];

// console.log(mergedJobs);
// console.log(jobs);

const student = {
  name: "Nagasawa",
  age: 23,
  job: "student",
};

const cClass = {
  isClass: true,
  ...student,
};

// console.log(cClass);

//CONTROL STRUCTURES

// const input = prompt("Your name: ");

// if (input === "watanabe") {
//   alert("Hello " + input);
// } else if (input === "nagasawa") {
//   alert("Hello " + input);
// } else {
//   alert("Who are you??");
// }

for (const job of jobs) {
  console.log(job);
}
