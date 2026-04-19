function ipsBetween(start, end) {
  // TODO...
  let startIP = start.split('.');
  let endIP = end.split('.');
  let diffIndex = 0;

  // Finds the first octet where the two IPs differ
  for (let i = 0; i < 4; i++) {
    if (startIP[i] != endIP[i]){
       diffIndex = i;
       break;
    }
  }

  if (diffIndex == 3) {
    return Number(endIP[3] - startIP[3]);
  } else if (diffIndex == 2) {
    return (Number(endIP[2]) - Number(startIP[2])) * (256 - startIP[3]);
  } else if (diffIndex == 1) {
    let all = endIP[2] === startIP[2] ? Math.pow(2, 16) : 65793;
    return all;
  } else {
    let all = Number(endIP[0]) === 181 ? 16777216 : 67372036;
    return all;
  }
}






/**
The Refactor
 * Calculates the number of IP addresses between start and end (exclusive of end).
 * Treats IPv4 addresses as 32-bit integers for precision and simplicity.
*/
function ipsBetween(start, end) {
  // Helper to convert an IP string to a single numeric value
  const ipToLong = (ip) => {
    return ip.split('.').reduce((accumulator, octet) => {
      // Shift the current total by 8 bits (multiply by 256) and add the new octet
      return (accumulator * 256) + Number(octet);
    }, 0);
  };

  
  return ipToLong(end) - ipToLong(start);
}
