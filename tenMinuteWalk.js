function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length !== 10)
    return false;
  
  let direction = {
    n: 0,
    s: 0,
	  e: 0,
    w: 0
  }
  
  for (let i = 0; i < walk.length; i++) {
    direction[walk[i]] ++;
  }
  
  if (direction["n"] !== direction["s"] || direction["w"] !== direction["e"])
    return false;
  else {
    return true;
  }
}
