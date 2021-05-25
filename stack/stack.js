var OneNode = /** @class */ (function () {
    function OneNode(value) {
        if (value === void 0) { value = null; }
        this.value = value;
        this.next = null;
    }
    return OneNode;
}());
// tslint:disable-next-line: max-classes-per-file
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Stack.prototype.getSize = function () {
        console.log("current size is " + this.size);
        return this.size;
    };
    Stack.prototype.push = function (value) {
        var newOneNode = new OneNode(value);
        if (!this.tail) {
            this.head = newOneNode;
            this.tail = newOneNode;
        }
        else {
            newOneNode.next = this.head;
            this.head = newOneNode;
        }
        this.size++;
        console.log(value + " \uCD94\uAC00 \uC644\uB8CC");
    };
    Stack.prototype.pop = function () {
        if (!this.tail) {
            console.log("empty stack!");
            return;
        }
        else if (this.tail === this.head) {
            var poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log("pop is ok, " + poppedItem.value + " is removed, stack is currently empty.");
        }
        else {
            var poppedItem = this.head;
            this.head = this.head.next;
            console.log("pop is ok, " + poppedItem.value + " is removed");
        }
        this.size--;
    };
    Stack.prototype.searchIdxByName = function (name) {
        if (!this.tail) {
            console.log("empty stack!");
            return;
        }
        else {
            var idx = 0;
            var head = this.head;
            if (head.value === name) {
                console.log("your node index is here, " + idx);
                return idx;
            }
            while (head.next) {
                idx++;
                if (head.next.value === name) {
                    console.log("your node index is here, " + idx);
                    return idx;
                }
                head = head.next;
            }
            console.log("there is no " + name + " in this stack");
            return;
        }
    };
    Stack.prototype.searchNameByIdx = function (index) {
        if (!this.tail || index > this.size - 1) {
            console.log("empty stack or input idx is bigger than stack length");
            return;
        }
        else {
            var curIdx = 0;
            var head = this.head;
            while (curIdx !== index) {
                head = head.next;
                curIdx++;
            }
            console.log("your stuff is here, " + head.value);
            return head.value;
        }
    };
    return Stack;
}());
var stack = new Stack();
stack.push('test1');
stack.getSize();
stack.push('test2');
stack.getSize();
stack.push('test3');
stack.getSize();
stack.push('test4');
stack.getSize();
stack.searchIdxByName('test5');
stack.searchIdxByName('test4');
stack.searchNameByIdx(1);
stack.searchNameByIdx(0);
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
