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
