function nextBigger(n) {
  // your code here
  const posInteger = n => ('' + n).split('').sort((a, b) => b - a)
  const biggestNum = +posInteger(n).join('')
  for (let i = n + 1; i <= biggestNum; i++) {
    if (biggestNum === +posInteger(i).join('')) return i
  }
  
  return -1
}

