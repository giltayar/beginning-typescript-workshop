import {writeFileSync } from 'node:fs';

export function add(num1: number, num2: number) {
  return [1, 2, 3].at(-1) + num1 + num2;
}

console.log(add(1, 2));

writeFileSync(`'test.txt'`, 'Hello, world!');
