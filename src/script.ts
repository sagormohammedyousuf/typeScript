console.log('Hello, Bangladesh!');

let palayarName = 'Tamim Iqbal';

const multiply = (a: number, b: number) => {
  return a * b;
}

console.log(multiply( 4 , 8));

console.log(palayarName);

const person = {
  name: 'Tamim Iqbal',
  age: 32,
  isCaptain: true
}

// person.country = 'Bangladesh'; // Error: Property 'country' does not exist on type '{ name: string; age: number; isCaptain: boolean; }'


// Explicit type

let playerName: string;
let playerAge: number;
let isCaptain: boolean;

let data: string[] = ['Tamim', 'Mushfiq', 'Shakib', 'Mahmudullah'];


// Union Type

let mixed: (string | number)[] = ['Tamim', 32, 'Mushfiq', 33, 'Shakib', 34, 'Mahmudullah', 35];

// mixed.push(true ); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'



// Any Type

let a: any = 32;

a = 'Tamim';
console.log(a + ' from any type');



let b: any[] = ['Tamim', 32, 'Mushfiq', 33, 'Shakib', 34, 'Mahmudullah', 35];

b.push(true);




// function type 

const myFunc = (a: number, b: number, c: number) => {
  return a + b + c
}

console.log(myFunc(2, 3, 4));



// type aliase //

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };
type objWithNameAndAge = { name: string, age: number };

const userDetails = (id: StringOrNum, user: objWithName) => {
  console.log(`${user.name} has the id of ${id}`);
}


// function signature /

let greet: (a: string, b: string) => string;

greet = (name: string, greeting: string) => {
  return `${name} says ${greeting}`;
}

console.log(greet('Tamim', 'Hello'));


let calculate: (a: number, b: number, c: string) => number;

calculate = (a: number, b: number, action: string) => {
  if (action === 'add') {
    return a + b;
  } else {
    return a - b;
  }
}

console.log(calculate(2, 30, 'minus'));


// class and access modifier

class Player {
  constructor( 
    private name: string,
    public age: number,
    readonly isCaptain: boolean) {}

  getDetails() {
    return `${this.name} is ${this.age} years old and he is ${this.isCaptain ? 'captain' : 'not captain'}`;
  }
}


const tamim = new Player('Tamim Iqbal', 32, true);

console.log(tamim.getDetails());

// tamim.name = 'Tamim Iqbal Khan';

// console.log(tamim.name + ' from class');


// interface 

interface PlayerInterface {
  name: string;
  age: number;
  isCaptain: boolean;
}

const player1: PlayerInterface = {
  name: 'Babar Azam',
  age: 32,
  isCaptain: true
}

console.log(player1);

// extending interface

interface PlayerInterface2 extends PlayerInterface {
  country: string;
}

const player2: PlayerInterface2 = {
  name: 'Babar Azam',
  age: 29,
  isCaptain: true,
  country: 'Pakistan'
}

console.table(player2);


// generics //

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let user = addUID({ name: 'Fakhar Zaman', age: 32 });

console.log(user);


// tuple //

let ourTuple:  [number, string , boolean]; // fixed length and fixed type

ourTuple = [32 ,'Tamim' , true];

// enum //

enum ResourceType { BOOK =  1, AUTHOR, FILM, PERSON } 

let ResourceType1 = ResourceType.PERSON;

console.log(ResourceType1 + ' from enum'); // == 0


enum StatusCodes {
  NotFound = 404,
  BadRequest = 400,
  Success = 200,
  Accepted = 202
}

console.table(StatusCodes.Accepted); // == 202



// practice season //

let username : string = 'Sagor Hossain';
let age : number = 32;
let isCaptain1 : boolean = true;
// Array //

let numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// tuples 

let user4 : [number, string, boolean] = [32, 'Sagor Hossain', true];

// object 

let person6 : { name: string, age: number, isCaptain: boolean } = {  
  name: 'Sagor Hossain', age: 32, isCaptain: true 
};  


// union type //

let id : string | number ;

id = 32;
id = 'Sagor Hossain';


// fuction type //

function adder (a: number, b: number ) : number {
  return a + b;
}

// inerface //

interface Player7 {
  name: string;
  age: number;
  isCaptain: boolean;
}

const player8 : Player7 = {
  name: 'Sagor Hossain',
  age: 32,
  isCaptain: true
}


// alias //

type user = {
  id : number;
  name : string;
}

type admin = user & { role: string };


// enum//
enum userRole {
  admin, 
  user,
  guest,
}

const userRole1: userRole = userRole.admin;


// generics //

function identity <T> (value: T) : T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));