/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
  let deps = func.toString().match(/function\s?\((.+)\)\s?{/);
  // Create param array
  deps = deps && deps[1].split(",").map(function(i) { 
    return i.replace(/\s+/, ''); 
  });
  
  let funcArr = [];
  for (var i = 0; deps && i < deps.length; i++) {
  	funcArr.push(this.dependency[deps[i]]);
  }
 
  // Pass dependent parameters to the function with apply() method
  return function() {
  	return func.apply(func, funcArr);
  };
}
