// Exes and Ohs
// Solution 1
function XO(str) {
  return str.toLowerCase().charAt('x').length === str.toLowerCase().charAt('o').length;
}



// Or...
function XO(str) {
  // Initialize storage arrays (This works, but uses O(N) extra memory)
  let x = [];
  let o = [];
  
  // Iterate over every character in the string
  for (let i = 0; i < str.length; i++) {
    // Check for 'x', case-insensitive
    if (str[i].toLowerCase() === "x") {
      x.push(str[i]); // Store the character
    } 
    // Check for 'o', case-insensitive
    else if (str[i].toLowerCase() === "o") {
      o.push(str[i]); // Store the character
    }
  }
  
  // Compare the number of items collected in each array
  if (x.length === o.length) {
    return true;
  } else {
    return false;
  }
}






// I found another solution, and it looks a lot simpler.
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
