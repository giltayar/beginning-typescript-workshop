# Exercise 02

- Run `cd 02-basic-types` to go into the folder
- Run `npm install` to install all the dependencies
- Open `exercise/add-strings.ts` in the editor. This is TypeScript code that is not typed.
- Type the minimum number of variables/parameters
- Open two terminals side by side:
  - In the first, run `npm run build`
  - In the second, run `node dist/exercise/add-strings.js`
- Check to see that it transpiles with an error and does not output the correct value. The type error
  will lead you to a bug.
- Fix the bug (hint: use `parseInt` to convert the digit from string to a number)
- Check to see that it now outputs the correct value
- Add types to _all_ the variables
- Run it again to ensure that it's OK
