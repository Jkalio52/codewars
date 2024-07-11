// Exes and Ohs 
// Solution 1 
function XO(str) {
  return str.toLowerCase().charAt('x').length === str.toLowerCase().charAt('o').length;
}



// Or...
function XO(str) {
  // code here
  let x = [];
  let o = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x.push(str[i]);
    } else if (str[i].toLowerCase() === "o") {
      o.push(str[i]);
    }
  }
  
  if (x.length === o.length) {
    return true;
  } else {
    return false;
  }
}






// Other solution I found, looks a lot simpler...
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

