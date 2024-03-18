function fibonacci(n) {
  let previousSum = 0;
  let sum = 1;
  for (let i = 0; i < n; i++) {
    const prev = sum;

    sum += previousSum;
    previousSum = prev;
  }

  return sum;
}

console.log(fibonacci(5)); // 8
