var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.hello = function () {
        console.log(this.name + " \u314E\u3147");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.HEIGHT = 160;
    return Person;
}());
var person = new Person('JS', 25);
person.setName('JSJSJS');
console.log(person.getName());
