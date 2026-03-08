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



/*
Modern Refactor with Arrow Functions.
Symbol.toPrimitive instead of valueOf. 
Symbol.toPrimitive is the ES6+ standard for defining how an object should behave when converted to a string or number.
*/
/**
 * A curried addition function that supports infinite chaining.
 * Uses Symbol.toPrimitive for modern type coercion.
 */
const add = (n) => {
  // Recursively return the add function with the accumulated sum
  const fn = (m) => add(n + m);

  // Define how the function behaves when used as a value (e.g., +add(1)(2))
  fn[Symbol.toPrimitive] = (hint) => n;

  return fn;
};

// Usage:
// console.log(+add(1)(2)(3)); // 6
