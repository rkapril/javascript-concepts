//Higher Order Functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculator(4, 5, add)); //9
console.log(calculator(4, 5, subtract)); //-1
console.log(calculator(4, 5, multiply)); //20
console.log(calculator(4, 5, divide)); //0.8

//Object

var houseKeeper1 = {
  name: "Jane",
  yearsOfExperience: 2,
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
};

console.log("Hello, my name is " + houseKeeper1.name);
// Hello, my name is Jane

//Method using Object

var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function () {
    console.log("May I take your suitcase?");
  },
};

console.log(bellBoy1);
// {
//   name: 'Timmy',
//   age: 19,
//   hasWorkPermit: true,
//   languages: [ 'French', 'English' ],
//   moveSuitcase: [Function: moveSuitcase]
// }

console.log(bellBoy1.moveSuitcase());
// May I take your suitcase?

//Constructor Function

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.agelanguages = languages;
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

console.log(bellBoy1);
// BellBoy {
//   name: 'Timmy',
//   age: 19,
//   hasWorkPermit: true,
//   agelanguages: [ 'French', 'English' ]
// }

function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper("Jane", 10, [
  "bathroom",
  "lobby",
  "bedroom",
]);

console.log(houseKeeper1);
// HouseKeeper {
//   name: 'Jane',
//   yearsOfExperience: 10,
//   cleaningRepertoire: [ 'bathroom', 'lobby', 'bedroom' ]
// }

//Method using Constructor Function

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.agelanguages = languages;
  this.moveSuitcase = function () {
    console.log("May I take your suitcase?");
  };
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

console.log(bellBoy1);
// BellBoy {
//   name: 'Timmy',
//   age: 19,
//   hasWorkPermit: true,
//   agelanguages: [ 'French', 'English' ],
//   moveSuitcase: [Function (anonymous)]
// }

console.log(bellBoy1.moveSuitcase());
// May I take your suitcase?

function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    console.log("Cleaning in progress...");
  };
}

var houseKeeper1 = new HouseKeeper("Jane", 10, [
  "bathroom",
  "lobby",
  "bedroom",
]);

console.log(houseKeeper1);
// HouseKeeper {
//   name: 'Jane',
//   yearsOfExperience: 10,
//   cleaningRepertoire: [ 'bathroom', 'lobby', 'bedroom' ],
//   clean: [Function (anonymous)]
// }

console.log(houseKeeper1.clean());
// Cleaning in progress...

// Callbacks

function anotherAddEventListener(typeOfEvent, callback) {
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener("keypress", function (event) {
  console.log(event);
});

function hello(name, callback) {
  var greet = {
    name,
    greet: "Hello",
  };

  if (greet.name === "Alex") {
    callback(greet);
  }
}

hello("Alex", function (e) {
  console.log(e.greet + " " + e.name);
});
