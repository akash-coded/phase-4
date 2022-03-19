class Animal {
  sleep() {
    console.log("zzzzzzz..");
  }
}

class Dog extends Animal {
  bark() {
    console.log("bhow bhow!");
  }
}

const animal = new Animal();
animal.sleep();

const bruno = new Dog();
bruno.sleep();
bruno.bark();
