function listPosition(word) {
  let obj = {}; // Maps unique characters to an index
  let counter = []; // Stores the frequency of each unique character
  let counts = 0;

  word.split("").sort().forEach(function(x) {
      if ( obj[x] == undefined ) {
          obj[x] = counts;
          counter[counts] = 0;
          counts ++;
      }
  });

  let min = 1;
  let sum = min;

  word.split("").reverse().forEach(function(x, i) {
      let step = i + 1, idx = obj[x];
      counter[idx] ++;
      min /= counter[idx];
      for (let j = 0; j < idx; ++j) 
          if (counter[j] != 0) 
              sum += min * counter[j];
      min *= step;
  });

  return sum;
}







// Refactor this to use ES6+ syntax (Map, reduce)...

/**
 * Calculates the lexicographical rank of a string with duplicate characters.
 * Uses the formula: Total Permutations = n! / (n1! * n2! * ... nk!) 
 */
function listPosition(word) {
  const chars = word.split('');
  const sortedUnique = [...new Set(chars)].sort();
  
  // Frequency map for the characters currently in our "suffix" pool
  const counts = new Map(sortedUnique.map(c => [c, 0]));
  
  let rank = 1n; // Use BigInt for large strings to avoid precision issues
  let suffixPermutations = 1n; // Running calculation of (i! / product of counts!)

  // Process word from right to left
  chars.reverse().forEach((char, i) => {
    const step = BigInt(i + 1);
    const currentCharCount = (counts.get(char) || 0) + 1;
    counts.set(char, currentCharCount);

    // Update denominator: divide by the new frequency of the current character
    suffixPermutations /= BigInt(currentCharCount);

    // For every character alphabetically smaller than the current one, 
    // add its contribution to the rank.
    for (const [key, count] of counts) {
      if (key < char && count > 0) {
        rank += (suffixPermutations * BigInt(count));
      }
    }

    // Update numerator: multiply by the next factorial step (i+1)
    suffixPermutations *= step;
  });

  return Number(rank);
}
