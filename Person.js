var Person = (function() {
  var Person = function(name) {
    this.name = name;
  }
  
  Person.greet = function () {
    console.log("Hello!");
  }
  Person.prototype = {
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  return Person;
})();

var bob = new Person('Bob');

Person.greet(); // logs "Hello!"

bob.greet(); // logs "Hello, my name is Bob