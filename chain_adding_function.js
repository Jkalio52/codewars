function add(n) {
  // Let the currying begin!
  const self = function(m) {
	  return add(n + m);
	};
	
	self.valueOf = function() {
	  return n;
	};
	
	return self;
}

add(1);


//* Updated */
function add(n) {
  // Let the currying begin!
  // This inner function captures 'n' in its closure
  const self = function(m) {
    // When called, it returns a NEW instance of add with the updated sum
    return add(n + m);
  };
  
  // This overrides the default object-to-primitive conversion
  // It allows 'add(1)(2)' to be treated as a number in math operations
  self.valueOf = function() {
    return n;
  };
  
  return self;
}
