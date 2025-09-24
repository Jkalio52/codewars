function descendingOrder(n) {
  //... 
  let numbers = (n + "").split("").sort(function(a, b) {
    return b - a
  });
  numbers = numbers.join("");
    return Number(numbers);
}

