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
const isPrime = (num) => {
  // 1. Guard clauses for efficiency and edge cases
  if (num <= 1) return false; // Negatives, 0, and 1 are not prime
  if (num <= 3) return true;  // 2 and 3 are prime
  
  // 2. Quickly eliminate even numbers and multiples of 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // 3. Optimized loop: check up to the square root
  // We use i += 6 to skip numbers divisible by 2 and 3 (6k ± 1 rule)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};
