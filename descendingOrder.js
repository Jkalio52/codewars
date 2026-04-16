function descendingOrder(n) {
  //...
  let numbers = (n + "").split("").sort(function(a, b) {
    return b - a
  });
  numbers = numbers.join("");
    return Number(numbers);
}



/**
* The Refactored/Updated Code. 

* Takes a non-negative integer and returns it with its digits in descending order.
* Follows SOLID principles by keeping the logic concise and functional. 
* Using arrow functions, swapping function(a, b) { ... } for (a, b) => b - a removes boilerplate.
*/
const descendingOrder = (n) => {
  return Number(
    String(n)          // 1. Convert number to string for iteration
      .split('')       // 2. Break string into an array of individual digits
      .sort((a, b) => b - a) // 3. Sort numerically (Descending) using an arrow function
      .join('')        // 4. Reassemble the array back into a string
  );                   //
};
