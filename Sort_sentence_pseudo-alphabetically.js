/** 
Given a standard English sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

All words that begin with a lowercase letter should be at the beginning of the sorted sentence, and sorted in ascending order.
All words that begin with an uppercase letter should come after that, and should be sorted in descending order.
If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

Example:
For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!", your method should return 
"and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut". 
Lower case letters are sorted a -> l -> l -> o -> o -> t, and upper case letters are sorted V -> T -> O -> M -> L -> C.
*/
function sort(sentence) {
  // 1. Clean the string: remove all non-alphanumeric characters (except spaces) 
  // and convert the string into an array of words.
  const words = sentence
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim()
    .split(" ");

  // 2. Sort the array using a custom comparison function.
  words.sort((a, b) => {
    const isLower = (word) => /^[a-z]/.test(word);

    const isALower = isLower(a);
    const isBLower = isLower(b);

    // Rule 1 & 2: Grouping by case (lower comes before upper)
    if (isALower && !isBLower) {
      return -1; // A (lower) comes before B (upper)
    }
    if (!isALower && isBLower) {
      return 1; // B (lower) comes before A (upper)
    }

    // Rule 3: Within the same case group, apply specific sorting logic.
    if (isALower && isBLower) {
      // Both are lowercase: sort ascending (a -> z)
      return a.localeCompare(b);
    } else {
      // Both are uppercase: sort descending (Z -> A)
      // We flip the arguments for localeCompare to get descending order.
      return b.localeCompare(a);
    }
  });

  // 3. Join the sorted words back into a single sentence string.
  return words.join(" ");
}
