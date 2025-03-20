const person = {
    greet() {
      return `Hello, I am ${this.name}`;
    }
  };
  
  const user = Object.create(person);
  user.name = "Alice";
  
  console.log(user.greet());
  console.log(Object.getPrototypeOf(user) === person);   