// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const leedoing = new Human("leedoing", 33, "male");

const sayHi = (person: Human): void => {
  if (!person.gender) {
    console.log(`Hello ${person.name}, you are ${person.age}`);
  } else {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
  }
};

sayHi(leedoing);

export {};
