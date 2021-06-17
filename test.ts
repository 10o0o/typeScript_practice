import { Stack } from './stackQueueDeque/stack/stack'

class Deque {}

Object.setPrototypeOf(Deque, Stack.prototype.getSize)
Object.setPrototypeOf(Deque, Stack.prototype.searchIdxByName)

console.log(Deque.prototype)