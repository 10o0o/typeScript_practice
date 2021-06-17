"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stackQueueDeque/stack/stack");
class Deque {
}
Object.setPrototypeOf(Deque, stack_1.Stack.prototype.getSize);
Object.setPrototypeOf(Deque, stack_1.Stack.prototype.searchIdxByName);
console.log(Deque.prototype);
