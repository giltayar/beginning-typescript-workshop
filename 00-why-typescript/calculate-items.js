function calculateTotal(items) {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total;
}

// Usage
const order = [{ price: 1.99 }, { price: 5.49 }, { price: 0.99 }];
console.log(calculateTotal(order)); // This works fine and outputs the correct total.

const faultyOrder = [{ price: '1.99' }, { price: '5.49' }, { price: '0.99' }];
console.log(calculateTotal(faultyOrder)); // This will concatenate strings instead of adding numbers.
