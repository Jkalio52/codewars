function isPrime(num) {
  // TODO 
  // Loop starts at 2 and checks every single integer up to 'num'
  for (let i = 2; i < num; i++)
    // If 'num' is divisible by 'i' with no remainder, it's not prime
    if (num % i === 0) return false;

  // Primes must be greater than 1
  return num > 1;
}



/**
-The Modern Refactor
* Optimized Primality Test
* Complexity: O(sqrt(n))
* Add a few "guard clauses" to handle even numbers and small primes
*/
