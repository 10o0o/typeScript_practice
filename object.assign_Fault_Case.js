let obj = {
  a: 1,
  b: {
    c: 2,
  },
}
// let newObj = Object.assign({}, obj);
// console.log(newObj); // { a: 1, b: { c: 2} }

// obj.a = 10;
// console.log(obj); // { a: 10, b: { c: 2} }
// console.log(newObj); // { a: 1, b: { c: 2} }

// newObj.a = 20;
// console.log(obj); // { a: 10, b: { c: 2} }
// console.log(newObj); // { a: 20, b: { c: 2} }

// newObj.b.c = 30;
// console.log(obj); // { a: 10, b: { c: 30} }
// console.log(newObj); // { a: 20, b: { c: 30} }

// Note: newObj.b.c = 30; Read why..

const testObj = JSON.parse(JSON.stringify(obj));
obj.b.c = 30;
console.log(testObj);