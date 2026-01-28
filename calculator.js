const Calculator = function() {
  this.evaluate = string => {
    // do code here 
    // let numbers = string.split(/,|\n/).map(Number) 
    // return numbers.reduce((a, b) => a + b) 
    
    let arr = string.split(' ');
    while (arr.length > 1) {
      // Multiplication and division have priority 
      // Create a new array that will only have numbers and + or - 
      const ops = arr.findIndex(a => a === "*" || a === "/");
      const index =
        ops === -1 ? arr.findIndex(b => b === "+" || b === "-") : ops;
      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);
      const calc =
        arr[index] === "/"
          ? a / b
          : arr[index] === "*"
          ? a * b
          : arr[index] === "-"
          ? a - b
          : a + b;
      arr.splice(index - 1, 3, calc);
    }
    
    return Number(arr[0])
  };
};

