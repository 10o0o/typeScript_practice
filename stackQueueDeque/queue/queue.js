"use strict";
exports.__esModule = true;
exports.Queue = exports.QueueNode = void 0;
// 트리 구조의 자식 노드 정의
var QueueNode = /** @class */ (function () {
    function QueueNode(value) {
        if (value === void 0) { value = null; }
        this.value = value;
        this.prev = null;
    }
    return QueueNode;
}());
exports.QueueNode = QueueNode;
// tslint:disable-next-line: max-classes-per-file
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // 크기 구하는 메소드
    Queue.prototype.getSize = function () {
        console.log("current size is " + this.size);
        return this.size;
    };
    // 물건 추가 메소드
    Queue.prototype.push = function (value) {
        var newOneNode = new QueueNode(value);
        if (!this.tail) {
            this.head = newOneNode;
            this.tail = newOneNode;
        }
        else {
            this.head.prev = newOneNode;
            this.head = newOneNode;
        }
        this.size++;
        console.log(value + " \uCD94\uAC00 \uC644\uB8CC");
    };
    // 물건 삭제 메소드(LIFO)
    Queue.prototype.pop = function () {
        if (!this.tail) {
            console.log("empty queue!");
            return;
        }
        else if (this.tail === this.head) {
            var poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log("pop is ok, " + poppedItem.value + " is removed, queue is currently empty.");
        }
        else {
            var poppedItem = this.tail;
            this.tail = this.tail.prev;
            console.log("pop is ok, " + poppedItem.value + " is removed");
        }
        this.size--;
    };
    // 특정 물건의 이름으로 인덱스 찾는 메소드
    Queue.prototype.searchIdxByName = function (name) {
        if (!this.tail) {
            console.log("empty queue!");
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
            console.log("there is no " + name + " in this queue");
            return;
        }
    };
    // 해당 위치 인덱스에 있는 물건 이름 찾는 메소드
    Queue.prototype.searchNameByIdx = function (index) {
        if (!this.tail || index > this.size - 1) {
            console.log("empty queue or input idx is bigger than queue length");
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
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue();
// queue.push('test1');
// queue.getSize();
// queue.push('test2');
// queue.getSize();
// queue.push('test3');
// queue.getSize();
// queue.push('test4');
// queue.getSize();
// queue.searchIdxByName('test5')
// queue.searchIdxByName('test4')
// queue.searchNameByIdx(1);
// queue.searchNameByIdx(0)
// queue.pop();
// queue.getSize();
// queue.pop();
// queue.getSize();
// queue.pop();
// queue.getSize();
// queue.pop();
// queue.getSize();
