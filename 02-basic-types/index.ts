// ###### Basic Types

const n: number = 1;
const s: string = 'hello';
const b: boolean = true;
const o: object = {x: 4};
const a: any = 1;

n - 4             // OK
n - true          // Error

b && !b            // OK

s.split('')       // OK
o.x               // Error!

a.split('')       // OK
a + 1             // OK

// ###### Places Types Can Be Used
// variables
let n2: number;

// parameters and return types
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// class properties
class Person {
  name: string;
  age: number;
}

// Arrays

const numbers: number[] = [1, 2, 3];

numbers[3] = 4;     // OK
numbers[4] = '5';   // Error

// Objects
const person: {name: string, age: number} = {name: 'John', age: 30};

person.age++;         // OK
person.foo = 'bar';   // Error

// ###### Type Inference
let n3 = 1;           // number
let s2 = 'hello';     // string
let b2 = true;        // boolean
let o2 = {x: 4};      // {x: number}

o2.y = 5;           // Error

// Arrays of Objects

const people = [{name: 'John', age: 30}, {name: 'Jane', age: 25}];
const persons: {name: string, age: number}[] = people;

people[0].age++;     // OK
people[1].foo = 'bar'; // Error

// ###### Interfaces
interface Person {
  name: string;
  age: number;
}

const person2: Person = {name: 'John', age: 30};

// Duck Typing!
const people2: Person[] = [person2, person].concat(people);

people2.concat([{firstName: 'Jane', lastName: 'Wow'}]); // Error
