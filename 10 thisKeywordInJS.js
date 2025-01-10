// this keyword

// new binding
function Person(name, age){
    this.name = name
    this.age = age
}

const person1 = new Person('Sarah', 20)
console.log(person1);

// implicit binding 
const person2 = {
    name: 'Sarah', 
    age: 20, 
    hi(){
        console.log('Hello my name is ', this.name, ' and i am ', this.age, ' years old');
    }
}
person2.hi()

// arrow function
const person3 = {
    name: 'Sarah', 
    age: 20, 
    hi(){
        var inner = () => {
            console.log('Hello my name is ', this.name, ' and i am ', this.age, ' years old');
        }
        return inner()
    }
}
person3.hi()