"use strict";
console.log('Hello, Bangladesh!');
let palayarName = 'Tamim Iqbal';
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 8));
console.log(palayarName);
const person = {
    name: 'Tamim Iqbal',
    age: 32,
    isCaptain: true
};
// person.country = 'Bangladesh'; // Error: Property 'country' does not exist on type '{ name: string; age: number; isCaptain: boolean; }'
// Explicit type
let playerName;
let playerAge;
let isCaptain;
let data = ['Tamim', 'Mushfiq', 'Shakib', 'Mahmudullah'];
// Union Type
let mixed = ['Tamim', 32, 'Mushfiq', 33, 'Shakib', 34, 'Mahmudullah', 35];
// mixed.push(true ); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
// Any Type
let a = 32;
a = 'Tamim';
console.log(a + ' from any type');
let b = ['Tamim', 32, 'Mushfiq', 33, 'Shakib', 34, 'Mahmudullah', 35];
b.push(true);
// function type 
const myFunc = (a, b, c) => {
    return a + b + c;
};
console.log(myFunc(2, 3, 4));
const userDetails = (id, user) => {
    console.log(`${user.name} has the id of ${id}`);
};
// function signature /
let greet;
greet = (name, greeting) => {
    return `${name} says ${greeting}`;
};
console.log(greet('Tamim', 'Hello'));
let calculate;
calculate = (a, b, action) => {
    if (action === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculate(2, 30, 'minus'));
// class and access modifier
class Player {
    constructor(name, age, isCaptain) {
        this.name = name;
        this.age = age;
        this.isCaptain = isCaptain;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old and he is ${this.isCaptain ? 'captain' : 'not captain'}`;
    }
}
const tamim = new Player('Tamim Iqbal', 32, true);
console.log(tamim.getDetails());
const player1 = {
    name: 'Babar Azam',
    age: 32,
    isCaptain: true
};
console.log(player1);
const player2 = {
    name: 'Babar Azam',
    age: 29,
    isCaptain: true,
    country: 'Pakistan'
};
console.table(player2);
// generics //
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let user = addUID({ name: 'Fakhar Zaman', age: 32 });
console.log(user);
// tuple //
let ourTuple; // fixed length and fixed type
ourTuple = [32, 'Tamim', true];
// enum //
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
let ResourceType1 = ResourceType.PERSON;
console.log(ResourceType1 + ' from enum'); // == 0
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
})(StatusCodes || (StatusCodes = {}));
console.table(StatusCodes.Accepted); // == 202
