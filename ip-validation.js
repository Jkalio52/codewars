/**
Instructions:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid input examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g., 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
Regular ExpressionsAlgorithms
*/
function isValidIP(str) {
  const octets = str.split('.');

  // Must have exactly four octets
  if (octets.length !== 4) return false;

  return octets.every(octet => {
    // Check if octet is a non-empty string of digits only
    if (!/^\d+$/.test(octet)) return false;

    // Check for leading zeros: 
    // "0" is valid, but "01" or "00" are not.
    if (octet.length > 1 && octet[0] === '0') return false;

    // Convert to number and check range 0-255
    const val = Number(octet);
    return val >= 0 && val <= 255;
  });
}
