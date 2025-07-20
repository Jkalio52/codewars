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

