class GettersAndSettersDemo {
  constructor(name) {
    this.name = name; // invokes the name setter
  }

  // setter
  set name(value) {
    this._name = value;
  }

  // getter
  get name() {
    return this._name;
  }
}

let person = new EncapsulationDemo("Akash");
console.log(person.name); // invokes the name getter

person.name = "John"; // invokes the name setter
console.log(person.name); // invokes the name getter
