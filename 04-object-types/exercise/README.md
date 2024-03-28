# 04 Exercise

- Run `cd 04-object-types` to go into the folder
- Run `npm install` to install all the dependencies
- The `cart-service.ts` is a backend that saves shopping carts and their items
- It has a bug
- Open two terminals side by side:
  - In the first, run `npm run build`
  - In the second, run `npm test`
- This runs the tests in `cart-service.test.ts` - you can see that they fail.
- To find the bug, just add types!
- Add the _minimum_ amount of types this time
- The bug should become apparent, so fix it!
- Now the tests should pass 🎉
