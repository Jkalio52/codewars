/**
Multiplying numbers as strings: Part II

This is the Part II of Multiplying numbers as strings.

TODO
Multiply two numbers! Simple!

Rules
1. The arguments are passed as strings.
2. The numbers will be very large
3. The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
4. Answer should be returned as a string
5. The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
6. Zero should not be signed and "-0.0" should be simply returned as "0".

Tags: Strings BigIntegers Fundamentals
*/

const multiply = (n, o) => {
  // 1. Determine final sign (negative if only ONE number is negative)
  const isNegative = n.startsWith('-') !== o.startsWith('-');

  // 2. Strip the signs for the raw calculation
  n = n.replace(/^-/, '');
  o = o.replace(/^-/, '');

  // 3. Count total decimal places across both strings, then strip the dots
  const decN = n.indexOf('.') !== -1 ? n.length - n.indexOf('.') - 1 : 0;
  const decO = o.indexOf('.') !== -1 ? o.length - o.indexOf('.') - 1 : 0;
  const totalDecimals = decN + decO;

  n = n.replace('.', '');
  o = o.replace('.', '');

  // 4. Early exit: If either normalized number is purely zeros, return '0' (Unsigned)
  if (/^0+$/.test(n) || /^0+$/.test(o)) return '0';

  // 5. Initialize an array to hold the calculated digits
  const result = Array(n.length + o.length).fill(0);

  // 6. Core Algorithm: Multiply digit by digit from right to left
  for (let i = n.length - 1; i >= 0; i--) {
    for (let j = o.length - 1; j >= 0; j--) {
      const mul = (n[i] - '0') * (o[j] - '0');
      const sum = mul + result[i + j + 1];

      // Store the single digit and carry the remainder to the next column
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // 7. Convert array back to a string and strip any leading zeros
  let resStr = result.join('').replace(/^0+/, '');

  // 8. Re-insert the decimal point if needed
  if (totalDecimals > 0) {
    // Pad left with zeros if the product string is too short
    if (resStr.length <= totalDecimals) {
      resStr = resStr.padStart(totalDecimals + 1, '0');
    }
    
    // Slice to surgically insert the decimal
    const insertPos = resStr.length - totalDecimals;
    resStr = `${resStr.slice(0, insertPos)}.${resStr.slice(insertPos)}`;

    // Clean up trailing zeros and rogue decimal points at the end
    resStr = resStr.replace(/0+$/, '').replace(/\.$/, '');
  }

  // 9. Prepend the negative sign if applicable and return
  return (isNegative ? '-' : '') + resStr;
};
