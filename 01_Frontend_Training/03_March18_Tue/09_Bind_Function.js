Function.prototype.myBind = function(context, ...args) {
    const originalFunction = this;
    return function(...innerArgs) {
      return originalFunction.apply(context, [...args, ...innerArgs]);
    };
  };
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  
  const person = { name: "Alice" };
  const greetPerson = greet.myBind(person, "Hello");
  greetPerson(); 

