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
    // Helper function to check if a word starts with a lowercase letter.
    // This handles edge cases where words might start with numbers or symbols
    // by ensuring we only compare true alphabetic characters.
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
