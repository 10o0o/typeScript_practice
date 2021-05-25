class Person {
  static HEIGHT: number = 160;
  constructor(private name: string, private age: number) {

  }

  hello(): void {
    console.log(`${this.name} ㅎㅇ`);
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName
  }
}

const person: Person = new Person('JS', 25);
person.setName('JSJSJS')
console.log(person.getName());