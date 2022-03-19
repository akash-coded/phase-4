class ClassFieldDemo {
  name = "Akash"; // class field

  sayHi() {
    console.log("Hi, %s", this.name); // string substitution
  }
}

let person = new ClassFieldDemo();
person.sayHi();
