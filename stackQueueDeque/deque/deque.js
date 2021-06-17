"use strict";
exports.__esModule = true;
var stack_1 = require("../stack/stack");
// // 트리 구조의 자식 노드 정의
var DequeNode = /** @class */ (function () {
    function DequeNode(value) {
        if (value === void 0) { value = null; }
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    return DequeNode;
}());
// tslint:disable-next-line: max-classes-per-file
var Deque = /** @class */ (function () {
    function Deque() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // 크기 구하는 메소드
    Deque.prototype.getSize = function () {
        Object.setPrototypeOf(stack_1.Stack.prototype.getSize);
    };
    // 앞에서 물건 추가 메소드
    Deque.prototype.unshift = function (value) {
        var newOneNode = new DequeNode(value);
        if (!this.tail) {
            this.head = newOneNode;
            this.tail = newOneNode;
        }
        else {
            this.head.prev = newOneNode;
            newOneNode.next = this.head;
            this.head = newOneNode;
        }
        this.size++;
        console.log("\uC55E\uCABD\uC73C\uB85C " + value + " \uCD94\uAC00 \uC644\uB8CC");
    };
    // 뒤에서 물건 추가 메소드
    Deque.prototype.push = function (value) {
        var newOneNode = new DequeNode(value);
        if (!this.tail) {
            this.head = newOneNode;
            this.tail = newOneNode;
        }
        else {
            this.tail.next = newOneNode;
            newOneNode.prev = this.tail;
            this.tail = newOneNode;
        }
        this.size++;
        console.log("\uB4A4\uCABD\uC73C\uB85C " + value + " \uCD94\uAC00 \uC644\uB8CC");
    };
    // 앞에서 물건 삭제
    Deque.prototype.shift = function () {
        if (!this.tail) {
            console.log("empty Deque!");
            return;
        }
        else if (this.tail === this.head) {
            var poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log("shift is ok, " + poppedItem.value + " is removed, Deque is currently empty.");
        }
        else {
            var poppedItem = this.head;
            this.head = poppedItem.next;
            console.log("shift is ok, " + poppedItem.value + " is removed");
        }
        this.size--;
    };
    // 뒤에서 물건 삭제
    Deque.prototype.pop = function () {
        if (!this.tail) {
            console.log("empty Deque!");
            return;
        }
        else if (this.tail === this.head) {
            var poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log("pop is ok, " + poppedItem.value + " is removed, Deque is currently empty.");
        }
        else {
            var poppedItem = this.tail;
            this.tail = poppedItem.prev;
            console.log("pop is ok, " + poppedItem.value + " is removed");
        }
        this.size--;
    };
    // 특정 물건의 이름으로 인덱스 찾는 메소드
    Deque.prototype.searchIdxByName = function (name) {
        if (!this.tail) {
            console.log("empty Deque!");
            return;
        }
        else {
            var idx = this.size - 1;
            var tail = this.tail;
            if (tail.value === name) {
                console.log("your node index is here, " + idx);
                return idx;
            }
            while (tail.prev) {
                idx--;
                if (tail.prev.value === name) {
                    console.log("your node index is here, " + idx);
                    return idx;
                }
                tail = tail.prev;
            }
            console.log("there is no " + name + " in this Deque");
            return;
        }
    };
    // 해당 위치 인덱스에 있는 물건 이름 찾는 메소드
    Deque.prototype.searchNameByIdx = function (index) {
        if (!this.tail || index > this.size - 1) {
            console.log("empty Deque or input idx is bigger than Deque length");
            return;
        }
        else {
            var curIdx = this.size - 1;
            var tail = this.tail;
            while (curIdx !== index) {
                tail = tail.prev;
                curIdx--;
            }
            console.log("your stuff is here, " + tail.value);
            return tail.value;
        }
    };
    return Deque;
}());
// stack, queue merge
// 제네릭 적용하여 타입 적용 원하는대로
// class DequeNode {
// }
// function merge(class1, class2):any {
//   // console.log(class1, class2);
//   for (const key in class1) {
//     Deque[key] = class1[key];
//   }
//   for (const key in class2) {
//     Deque[key] = class2[key];
//   }
// }
// merge(new Queue(), new Stack());
// console.log(Deque);
// const combine = {...new Queue(), ...new Stack()}
// console.log(combine);
console.log(stack_1.Stack.prototype.getSize);
// const deque = new Deque();
// deque.push('test1');
// deque.getSize();
// deque.push('test2');
// deque.getSize();
// deque.push('test3');
// deque.getSize();
// deque.push('test4');
// deque.getSize();
// deque.unshift('test1');
// deque.getSize();
// deque.unshift('test2');
// deque.getSize();
// deque.unshift('test3');
// deque.getSize();
// deque.unshift('test4');
// deque.getSize();
// deque.searchIdxByName('test5')
// deque.searchIdxByName('test4')
// deque.searchNameByIdx(1);
// deque.searchNameByIdx(0)
// deque.pop();
// deque.getSize();
// deque.pop();
// deque.getSize();
// deque.pop();
// deque.getSize();
// deque.pop();
// deque.getSize();
// deque.shift();
// deque.getSize();
// deque.shift();
// deque.getSize();
// deque.shift();
// deque.getSize();
// deque.shift();
// deque.getSize();
