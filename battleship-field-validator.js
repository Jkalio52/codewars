function validateBattlefield(field) {
  // write your magic here
  let hit = (horizontal, vertical) => (horizontal < 0 || vertical < 0 || horizontal > 9 || vertical > 9) ? 0 : field[horizontal][vertical];
  for (var ships = [10, 0, 0, 0, 0], horizontal = 0; horizontal < 10; horizontal++) {
    for (var vertical = 0; vertical < 10; vertical++) {
      if (hit(horizontal, vertical)) {
        if (hit(horizontal-1, vertical-1) || hit(horizontal-1, vertical+1)) 
          return false;
        if (hit(horizontal-1, vertical) && hit(horizontal, vertical-1)) 
          return false;
        if ((field[horizontal][vertical] += hit(horizontal-1, vertical) + hit(horizontal, vertical-1)) > 4) 
          return false;
        
        ships[field[horizontal][vertical]]++; ships[field[horizontal][vertical] - 1]--;
       } 
     } 
  }
  
  return [0, 4, 3, 2, 1].every((s, i) => s == ships[i]);
}



