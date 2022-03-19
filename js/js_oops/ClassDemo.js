class ClassDemo {
  name; // property (optional)

  constructor(name) {
    // providing initial values for state (member variable)
    this.name = name;
  }

  // implementation for behaviour (member function or method)
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

// Creating an object (instance) of a class
let user = new ClassDemo("Akash"); // constructor() method called automatically by new
user.sayHi();

// proof: User is a function
console.log(typeof ClassDemo);
