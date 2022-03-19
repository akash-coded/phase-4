class Person {
  name; // (optional)

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I am ${this.name}`);
  }
}

class Learner extends Person {
  #year;
  #studyLoanAmt;

  constructor(name, year, studyLoanAmt) {
    super(name);
    this.#year = year;
    this.#studyLoanAmt = studyLoanAmt;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  isFresher() {
    return this.#year === 1;
  }

  // private method
  #hasTakenStudyLoan() {
    return this.#studyLoanAmt > 0;
  }

  isEligibleForScholarship() {
    return this.#hasTakenStudyLoan();
  }
}

const kamal = new Learner("Kamal", 2, 50000);
kamal.introduceSelf();
if (kamal.isFresher()) {
  console.log(`Fresher student`);
} else {
  console.log(`Senior student`);
}
console.log("Scholarship Eligibility: " + kamal.isEligibleForScholarship());
