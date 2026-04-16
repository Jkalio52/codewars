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
