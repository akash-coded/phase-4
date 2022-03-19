class Person {
  name; // (optional)

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I am ${this.name}`);
  }
}

class Trainer extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `Hi guys! My name is ${this.name}, and I am your trainer for ${this.teaches}`
    );
  }

  gradeAssignment(marks) {
    const grade = marks / 10;
    console.log("Grade = " + grade);
  }
}

const vishal = new Person("Vishal");
vishal.introduceSelf();

const akash = new Trainer("Akash", "Java");
akash.introduceSelf();
akash.gradeAssignment(92);
