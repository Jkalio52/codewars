function ipsBetween(start, end) {
  // TODO... 
  let startIP = start.split('.');
  let endIP = end.split('.');
  let diffIndex = 0;

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


