// Exes and Ohs
function XO(str) {
  //code here
  let x = [];
  let o = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }
  
  return x === o;
}
