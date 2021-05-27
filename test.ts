function hello(constructFn: Function) {
  constructFn.prototype.hello = function() {
    console.log('hello');
  }
}

@hello
class Person {

}

const p = new Person();
p.hello();