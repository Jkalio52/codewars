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






// Clever solution by fr0ggy :) 
const Calculator = function() {
  this.evaluate = s => {
    let e = s;
    const r = /([0-9e.+\-]+) (\*|\/) ([0-9e.+\-]+)/
    const t = /([0-9e.+\-]+) (\+|\-) ([0-9e.+\-]+)/
    while (r.test(e)) e=e.replace(r,(_,x,o,y)=>o=='/'?(+x)/(+y):(+x)*(+y))
    while (t.test(e)) e=e.replace(t,(_,x,o,y)=>o=='-'?(+x)-(+y):(+x)+(+y))
    return +e
  }
};

