# Installing and Configuring TypeScript

```sh
$ npm init -y
```

* `type: module`

```sh
$ npm install --save-dev typescript
```

```jsonc
{
  "compilerOptions": {
    "module": "ESNext", // inpput is ESM
    "moduleResolution": "Node", // you can find modules using the regular Node.js way (`node_modules` etc)
    "target": "ESNext", // output is JavaScript without transpilation to older version
    "lib": ["ESNext"], // std library is ESNext
    "outDir": "dist",
  }
}
```

```sh
$ npm install --save-dev @types/node # so it can know about `console.log` and `node` imports
```

```ts
import {writeFileSync } from 'node:fs';

export function add(num1: number, num2: number) {
  return [1, 2, 3].at(-1) + num1 + num2;
}

console.log(add(1, 2));

writeFileSync('test.txt', 'Hello, world!');
```

```sh
$ npx tsc
```