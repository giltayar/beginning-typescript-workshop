// ###### Basic Types

const n: number = 1;
const s: string = 'hello';
const b: boolean = true;
const o: object = {x: 4};
const a: any = 1;

n - 4             // OK
n - true          // Error

s.split('')       // OK

o.x               // Error!

b && !b            // OK

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

  constructor() {
    this.name = '';
     this.age = 0;
  }
}

/// ##### Type Inference

????

