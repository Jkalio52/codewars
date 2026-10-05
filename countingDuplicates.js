/*
Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

StringsFundamentals
*/

function duplicateCount(text) {
    // 1. Convert the entire string to lowercase to handle case-insensitivity
    const lowerText = text.toLowerCase();
    
    // 2. Track the character frequencies in an object lookup map
    const charCounts = {};
    let duplicateCounter = 0;
    
    for (const char of lowerText) {
        charCounts[char] = (charCounts[char] || 0) + 1;
        
        // 3. Increment the counter exactly when a character is found a second time
        if (charCounts[char] === 2) {
            duplicateCounter++;
        }
    }
    
    return duplicateCounter;
}




/*
Alternative Compact Approach -- Using ES6 Sets. 

Because I prefer a shorter, more functional layout, I can utilize the Set object to automatically isolate unique characters.
*/
function duplicateCount(text) {
    const lowerText = text.toLowerCase().split('');
    return [...new Set(lowerText)].filter(char => 
        lowerText.indexOf(char) !== lowerText.lastIndexOf(char)
    ).length;
}

