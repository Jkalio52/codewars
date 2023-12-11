function isMerge(s, part1, part2) {
  // Divide the strings into ordered list of substrings
  let input = s.split('');
  let firstWrd = part1.split('');
  let secondWrd = part2.split('');
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === firstWrd[0]) {
      firstWrd.splice(0, 1);
    } else if (input[i] === secondWrd[0]) {
      secondWrd.splice(0, 1);
    } else {
      return false;
    }
  }
  return true;
}


