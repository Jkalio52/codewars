/*
# Instructions: 

Alphametics is a type of cryptarithm in which a set of words is written down in the form of a long addition sum or some other mathematical problem. The objective is to replace the letters of the alphabet with decimal digits to make a valid arithmetic sum.

For this kata, your objective is to write a function that accepts an alphametic equation in the form of a single-line string and returns a valid arithmetic equation in the form of a single-line string.

# Test Examples
INPUT:    "SEND + MORE = MONEY"
SOLUTION: "9567 + 1085 = 10652"

INPUT:    "ELEVEN + NINE + FIVE + FIVE = THIRTY"
SOLUTION: "797275 + 5057 + 4027 + 4027 = 810386"

Some puzzles may have multiple valid solutions; your function only needs to return one

BIG + CAT = LION
403 + 679 = 1082
326 + 954 = 1280
304 + 758 = 1062
...etc.

# Technical Details

- All alphabetic letters in the input will be uppercase
- Each unique letter may only be assigned to one unique digit
- As a corollary to the above, there will be a maximum of 10 unique letters in any given test
- No leading zeroes
- The equations will only deal with addition with multiple summands on the left side and one term on the right side
- The number of summands will range between 2 and 7, inclusive
- The length of each summand will range from 2 to 8 characters, inclusive
- All test cases will be valid and will have one or more possible solutions
- Full Test Suite: 15 fixed tests, 21 random tests for Python and Ruby / 18 random tests for JavaScript / 28 random tests for Go and C# / 136 random tests for Java / 72 random tests for Kotlin
- Optimize your code -- a naive, brute-force algorithm may time out before the first test completes
- For JavaScript, module and require are disabled, and most prototypes are frozen (except Array and Function)
- For Python, module imports are prohibited
- Python users: Due to the performance of the Python runner, it is advised to attempt solving this kata in another language besides Python.
- Use Python 3.6+ for the Python translation

If you enjoyed this kata, be sure to check out my other katas

Tags: Puzzles Performance Cryptography Algorithms

*/

function alphametics(equation) {
  // Extract all words using a regular expression
  const words = equation.match(/[A-Z]+/g);
  
  // Find all unique characters
  const uniqueChars = Array.from(new Set(words.join('')));
  
  // Track letters that cannot be zero (leading characters of words with length > 1)
  const leadingChars = new Set();
  for (const word of words) {
    if (word.length > 1) {
      leadingChars.add(word[0]);
    }
  }

  // Split the equation into left (summands) and right (target) sides
  const [leftSide, rightSide] = equation.split('=');
  const leftWords = leftSide.match(/[A-Z]+/g);
  const rightWord = rightSide.match(/[A-Z]+/g)[0];

  // Calculate the net coefficient for each character
  const charCoeffs = {};
  for (const char of uniqueChars) {
    charCoeffs[char] = 0;
  }

  // Add weights for the left side
  for (const word of leftWords) {
    for (let i = 0; i < word.length; i++) {
      const char = word[word.length - 1 - i];
      charCoeffs[char] += Math.pow(10, i);
    }
  }

  // Subtract weights for the right side
  for (let i = 0; i < rightWord.length; i++) {
    const char = rightWord[rightWord.length - 1 - i];
    charCoeffs[char] -= Math.pow(10, i);
  }

  // Sort characters by absolute coefficient descending to prune bad branches early
  const sortedChars = uniqueChars.sort((a, b) => Math.abs(charCoeffs[b]) - Math.abs(charCoeffs[a]));

  const usedDigits = new Array(10).fill(false);
  const charToDigit = {};

  // Backtracking function
  function backtrack(idx, currentSum) {
    if (idx === sortedChars.length) {
      return currentSum === 0;
    }

    const char = sortedChars[idx];
    const coeff = charCoeffs[char];
    const startDigit = leadingChars.has(char) ? 1 : 0;

    for (let d = startDigit; d <= 9; d++) {
      if (!usedDigits[d]) {
        usedDigits[d] = true;
        charToDigit[char] = d;

        if (backtrack(idx + 1, currentSum + coeff * d)) {
          return true;
        }

        // Backtrack
        usedDigits[d] = false;
        delete charToDigit[char];
      }
    }
    return false;
  }

  // Run the solver
  if (backtrack(0, 0)) {
    // Replace characters in the original equation with their matched digits
    return equation.replace(/[A-Z]/g, match => charToDigit[match]);
  }

  return "";
}





// Solution #2 
// Optimized Solution Code 
/*
Includes: 
 - Early Failure Detection
 - Pre-Indexed Matrix (columns) 
 - No Frozen Prototype Exploits
*/
function alphametics(equation) {
    // 1. Parse the equation into summands and the target result
    const [leftSide, rightSide] = equation.split(' = ');
    const summands = leftSide.split(' + ');
    const result = rightSide;

    // 2. Track unique letters and constraints
    const lettersSet = new Set();
    const leadingLetters = new Set();

    for (const word of [...summands, result]) {
        leadingLetters.add(word[0]);
        for (const char of word) {
            lettersSet.add(char);
        }
    }

    const uniqueLetters = Array.from(lettersSet);
    if (uniqueLetters.length > 10) return null; // Edge case safety

    // Lookup objects for backtracking state
    const letterToDigit = {};
    const digitToLetter = Array(10).fill(null);

    // 3. Pre-calculate structural column data to avoid string indexing overhead
    const maxLen = Math.max(...summands.map(s => s.length), result.length);
    const columns = [];

    for (let colIdx = 0; colIdx < maxLen; colIdx++) {
        const summandChars = [];
        for (const summand of summands) {
            if (summand.length > colIdx) {
                // Read right-to-left
                summandChars.push(summand[summand.length - 1 - colIdx]);
            }
        }
        const resultChar = result.length > colIdx ? result[result.length - 1 - colIdx] : null;
        columns.push({ summandChars, resultChar });
    }

    // 4. Backtracking function processing column-by-column
    function solve(colIdx, summandCharIdx, currentSum, carry) {
        // If we processed all columns, check if there is any leftover carry
        if (colIdx === columns.length) {
            return carry === 0;
        }

        const { summandChars, resultChar } = columns[colIdx];

        // Step A: Assign digits to all summands in the current column
        if (summandCharIdx < summandChars.length) {
            const char = summandChars[summandCharIdx];
            
            if (letterToDigit[char] !== undefined) {
                // Character already assigned, move to the next summand char in this column
                return solve(colIdx, summandCharIdx + 1, currentSum + letterToDigit[char], carry);
            }

            // Try assigning an available digit
            const startDigit = leadingLetters.has(char) ? 1 : 0;
            for (let d = startDigit; d <= 9; d++) {
                if (digitToLetter[d] === null) {
                    // Make assignment
                    letterToDigit[char] = d;
                    digitToLetter[d] = char;

                    if (solve(colIdx, summandCharIdx + 1, currentSum + d, carry)) {
                        return true;
                    }

                    // Backtrack
                    letterToDigit[char] = undefined;
                    digitToLetter[d] = null;
                }
            }
            return false;
        }

        // Step B: All summands in this column are processed, now evaluate the result character
        const totalSum = currentSum + carry;
        const targetDigit = totalSum % 10;
        const nextCarry = Math.floor(totalSum / 10);

        if (resultChar === null) {
            // Result word is shorter than the current column index
            return totalSum === 0 && solve(colIdx + 1, 0, 0, nextCarry);
        }

        if (letterToDigit[resultChar] !== undefined) {
            // Result character is already assigned
            if (letterToDigit[resultChar] === targetDigit) {
                return solve(colIdx + 1, 0, 0, nextCarry);
            }
            return false;
        } else {
            // Result character is unassigned; try assigning targetDigit to it
            if (digitToLetter[targetDigit] !== null) return false; // Digit taken
            if (targetDigit === 0 && leadingLetters.has(resultChar)) return false; // No leading zeros

            // Make assignment
            letterToDigit[resultChar] = targetDigit;
            digitToLetter[targetDigit] = resultChar;

            if (solve(colIdx + 1, 0, 0, nextCarry)) {
                return true;
            }

            // Backtrack
            letterToDigit[resultChar] = undefined;
            digitToLetter[targetDigit] = null;
            return false;
        }
    }

    // Kick off backtracking from column 0, summand char 0, sum 0, carry 0
    if (solve(0, 0, 0, 0)) {
        // Construct the solution string using our mapping
        return equation.replace(/[A-Z]/g, char => letterToDigit[char]);
    }

    return null;
}

