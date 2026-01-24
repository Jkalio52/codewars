function toCamelCase(str) {
  const regExp = /[-_]\w/ig;
  return str.replace(regExp, function(match) {
    
    return match.charAt(1).toUpperCase();
  });
}




/**
 * Converts a dash or underscore delimited string to camelCase.
 * Example: "the-stealth-warrior" -> "theStealthWarrior"
 */
function toCamelCase(str) {
  // Matches a hyphen or underscore followed by a word character.
  // Flags: 'i' (ignore case), 'g' (global/all occurrences).
  const regExp = /[-_]\w/ig; 

  // String.replace() calls the callback for every match found.
  return str.replace(regExp, function(match) {
    // 'match' will be strings like "-s" or "_w".
    // .charAt(1) picks the letter after the delimiter and uppercases it.
    return match.charAt(1).toUpperCase();
  });
}





/**
 * Refactored: Modern, concise, and handles edge cases.
 */
const toCamelCase = (str) => {
  if (!str) return ""; // Guard clause for empty/null strings

  // Regex matches delimiter (dash/underscore) and captures the following letter
  return str.replace(/[-_]([a-z0-9])/ig, (_, letter) => 
    letter.toUpperCase()
  );
};

// Example Usage
console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"






// Alternative solution with just two lines of code 
function toCamelCase(str) {
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}
