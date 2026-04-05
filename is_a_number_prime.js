function isPrime(num) {
  // TODO 
  // Loop starts at 2 and checks every single integer up to 'num'
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}
