// ### Object Types

const gil: {name: string; age: number} = {name: "Gil Tayar", age: 55};

gil.age           // OK
gil.somethingElse // Error

type Person = {
  name: string;
  age: number;
};

const carmel: Person = {name: "Carmel Egger", age: 40};

interface Person2 {
  name: string;
  age: number;
}

interface Teacher extends Person2 {
  subject: string;
}

const yishayahu: Teacher = {name: "Yishayahu Leibowitz", age: Infinity, subject: "Bible"};


// Subtyping and assignment

const justAPerson: Person = yishayahu; // OK

const anotherTeacher: Teacher = carmel; // Error

